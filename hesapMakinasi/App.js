import React from 'react';
import type {Node} from 'react';
import Header from './src/component/component';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';




export default class App extends Component {
  
 constructor(props){
   super(props);

   this.state={
     input1:'',
     input2:'',
     result : 0,
   }

   this.topla=this.topla.bind(this);
   this.cikart=this.cikart.bind(this);
   this.carpma=this.carpma.bind(this);
   this.bolme=this.bolme.bind(this);

    

 }

 topla(){
  const number1 = parseInt(this.state.input1);
  const number2= parseInt(this.state.input2);
  const result = number1 + number2

  this.setState({
    result:result
  })
 }

 cikart(){
  const number1 = parseInt(this.state.input1);
  const number2= parseInt(this.state.input2);
  const result = number1 - number2

  this.setState({
    result:result
  })
 }

 carpma(){
  const number1 = parseFloat(this.state.input1);
  const number2= parseFloat(this.state.input2);
  const result = number1 * number2

  this.setState({
    result:result
  })
 }

 bolme(){
  const number1 = parseInt(this.state.input1);
  const number2= parseInt(this.state.input2);
  const result = number1 / number2

  this.setState({
    result:result
  })
 }

 render(){

  return (
    <View style={styles.container}>

     <Header baslik='Hesap Makinesi'/>

      <View style={styles.contentWrapper}>

        <TextInput 
                style={styles.input}
                placeholder ='Sayı1 Giriniz'
                onChangeText={(text) =>{ this.setState({input1:text})}}
                value={this.state.input1}
        />


        <TextInput 
                style={styles.input}
                placeholder ='Sayı2 Giriniz'
                onChangeText={(text) =>{ this.setState({input2:text})}}
                value={this.state.input2}
        />

       

      </View>

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        
      <TouchableOpacity
        onPress={this.topla}
        style={styles.button}
        >
          <Text>
            Toplama
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.cikart}
        style={styles.button}
        >
          <Text>
            Çıkartma
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.carpma}
        style={styles.button}
        >
          <Text>
            Çarpma
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        onPress={this.bolme}
        style={styles.button}
        >
          <Text>
            Bolme
          </Text>

        </TouchableOpacity>
      </View>


      <View style={styles.sonuc}>
        <Text style={{fontSize:20,}}>Sonuç : {this.state.result} </Text>
      </View>


    </View>
   
  );

 }
  
};

const styles = StyleSheet.create({
  
  container:{
    flex:1,
    flexDirection:'column',
  },
  
  input:{
    borderRadius:15,
    borderColor:'black',
    borderWidth:1,
    marginTop:10,
    marginBottom:10,
    
  },

  button:{
    backgroundColor:'#A1E3D8',
    margin:10,
    padding:15,
    borderRadius:5

  },

  sonuc:{
    marginTop:15,
    alignItems:'center',
  }
 
  
  
});


