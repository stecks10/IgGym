import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Center, Heading, Text, VStack, useToast } from '@gluestack-ui/themed';
import { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { ToastMessage } from '@components/ToastMessage';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/useAuth';
import { AppError } from '@utils/AppError';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { api } from '../service/api';

type FormDataProps = {
  name: string;
  email: string;
  password: string | null;
  old_password: string;
  confirm_password: string | null;
};

export function Profile() {
  const [userPhoto, setUserPhoto] = useState('https://github.com/stecks10.png');
  const [isUpdating, setIsUpdating] = useState(false);

  const toast = useToast();

  const profileSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 dígitos.')
      .nullable()
      .transform((value) => (!!value ? value : null)),
    confirm_password: yup
      .string()
      .nullable()
      .transform((value) => (!!value ? value : null))
      .oneOf([yup.ref('password'), null], 'A confirmação de senha não confere.')
      .when('password', (password, schema) => {
        return password
          ? schema.transform((value) => (!!value ? value : null))
          : schema.nullable();
      }),
  });

  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email,
      password: '',
      old_password: '',
      confirm_password: '',
    },
    resolver: yupResolver(profileSchema as yup.ObjectSchema<FormDataProps>),
  });
  async function handleUserPhotoSelection() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      const photoUri = photoSelected.assets[0].uri;

      if (photoUri) {
        const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
          size: number;
        };

        if (photoInfo.size && photoInfo.size > 5_000_000) {
          toast.show({
            placement: 'top',
            render: ({ id }) => (
              <ToastMessage
                id={id}
                title='Imagem muito grande'
                description='Escolha uma imagem com no máximo 5MB'
                action='error'
              />
            ),
          });
          return;
        }
        setUserPhoto(photoUri);
      }
    } catch (error) {
      console.error(error);
      toast.show({
        placement: 'top',
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title='Erro ao escolher a foto'
            description='Ocorreu um erro ao escolher a foto'
            action='error'
          />
        ),
      });
    }
  }

  async function handleProfileUpdate(data: FormDataProps) {
    try {
      setIsUpdating(true);
      await api.put('/users', data);

      toast.show({
        placement: 'top',
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title='Perfil atualizado'
            description='Seu perfil foi atualizado com sucesso'
            action='success'
          />
        ),
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível atualizar o perfil';

      toast.show({
        placement: 'top',
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title={title}
            description='Tente novamente mais tarde'
            action='error'
          />
        ),
      });
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={'$6'} px={'$10'}>
          <UserPhoto
            source={{ uri: userPhoto }}
            alt='Foto do usuário'
            size='xl'
          />
          <TouchableOpacity onPress={handleUserPhotoSelection}>
            <Text
              color='$green500'
              fontFamily='$heading'
              fontSize={'$md'}
              mt={'$2'}
              mb={'$8'}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>
          <Center w={'$full'} gap={'$4'}>
            <Controller
              control={control}
              name='name'
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='Nome'
                  bg='$gray600'
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='E-mail'
                  bg='$gray600'
                  onChangeText={onChange}
                  value={value}
                  isDisabled
                  errorMessage={errors.email?.message}
                />
              )}
            />
          </Center>

          <Heading
            alignSelf='flex-start'
            fontFamily='$heading'
            color='$gray200'
            fontSize={'$md'}
            mt={'$12'}
            mb={'$2'}
          >
            Alterar senha
          </Heading>

          <Center w={'$full'} gap={'$4'}>
            <Controller
              control={control}
              name='old_password'
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='Senha antiga'
                  bg='$gray600'
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  textContentType='oneTimeCode'
                />
              )}
            />
            <Controller
              control={control}
              name='password'
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='Nova senha'
                  secureTextEntry
                  bg='$gray600'
                  onChangeText={onChange}
                  value={value as string | undefined}
                  errorMessage={errors.password?.message}
                  textContentType='oneTimeCode'
                />
              )}
            />
            <Controller
              control={control}
              name='confirm_password'
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='Confirme a nova senha'
                  bg='$gray600'
                  secureTextEntry
                  onChangeText={onChange}
                  value={value as string | undefined}
                  textContentType='oneTimeCode'
                  errorMessage={errors.confirm_password?.message}
                />
              )}
            />

            <Button
              title='Atualizar'
              onPress={handleSubmit(handleProfileUpdate)}
              isLoading={isUpdating}
            />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
