import React, { Component } from 'react'
import {Text,StyleSheet,View}from 'react-native';

export default class Header extends Component{

    render(){

        const {header,welcome} =styles
        return(
      <View style= {header}>
        <Text style={welcome}>{this.props.baslik}</Text> 
      </View>
        )
    }
}



const styles = StyleSheet.create({
  
   
  
    header:{
      height:80,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF',
      shadowColor:'red',
      shadowOffset:{width:0,height:2},
      shadowOpacity:0.5,
  
    },
  
    welcome:{
      fontSize:20,
      textAlign:'center',
    }
    
  });
  