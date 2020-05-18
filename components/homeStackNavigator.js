import * as React from 'react';
import { Button, Text, View,Image,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../pages/home';
import Map from '../pages/map';


function SettingsScreen({ navigation }) {
  return (
    <View style={styles.header}>
      <Text>Settings screen</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.logo}>
      {/* <Image
        style={{ 
          width: 40, 
          height: 40,
        }}
        source={require('./../assets/logo.png')}
      /> */}
      <Text style={styles.logoTitle}>智慧水务</Text>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="首页" 
        component={Home}
        options = {{
          headerTitle: props => <LogoTitle {...props} /> ,
          headerTintColor: '#fff',
          headerStyle:{
            backgroundColor:'#fff',
          },
          headerTitleStyle: {
            flex: 1,
            textAlign:'center',
            color:'#fff'
          },
          headerLeft:()=>(
            <View style={styles.headerIcon}>
              <Text style={styles.headerText} onPress={() => alert('This is a button!')}>消息</Text>
            </View>
          ),
          headerRight:()=>(
            <View style={[styles.headerIcon,styles.avatars]}>
              <Text style={styles.userName} onPress={() => alert('This is a button!')}></Text>
            </View>
          )
        }}
      />
      <HomeStack.Screen 
        name="Map" 
        component={Map}
        options =  {{
          headerTitleStyle:{flex: 1,textAlign:'center'}
        }}
      />
    </HomeStack.Navigator>
  );
}




export default function HomeStackNavigator() {
  return (
      <HomeStackScreen/>
  );
}

const styles = StyleSheet.create({
  logo:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logoTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000'
  },
  headerIcon:{
    padding:10,
  },
  headerText:{
    color:'#000'
  },
  avatars:{
    width:34,
    height:34,
    backgroundColor:'#ddd',
    color:'#1890ff',
    borderRadius: 34,
  },
  userName:{
    color:'#1890ff',
    fontSize:10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
