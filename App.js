import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import Login from './src/screens/Login';
import Filtro from './src/screens/Filtro';
import DetalheFiltro from './src/screens/DetalheFiltro';
import PessoaDetalheDados from './src/screens/PessoaDetalheDados';
import PessoaDetalheItens from './src/screens/PessoaDetalheItens';
import DetalheItem from './src/screens/DetalheItens';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Filtro: {
    screen: Filtro,
    navigationOptions: {
      title: 'Filtros'
    }
  },
  DetalheFiltro: {
    screen: DetalheFiltro,
    navigationOptions: {
      title: 'Detalhe Filtro'
    }
  },
  Pessoa: {
    screen: createMaterialBottomTabNavigator({
      PessoaDetalheDados: {
        screen: PessoaDetalheDados,
        navigationOptions: {
          title: 'Dados'
        }
      },
      PessoaDetalheItens: {
        screen: PessoaDetalheItens,
        navigationOptions: {
          title: 'Itens'
        }
      }
    }, {
        initialRouteName: 'PessoaDetalheDados'
      }),
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: null,
      headerTitle: 'template rn',
      headerTitleStyle: { textAlign: 'center', flex: 1 },
      headerStyle: {
        backgroundColor: '#16164E'
      },
      headerTintColor: '#FFFFFF'
    }),
  },
  DetalheItem: {
    screen: DetalheItem
  }
});

export default createAppContainer(AppNavigator);
