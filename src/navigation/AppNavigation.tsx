import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { stackParams } from '../types/stackParam';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator<stackParams>()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 
export default AppNavigation;