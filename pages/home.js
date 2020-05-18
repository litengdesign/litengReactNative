
import React , {Component} from 'react';
import { Text, View,Button,StyleSheet,FlatList,Alert } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.wrapper}>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Map')}
      /> */}
        {/* <View style={styles.header}>
            <Text style={styles.header}>header</Text>
        </View>
        <View style={styles.container}>
            <FlatList
            data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: '1'},
                {key: 'Jul2ie'},
                {key: 'Ju24lie'},
                {key: 'Ju3lie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View> */}
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
