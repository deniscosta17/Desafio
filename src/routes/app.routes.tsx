import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartMarket } from '../Pages/CartMarket'

const AppStack = createNativeStackNavigator();

const AuthRoutes : React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="CartMarket" component={ CartMarket } />
    </AppStack.Navigator>
  )
};

export default  AuthRoutes;