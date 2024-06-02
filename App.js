import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './AuthContext';
import { registerRootComponent } from 'expo';

import Login from './forms/Login';
import Home from './pages/Home';
import Registro from './forms/Registro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '',
              headerTransparent: true,
              headerLeft: () => null,
            }}
          />
          <Stack.Screen
            name="Registro"
            component={Registro}
            options={{
              title: '',
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: '',
              headerTransparent: true,
              headerLeft: () => null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

registerRootComponent(App);
