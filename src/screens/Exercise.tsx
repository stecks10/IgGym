import BodySvg from '@assets/body.svg';
import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { ArrowLeft } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={'$8'} bg='$gray600' pt={'$16'}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color='$green500' size='xl' />
        </TouchableOpacity>

        <HStack
          justifyContent='space-between'
          alignItems='center'
          mt={'$4'}
          mb={'$8'}
        >
          <Heading
            color='$gray100'
            fontFamily='$heading'
            fontSize={'$lg'}
            flexShrink={1}
          >
            Puxada Frontal
          </Heading>
          <HStack alignItems='center' gap={'$1'}>
            <BodySvg />

            <Text color='$gray200' ml={'$1'} textTransform='capitalize'>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <VStack p={'$8'} flex={1} mt={'$6'} bg='$gray600'>
        <Image
          source={{
            uri: 'https://s2-ge.glbimg.com/u7ggtx-50ZJ_sW1YWiQ-gkAYNH0=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/es/ge/f/original/2017/07/14/istock-538489090.jpg',
          }}
          alt='Imagem do exercício'
          mb={'$3'}
          resizeMode='cover'
          rounded={'$lg'}
          w={'$full'}
          h={'$80'}
        />
      </VStack>
    </VStack>
  );
}
