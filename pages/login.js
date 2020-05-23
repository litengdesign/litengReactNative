import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class Login extends Component{
    render(){
       return (
           <View>
                <Button title="登录" onPress={this.loginIn}/>
           </View>
        )
    }
    //登录
    loginIn = ()=>{
        this.props.navigation.navigate('Home',{token:'登录成功，这是一串token'});  
    }
}

