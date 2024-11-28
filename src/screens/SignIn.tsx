import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import BackgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigator.navigate('SignUp');
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

          <Center pt={'$32'} gap='$3'>
            <Heading color='$gray100'>Acesse a conta</Heading>
            <Input
              placeholder='Email'
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Input placeholder='Senha' secureTextEntry />

            <Button title='Acessar' />
          </Center>

          <Center flex={1} justifyContent='flex-end' mb='$4'>
            <Text color='$gray100' fontSize='$sm' mb='$3' fontFamily='$body'>
              Ainda não tem conta?
            </Text>

            <Button
              title='Criar conta'
              variant='outline'
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
