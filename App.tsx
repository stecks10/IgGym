import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import { AuthContext } from '@contexts/AuthContext';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Routes } from '@routes/index';
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

      <AuthContext.Provider
        value={{
          user: {
            id: '1',
            name: 'João',
            email: 'vitor@gmail.com',
            avatar: 'https://github.com/rodrigoguimaraes.png',
          },
        }}
      >
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </GluestackUIProvider>
  );
}
