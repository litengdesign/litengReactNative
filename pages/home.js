
import React , {Component} from 'react';
import { Text, View,Button,StyleSheet,FlatList,Alert } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.wrapper}>

    </View>
  );
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    header:{
        height:150,
        backgroundColor:'#1890ff',
    },
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
