import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Center, Heading, Text, VStack } from '@gluestack-ui/themed';
import { ScrollView, TouchableOpacity } from 'react-native';

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={'$6'} px={'$10'}>
          <UserPhoto
            source={{ uri: 'https://github.com/stecks10.png' }}
            alt='Foto do usuário'
            size='xl'
          />
          <TouchableOpacity>
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
            <Input placeholder='Nome' bg='$gray600' />
            <Input value='stecks10@gmail.com' bg='$gray600' isReadOnly />
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
            <Input placeholder='Senha Antiga' bg='$gray600' />
            <Input placeholder='Nova senha' bg='$gray600' />

            <Button title='Atualizar' />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
