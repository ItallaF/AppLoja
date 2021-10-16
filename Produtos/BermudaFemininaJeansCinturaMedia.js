import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView, Image, Platform} from 'react-native';

export default class BermudaFemininaJeansCinturaMedia extends Component{

static navigationOptions = {
    header:null
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
<View style={{flex:1, marginTop:Platform.OS =='ios'? 20 : 0, alignItems:'center'}}>
  <View style={styles.containerimg}>
    <Image source = {require('./Imagens/Bermuda-Feminina-Jeans-Cintura-Media.jpg')} style ={styles.img}/>
    
        <Text style={styles.text}>
        Bermuda Feminina Jeans{"\n"}Cintura Média {"\n"}
        R$ 69,95{"\n"}
        5 x R$ 13.99 sem juros{"\n"}
        Cores: JEANS AZUL{"\n"}
        Tamanhos: 36, 38, 40 e 44</Text>
        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Produtos')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Votar aos Produtos</Text>
        </TouchableOpacity> 
        
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Principal')}style={[styles.btnproduto, {backgroundColor:'#FFCCFF'}]}>
            <Text style={styles.btnText}>Voltar ao Menu Inicial</Text>
          </TouchableOpacity> 

        <Text></Text>
        </View>
        </View>
        </ImageBackground>
      </ScrollView>
       );
  }
}
const styles = StyleSheet.create({
  
  containerimg:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    
  },
  img:{
    marginTop: 5,
    width: 250,
    height: 400,
    position: 'relative'
  },

  text:{
    flexDirection: 'column',
    marginTop: 20,
    fontSize:20
  },
  bg: {
    flex: 1, 
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
    color:'#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold' 
  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 15,
    alignItems: 'center'
  },
  btnproduto: {
    marginTop:5,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    width:150,
    height:40,
    borderRadius: 5,
  }
});