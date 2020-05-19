
import React , {Component} from 'react';
import { Text, View,Button,StyleSheet,FlatList,Alert,Image,TouchableOpacity,Dimensions} from 'react-native';

//引入对应的组件
import {SystemBox} from '../components/systemBox';

const {width,height} = Dimensions.get("window");//第一种写法
export default class HomeScreen extends Component{

    render(){
        return (
            <View style={styles.wrapper}>
                <View style={[styles.systemList,styles.backgroundGray,styles.container]}>

                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>污水监管</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}> 水务图</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>防洪调度</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>雨水监管</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>污水监管</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>配水调度</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>水生态</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>景观管理</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>工程管理</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity >
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>污水监管</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>生产运维</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>三维BIM</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.system}>
                    <Image style={styles.systemIcon}  source={require('./../assets/tab/home_selected.png')}/>
                    <Text style={styles.systemName}>系统管理</Text>
                </View>
                </TouchableOpacity>
                </View>
                <View style={[styles.container,styles.backgroundWhite]}>
                <Text>地图</Text>
                </View>
                <View style={[styles.backgroundGray,styles.container]}>
                <Text>曲线</Text>
                </View>
            </View>
        );
    }

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
        padding:10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    backgroundGray:{
        backgroundColor:'#f5f5f5'
    },
    backgroundWhite:{
        backgroundColor:'#fff'
    },
    systemList:{
        paddingLeft:20,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent: 'flex-start',
    },
    system:{
        width:(width-40)/5,
        height:70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    systemIcon:{
        width:40,
        height:40
    },
    systemName:{
        padding:2,
        fontSize:12,
        fontWeight:'bold',
        color:'#000'
    }
})
