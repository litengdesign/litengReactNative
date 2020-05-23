


import React, { Component } from "react";
import { Text, View,Button } from 'react-native';
import MainNavigator from './navigator/mainNavigate';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/login';
const Stack = createStackNavigator();

// function MainNavigator({navigation,route}){
//   return (<View><Text style={{ margin: 10 }}>Post: {route.params?.post}</Text></View>)
// }
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = { isLogin: true };
  }
  render(){
    return (
      <NavigationContainer >
          <Stack.Navigator
           initialRouteName='Login'
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