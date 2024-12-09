import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '@contexts/AuthContext';
import { Box } from '@gluestack-ui/themed';
import { gluestackUIConfig } from '../../config/gluestack-ui.config';
import { AuthRoutes } from './auth.routes';

import { useAuth } from '@hooks/useAuth';
import { useContext } from 'react';

export function Routes() {
  const contextData = useContext(AuthContext);
  const { user } = useAuth();

  console.log(contextData);

  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

  return (
    <Box flex={1} bg='$gray700'>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
