import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {

    constructor(){
        super();
        this.state={
            emailId:'' ,
            password:'' ,
        }
    }

    userSingup=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert("user add")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert("successfully login ")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }

    render(){
        return(
         <View style={styles.container}>
             <View style={styles.profileContainer} >
                 <Text style={styles.title} >Barter system</Text>
             </View>
             <View>
             <TextInput
            style={styles.loginbox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text)=>{
                this.setState({
                    emailId:text
                })
            }}
            
            />
            <TextInput
            style={styles.loginbox}
            placeholder="enter password"
            secureTextEntry={true}
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}
            />
            <TouchableOpacity style={styles.button}
            onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}>
                <Text style={styles.buttonText} >login</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button}
            onPress={()=>{this.userSingup(this.state.emailId,this.state.password)}}>
                <Text style={styles.buttonText} >Singup</Text>
            </TouchableOpacity>
             </View>
             
         </View>

        )
    }

}
const styles=StyleSheet.create({
    container:{
         flex:1,backgroundColor:'#1aa3ff'
         },
    title :{
         fontSize:70, 
         fontWeight:'300', 
         paddingBottom:30, 
         color : '#ccffcc' 
        },
profileContainer:{
     flex:1, 
     justifyContent:'center', 
     alignItems:'center', 
    },
loginbox:{ 
    width: 300, 
    height: 25, 
    borderBottomWidth: 2, 
    borderColor : '#000000', 
    fontSize: 20, 
    margin:30, 
    paddingLeft:20 ,

},
button:{
     width:400, 
     height:40, 
     justifyContent:'center', 
     alignItems:'center', 
     borderRadius:25, 
     backgroundColor:"#1aff1a", 
     shadowColor: "#000000",
      shadowOffset: { 
          width: 0, 
          height: 30, 
        }, 
        shadowOpacity: 0.30, 
        shadowRadius: 10.32, 
        elevation: 16, 
    },
buttonText:{ 
    color:'#000000', 
    fontWeight:'400', 
    fontSize:20 },
})