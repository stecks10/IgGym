import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';

import BackgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const VALIDATION_RULES = {
  name: {
    required: 'Informe o nome',
    minLength: { value: 3, message: 'O nome deve ter pelo menos 3 caracteres' },
  },
  email: {
    required: 'Informe o e-mail',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Informe um e-mail válido',
    },
  },
  password: {
    required: 'Informe a senha',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      message:
        'A senha deve ter pelo menos 6 caracteres, incluindo letras e números',
    },
  },
  password_confirm: {
    required: 'Confirme a senha',
  },
};

const ControlledInput = ({
  control,
  name,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  onSubmitEditing,
  returnKeyType,
}: {
  control: any;
  name: keyof FormDataProps;
  placeholder: string;
  keyboardType?: 'default' | 'email-address';
  secureTextEntry?: boolean;
  onSubmitEditing?: () => void;
  returnKeyType?: 'default' | 'send';
}) => (
  <Controller
    control={control}
    name={name}
    rules={VALIDATION_RULES[name]}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <>
        <Input
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
        />
        {error && <Text color='$red500'>{error.message}</Text>}
      </>
    )}
  />
);

export function SignUp() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  const handleGoBackLogin = useCallback(() => {
    navigator.navigate('SignIn');
  }, [navigator]);

  const handleSignUp = useCallback(
    ({ name, email, password, password_confirm }: FormDataProps) => {
      if (password !== password_confirm) {
        return console.log('As senhas não coincidem');
      }
      console.log(name, email, password, password_confirm);
    },
    []
  );

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg='$gray700'>
        <Image
          source={BackgroundImg}
          w='$full'
          h={624}
          defaultSource={BackgroundImg}
          alt='Pessoas treinando'
          position='absolute'
        />
        <VStack flex={1} px='$10' pb='$16'>
          <Center my='$24'>
            <Logo />
            <Text color='$gray100' fontSize='$sm'>
              Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center pt='$10' gap='$3'>
            <Heading color='$gray100'>Crie sua conta</Heading>

            <ControlledInput control={control} name='name' placeholder='Nome' />
            <ControlledInput
              control={control}
              name='email'
              placeholder='E-mail'
              keyboardType='email-address'
            />
            <ControlledInput
              control={control}
              name='password'
              placeholder='Senha'
              secureTextEntry
            />
            <ControlledInput
              control={control}
              name='password_confirm'
              placeholder='Confirme a senha'
              secureTextEntry
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType='send'
            />

            <Button onPress={handleSubmit(handleSignUp)} title='Criar conta' />
          </Center>

          <Center flex={1} justifyContent='flex-end' mb='$4'>
            <Button
              title='Voltar para o login'
              onPress={handleGoBackLogin}
              variant='outline'
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
