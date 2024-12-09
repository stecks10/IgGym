import { UserDTO } from '@dtos/UserDTO';
import { createContext, useState } from 'react';

export type AuthContextDataProps = {
  user: UserDTO;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: '1',
    name: 'João',
    email: 'vitor@gmail.com',
    avatar: 'https://github.com/rodrigoguimaraes.png',
  });

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
