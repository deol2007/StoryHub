import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class LogInScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
        }
    }
    Login=async(email,password)=>{
        if(email && password){
            try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
                this.props.navigation.navigate("Read")
            }
        }
        catch(error){
            switch(error.code){
                case 'auth/user-not-found':
                    Alert.alert("user doesn't exist")
                    break;

                case 'auth/invalid-email':
                    Alert.alert("incorrect email/password")
            }
        }
        }
        else{
            Alert.alert("enter email and password")       }
    }
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:'center',marginTop:20}}>
            <View>
                <Image source={require("../assets/read.png")}
                style={{width:200,height:200}}
                />
                    
                <Text style={{textAlign:'center', fontSize:30,}}>
                    Willy App
                </Text>
            </View>
            <View>
                <TextInput style={styles.logInBox}
                placeholder='abc@example.com'
                keyboardType='email-address'
                onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                    })
                }}
                />
                <TextInput style={styles.logInBox}
                secureTextEntry={true}
                placeholder='enter password'
                onChangeText={(text)=>{
                    this.setState({
                        password:text
                    })
                }}
                />
            </View>
            <View>
                <TouchableOpacity style={{height:30,width:90, borderWidth:1, marginTop:20, paddingTop:5, borderRadius:7}}
                onPress={()=>{
                    this.Login(this.state.emailId,this.state.password)
                }}
                >
                    <Text style={{textAlign:'center'}}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles= StyleSheet.create ({
    logInBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }

})