import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, ScrollView, Platform, Image} from 'react-native';

export default class Produtos extends Component{

  static navigationOptions = {
    header:null
  }
  constructor(){
    super();

this.irTelaBermudaFemininaJeansBarraDobrada = this.irTelaBermudaFemininaJeansBarraDobrada.bind(this);

  }

  irTelaBermudaFemininaJeansBarraDobrada(){
    this.props.navigation.navigate('BermudaFemininaJeansBarraDobrada');
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
              <Image source = {require('./Imagens/Bermuda-Feminina-Jeans-Barra-Dobrada.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Bermuda Feminina Barra Dobrada 
        </Text>
        <Text style={styles.text}>
        R$ 79,95
        </Text>
        
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('BermudaFemininaJeansBarraDobrada')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/Bermuda-Feminina-Jeans-Cintura-Media.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Bermuda Feminina Jeans Cintura Media</Text>
        <Text style={styles.text}>R$ 69,95
        </Text>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('BermudaFemininaJeansCinturaMedia')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/Blusa-Feminina-Estampa-Floral.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Blusa Feminina Estampa {"\n"} Floral
        </Text>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('BlusaFemininaEstampaFloral')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/BLUSA-MC-FULL-MICKEY-MINNIE.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Bermuda Feminina Jeans
        </Text>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('BermudaFemininaJeansBarraDobrada')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/Body-Feminino-Listras-Plus-Size-Manga.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Bermuda Feminina Jeans
        </Text>

      <TouchableOpacity onPress={()=>this.props.navigation.navigate('BermudaFemininaJeansBarraDobrada')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/Calca-Feminina-Estampa-Floral-Fenda-Pantalona.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Bermuda Feminina Jeans
        </Text>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('BermudaFemininaJeansBarraDobrada')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/Calca-Feminina-Jeans-Cargo-Marisa.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Bermuda Feminina Jeans
        </Text>

      <TouchableOpacity onPress={()=>this.props.navigation.navigate('BermudaFemininaJeansBarraDobrada')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/CALCA-JEANS-SKINNY-BIOTIPO.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Bermuda Feminina Jeans
        </Text>

      <TouchableOpacity onPress={()=>this.props.navigation.navigate('BermudaFemininaJeansBarraDobrada')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

        <Image source = {require('./Imagens/VIRT-BLUSA-FEM-PLUS-LISA-MARIN.jpg')} style ={styles.img}/>
        <Text style={styles.text}>
        Bermuda Feminina Jeans
        </Text> 
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('BermudaFemininaJeansBarraDobrada')}style={[styles.btnproduto, {backgroundColor:'#FF00CC'}]}>
            <Text style={styles.btnText}>Detalhes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={[styles.btnproduto, {backgroundColor:'pink', marginTop:20}]}>
            <Text style={styles.btnText}>Voltar</Text>
          </TouchableOpacity> 
      </View>
      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  containerimg:{
      marginTop: 10,
      marginLeft: 80,
      marginBottom: 10,
    
  },
  img:{
    marginTop: 5,
    width: 200,
    height: 200,
    position: 'relative'
  },

  text:{
    fontSize:20
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
  bg: {
    flex: 1, 
  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    fontSize: 15,
    alignItems: 'center'
  },
  btnproduto: {
    marginTop:5,
    marginLeft: 60,
    justifyContent:'center',
    alignItems:'center',
    width:80,
    height:40,
    borderRadius: 5
  }
});