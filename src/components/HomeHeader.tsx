import { Heading, HStack, Icon, Text, VStack } from '@gluestack-ui/themed';
import { UserPhoto } from './UserPhoto';

import { useAuth } from '@hooks/useAuth';
import { LogOut } from 'lucide-react-native';

import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

export function HomeHeader() {
  const { user } = useAuth();

  return (
    <HStack
      bg='$gray600'
      pt='$16'
      pb='$5'
      px={'$8'}
      alignItems='center'
      gap={'$4'}
    >
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : defaultUserPhotoImg}
        alt='Photo do usuário'
        w={'$16'}
        h={'$16'}
      />
      <VStack flex={1}>
        <Text color='$white' fontSize={'$sm'}>
          {user.name}
        </Text>
        <Heading color='$white' fontSize={'$md'}></Heading>
      </VStack>

      <Icon as={LogOut} color='$gray200' size='xl' />
    </HStack>
  );
}
