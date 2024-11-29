import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { Box } from '@gluestack-ui/themed';
import { gluestackUIConfig } from '../../config/gluestack-ui.config';
import { AppRoutes } from './app.routes';

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

  return (
    <Box flex={1} bg='$gray700'>
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  );
}
