import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { View } from 'react-native';

import { Center, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GluestackUIProvider config={config}>
      {fontsLoaded ? (
        <Center flex={1} bg='$gray700'>
          <Text color='black'>Home</Text>
        </Center>
      ) : (
        <View />
      )}
    </GluestackUIProvider>
  );
}
