import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

type AuthRoutesParams = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AuthRoutesParams>;

export function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesParams>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='SignIn' component={SignIn} />
      <Screen name='SignUp' component={SignUp} />
    </Navigator>
  );
}
