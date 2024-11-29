import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';

export function HomeHeader() {
  return (
    <HStack bg='$gray600' pt='$16' pb='$5' px={'$8'} alignItems='center'>
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
