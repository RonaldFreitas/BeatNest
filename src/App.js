import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}