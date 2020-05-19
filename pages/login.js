import React , {Component} from 'react';
import { Text, View, Button,TextInput } from 'react-native';
export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            value: "wzy",
            text: ''
        }

    }

    onChangeTextHandle = (value) => {
        this.setState({text: value,value: '112121212'});
    }
 
    onBlurHandle = () => {
        console.log('失去焦点'+this.state.value);
    }
 
    onFocusHandle = () => {
        console.log('得到焦点');
    }
 
    onSubmitEditingHandle = () => {
        console.log('提交内容');
   } 
    render() {
        return(
            <View>
                <Text>Login page {constants.systemName}</Text>
                <Button title="Login" onPress={()=>{this.login()}}/>
                <TextInput
                value={this.state.text} 
                placeholder="请输入您需要的商品"
                placeholderTextColor='#A4A4A4'
                editable={true} // 是否可编辑，默认为: true
                secureTextEntry={false} // 是否为密码，默认为: false
                keyboardType='default' // 弹出键盘类型
                maxLength={10} // 限制文本框中最多的字符数
                multiline={false} // 是否为多行文本，默认为: false
                onChangeText={this.onChangeTextHandle} // 文本变化事件
                onBlur={this.onBlurHandle} // 失去焦点事件
                onFocus={this.onFocusHandle} // 得到焦点事件
                onSubmitEditing={this.onSubmitEditingHandle} // 提交编辑内容事件
                />
            </View>
        )
    }
    login(){
        alert(1111)
        constants.systemName = '11111';
        constants.isLogin = true;
    }
}

