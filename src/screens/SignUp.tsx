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
import { useState } from 'react';

export function SignUp() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleGoBackLogin() {
    navigator.navigate('SignIn');
  }

  function handleSignUp() {
    console.log(name);
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg='$gray700'>
        <Image
          source={BackgroundImg}
          w={'$full'}
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

          <Center pt={'$24'} gap='$3'>
            <Heading color='$gray100'>Crie sua conta</Heading>
            <Input
              placeholder='Name'
              keyboardType='default'
              autoCapitalize='none'
              onChangeText={setName}
            />
            <Input
              placeholder='E-mail'
              keyboardType='email-address'
              secureTextEntry
              onChangeText={setEmail}
            />
            <Input
              onChangeText={setPassword}
              placeholder='Senha'
              secureTextEntry
            />

            <Input
              onChangeText={setPasswordConfirm}
              placeholder='Confirme a senha'
              secureTextEntry
            />

            <Button onPress={handleSignUp} title='Criar conta' />
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
