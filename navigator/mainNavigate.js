import * as React from 'react';
import { Text, View ,StyleSheet,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//导入页面
import HomeStackNavigator from './homeStackNavigator';
import Setting from '../pages/setting';
import Message from '../pages/message';
import Map from '../pages/map';

const Tab = createBottomTabNavigator();
export default function MainNavigate({ navigation, route }) {
  console.log(route.params?.token)
  return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#1890ff',
        }}
        >
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color,focused }) => {
              if(focused){
                return (
                    <Image source = {require('./../assets/tab/home_selected.png')} style={styles.bottomTabIconStyle}/>
                )
              }else{
                return <Image source = {require('./../assets/tab/home.png')} style={styles.bottomTabIconStyle}/>
              }
          }
          }}
        />
        <Tab.Screen
            name="Message"
            component={Message}
            options={{
            tabBarLabel: '考勤',
            tabBarIcon: ({ color,focused }) => {
                if(focused){
                  return (
                      <Image source = {require('./../assets/tab/code_selected.png')} style={styles.bottomTabIconStyle}/>
                  )
                }else{
                  return <Image source = {require('./../assets/tab/code.png')} style={styles.bottomTabIconStyle}/>
                }
            }
            }}
        />
          <Tab.Screen
              name="Map"
              component={Map}
              options={{
              tabBarLabel: '水务图',
              tabBarIcon: ({ color,focused }) => {
                  if(focused){
                    return (
                        <Image source = {require('./../assets/tab/map_selected.png')} style={styles.bottomTabIconStyle}/>
                    )
                  }else{
                    return <Image source = {require('./../assets/tab/map.png')} style={styles.bottomTabIconStyle}/>
                  }
              }
              }}
          />
          <Tab.Screen
              name="Setting"
              component={Message}
              options={{
              tabBarLabel: '设置',
              tabBarIcon: ({ color,focused }) => {
                  if(focused){
                    return (
                        <Image source = {require('./../assets/tab/setting_selected.png')} style={styles.bottomTabIconStyle}/>
                    )
                  }else{
                    return <Image source = {require('./../assets/tab/setting.png')} style={styles.bottomTabIconStyle}/>
                  }
              }
              }}
          />

    </Tab.Navigator>
  );
}

  const styles = StyleSheet.create({
      bottomTabIconStyle:{
          width:26,
          height:26
      }
  })

  