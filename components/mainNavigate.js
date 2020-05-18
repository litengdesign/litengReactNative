import * as React from 'react';
import { Text, View ,StyleSheet,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AsyncStorage} from 'react-native';

//导入页面
import HomeStackNavigator from '../components/homeStackNavigator';
import Setting from '../pages/setting';
import Message from '../pages/message';
import Map from '../pages/map';

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Tab =  createBottomTabNavigator();
function MyTabs() {
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
            tabBarLabel: '消息',
            tabBarIcon: ({ color,focused }) => {
                if(focused){
                   return (
                      <Image source = {require('./../assets/tab/notification_selected.png')} style={styles.bottomTabIconStyle}/>
                   )
                }else{
                  return <Image source = {require('./../assets/tab/notification.png')} style={styles.bottomTabIconStyle}/>
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
            component={SettingsScreen}
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

export default function App() {
  // 声明state对象
  const state = { isShowingText: true };
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    bottomTabIconStyle:{
        width:26,
        height:26
    }
})