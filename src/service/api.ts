import {
  storageAuthTokenGet,
  storageAuthTokenSave,
} from '@storage/storageAuthToken';
import { AppError } from '@utils/AppError';
import axios, { AxiosInstance } from 'axios';

type SignOut = () => void;

type ApiInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
};

const api = axios.create({
  baseURL: 'http://192.168.1.74:3333',
}) as ApiInstanceProps;

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(token);
    } else {
      prom.reject(error);
    }
  });

  failedQueue = [];
};

api.registerInterceptTokenManager = (signOut) => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401) {
        if (
          error.response.data?.message === 'Token.expired' ||
          error.response.data?.message === 'Token.invalid'
        ) {
          if (!isRefreshing) {
            isRefreshing = true;

            try {
              const refreshToken = await storageAuthTokenGet();

              if (!refreshToken) {
                signOut();
                throw new AppError('Sessão expirada. Faça login novamente.');
              }

              const { data } = await api.post('/sessions/refresh-token', {
                refresh_token: refreshToken,
              });

              await storageAuthTokenSave(data.token);
              api.defaults.headers.common['Authorization'] =
                `Bearer ${data.token}`;

              processQueue(null, data.token);
            } catch (err) {
              processQueue(err, null);
              signOut();
              return Promise.reject(err);
            } finally {
              isRefreshing = false;
            }
          }

          return new Promise((resolve, reject) => {
            failedQueue.push({
              resolve: (token: string) => {
                originalRequest.headers['Authorization'] = `Bearer ${token}`;
                resolve(api(originalRequest));
              },
              reject: (err: any) => {
                reject(err);
              },
            });
          });
        }

        signOut();
      }

      if (error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message));
      } else {
        return Promise.reject(error);
      }
    }
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};

export { api };
