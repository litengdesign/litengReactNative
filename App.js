


import React, { Component } from "react";
import { Text, View,Button } from 'react-native';
import MainNavigator from './navigator/mainNavigate';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/login';
const Stack = createStackNavigator();

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = { isLogin: true };
  }
  render(){
    return (
      <NavigationContainer >
          <Stack.Navigator
           initialRouteName='用户登录'
          >
              <Stack.Screen 
              title='' 
              name="Home" 
              component={MainNavigator} 
              options = {{
                headerShown:false
              }}
              />
              <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}