import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';
import { UserPhoto } from './UserPhoto';

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
      <VStack>
        <Text color='$white' fontSize={'$sm'}>
          Olá,
        </Text>
        <Heading color='$white' fontSize={'$md'}>
          Vitor Nunes
        </Heading>
      </VStack>
    </HStack>
  );
}
