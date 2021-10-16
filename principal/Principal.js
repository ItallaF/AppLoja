import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Platform, ScrollView, ImageBackground, TextInput} from 'react-native';

export default class App extends Component{
  
  static navigationOptions = {
    header:null
  }



  constructor(){
    super();
    this.state = { usuario:"aaa", senha: 123,}
    this.irTelaProdutos = this.irTelaProdutos.bind(this);
    
  }

  irTelaProdutos() {
 
    if (this.state.usuario == "aaa" && this.state.senha == 123){
      this.props.navigation.navigate('Produtos');
      
    }
    else {
    alert('Senha ou Usuario Incorreto,\n Tente Novamente')
    }
    
  }
  
  render(){
    return(
      <ScrollView>
      <ImageBackground style = {styles.bg} source = {require('./marisa.jpg')}>
          <View style = {styles.cabecalho}>
            <Text style = {styles.titulo}>
            MARISA
           </Text>
        </View>
      
          <Text style={{fontSize:20, marginTop:90, marginHorizontal: 20}}>Digite o seu usuario e a sua senha</Text>
          <View style={styles.entrada}>
          <TextInput placeholder="Usuario" keyboardType="nome" style={styles.input} onChangeText={(usuario) => { this.setState({ usuario }) }} />
          <TextInput placeholder="Senha" keyboardType="numeric" style={styles.input} onChangeText={(senha) => { this.setState({ senha }) }} />
        </View>
        <View style={{flex:1, marginTop:Platform.OS =='ios'? 20 : 0, alignItems:'center'}}>
        

        <View style={{marginTop:85}}>

          <TouchableOpacity onPress={this.irTelaProdutos}style={[styles.btnContainer, {backgroundColor:'#FFFFFF'}]}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>

          <Text>
          </Text>

        </View>
      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btnContainer:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    width:200,
    height:80   
  },
  btnText:{
    color:'#FF00CC',
    fontWeight:'bold',
    fontSize: 20
  },
  cabecalho:{
    marginTop: 20,
    height: 50,
    backgroundColor: '#FFCCFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 15,
        },        
    shadowOpacity: 0.1,
    shadowRadius: 8.0,
  },
  titulo:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold' 
  },
  bg: {
    flex: 1, 
  },
  
  entrada: {
  marginTop: 50,  
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  
  },

  input: {
  paddingHorizontal: 20,
  paddingVertical: 15,
  borderRadius: 15,
  backgroundColor: '#FFF',
  alignSelf: 'stretch',
  marginBottom: 23,
  marginHorizontal: 20,
  fontSize: 16,
  },
  
});
