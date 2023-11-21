import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/authentication/SignIn';
import SignUp from '../screens/authentication/SignUp';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type RouteName = keyof RootStackParamList;

const routes: Array<{ name: RouteName; component: React.ComponentType<any> }> = [
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
];

const MainRouting = () => {  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
          title: '',
        }}
        initialRouteName={routes[0].name}>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouting;
