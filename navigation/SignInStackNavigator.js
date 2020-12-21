import React from 'react'

import Login from '../screens/Login'
import Register from '../screens/Register'

import { createStackNavigator } from '@react-navigation/stack';

const LoginStack = createStackNavigator()

const LoginStackScreens = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="LoginScreen" component={Login} />
      <LoginStack.Screen name="RegisterScreen" component={Register} />
    </LoginStack.Navigator>
  );
}

const LoginScreenNavigation = () => {
  return <LoginStackScreens/>
}

export { LoginScreenNavigation }