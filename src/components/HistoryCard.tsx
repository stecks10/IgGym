import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';

export function HistoryCard() {
  return (
    <HStack
      w='$full'
      px={'$4'}
      py={'$4'}
      mb={'$3'}
      bg='$gray600'
      rounded={'$md'}
      alignItems='center'
      justifyContent='space-between'
    >
      <VStack flex={1} mr={'$5'}>
        <Heading
          fontSize={'$md'}
          fontFamily='$heading'
          color='$white'
          textTransform='capitalize'
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text color='$gray100' fontSize={'$lg'} numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>
      <Text color='$gray300' fontSize={'$md'}>
        08:00
      </Text>
    </HStack>
  );
}
