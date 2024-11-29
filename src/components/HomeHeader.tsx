import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';

export function HomeHeader() {
  return (
    <HStack>
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
