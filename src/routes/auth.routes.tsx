import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Signin } from '../Pages/Signin'
import { CartMarket } from '../Pages/CartMarket'

const AuthStack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="CartMarket" component={ CartMarket } />
    </AuthStack.Navigator>
  )
};

export default  AuthRoutes;