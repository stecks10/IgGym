import { HistoryDTO } from '@dtos/HistoryDTO';
import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';

type Props = {
  data: HistoryDTO;
};

export function HistoryCard({ data }: Props) {
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
          {data.group}
        </Heading>
        <Text color='$gray100' fontSize={'$lg'} numberOfLines={1}>
          {data.name}
        </Text>
      </VStack>
      <Text color='$gray300' fontSize={'$md'}>
        {data.hour}
      </Text>
    </HStack>
  );
}
