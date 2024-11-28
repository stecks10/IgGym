import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { SignIn } from '@screens/SignIn';
import { config } from './config/gluestack-ui.config';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GluestackUIProvider config={config}>
      {fontsLoaded ? <SignIn /> : <Loading />}
    </GluestackUIProvider>
  );
}
