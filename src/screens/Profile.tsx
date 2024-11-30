import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Center, VStack } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';

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
        </Center>
      </ScrollView>
    </VStack>
  );
}
