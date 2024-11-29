import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Exercise } from '@screens/Exercise';
import { History } from '@screens/History';
import { Home } from '@screens/Home';
import { Profile } from '@screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='History' component={History} />
      <Screen name='Profile' component={Profile} />
      <Screen name='Exercise' component={Exercise} />
    </Navigator>
  );
}
