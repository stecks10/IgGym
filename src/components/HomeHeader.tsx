import { Heading, HStack, Icon, Text, VStack } from '@gluestack-ui/themed';
import { UserPhoto } from './UserPhoto';

import { LogOut } from 'lucide-react-native';

export function HomeHeader() {
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
        source={{ uri: 'https://github.com/stecks10.png' }}
        alt='Photo do usuário'
        w={'$16'}
        h={'$16'}
      />
      <VStack flex={1}>
        <Text color='$white' fontSize={'$sm'}>
          Olá,
        </Text>
        <Heading color='$white' fontSize={'$md'}>
          Vitor Nunes
        </Heading>
      </VStack>

      <Icon as={LogOut} color='$gray200' size='xl' />
    </HStack>
  );
}
