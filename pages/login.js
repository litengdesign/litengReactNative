import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class Login extends Component{
    render(){
       return (<Button title="登录" onPress={this.loginIn}/>)
    }
    //登录
    loginIn = ()=>{
        this.props.navigation.navigate('Home',{token:'token is lsdafdsfasdfas'});  
    }
}

