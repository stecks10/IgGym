import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { SignIn } from '@screens/SignIn';
import { StatusBar } from 'react-native';
import { config } from './config/gluestack-ui.config';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </GluestackUIProvider>
  );
}
