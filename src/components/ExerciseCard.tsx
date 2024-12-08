import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { ChevronRight } from 'lucide-react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg='$gray500'
        alignItems='center'
        p='$2'
        pr={'$4'}
        rounded='$md'
        mb={'$3'}
      >
        <Image
          source={{
            uri: 'https://s2-ge.glbimg.com/u7ggtx-50ZJ_sW1YWiQ-gkAYNH0=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/es/ge/f/original/2017/07/14/istock-538489090.jpg',
          }}
          alt='Imagem do exercício'
          w='$16'
          h='$16'
          rounded={'$md'}
          mr='$4'
          resizeMode='cover'
        />
        <VStack flex={1}>
          <Heading fontSize={'$lg'} fontFamily='$heading' color='$white'>
            Puxada frontal
          </Heading>
          <Text color='$gray200' fontSize={'$sm'} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon as={ChevronRight} color='$gray300' />
      </HStack>
    </TouchableOpacity>
  );
}
