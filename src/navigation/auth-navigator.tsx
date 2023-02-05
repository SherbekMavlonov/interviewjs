import React from 'react';
import {View} from 'react-native/types';

import {createStackNavigator} from '@react-navigation/stack';
import {StackNameAuth} from '@constants/navigation';

export type AuthStackParamList = {
  [StackNameAuth.FORGOT_PASSWORD]: undefined;
  [StackNameAuth.LOGIN]: undefined;
  [StackNameAuth.SIGN_UP]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const Login = () => null;

export default () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={StackNameAuth.LOGIN} component={Login} />
      <AuthStack.Screen name={StackNameAuth.SIGN_UP} component={Login} />
      <AuthStack.Screen
        name={StackNameAuth.FORGOT_PASSWORD}
        component={Login}
      />
    </AuthStack.Navigator>
  );
};
