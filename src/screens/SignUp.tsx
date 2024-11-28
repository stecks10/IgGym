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

export function SignUp() {
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
              placeholder='Email'
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Input placeholder='Senha' secureTextEntry />
            <Input placeholder='Confirme a senha' secureTextEntry />

            <Button title='Criar conta' />
          </Center>

          <Center flex={1} justifyContent='flex-end' mb='$4'>
            <Button title='Voltar para o login' variant='outline' />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
