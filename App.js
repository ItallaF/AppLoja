import {createAppContainer, createStackNavigator} from 'react-navigation';

import Principal from './principal/Principal';
import Produtos from './Produtos/Produtos';

import BermudaFemininaJeansBarraDobrada from './Produtos/BermudaFemininaJeansBarraDobrada';
import BermudaFemininaJeansCinturaMedia from './Produtos/BermudaFemininaJeansCinturaMedia';
import BlusaFemininaEstampaFloral from './Produtos/BlusaFemininaEstampaFloral';

const telas = createStackNavigator({
  
  Principal:{
    screen:Principal
  },
  
  Produtos:{
    screen: Produtos
  },

  BermudaFemininaJeansBarraDobrada:{
    screen:BermudaFemininaJeansBarraDobrada
  },
   BermudaFemininaJeansCinturaMedia:{
    screen:BermudaFemininaJeansCinturaMedia
  },
  BlusaFemininaEstampaFloral:{
    screen:BlusaFemininaEstampaFloral
  }

});

export default createAppContainer(telas);