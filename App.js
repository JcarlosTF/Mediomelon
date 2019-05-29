import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

// import CounterContainer from './Counter.js';
// import StaticCounterContainer from './StaticCounter.js';

import { Provider } from 'react-redux';
import {store,persistor} from './src/store/store.js';
import {PersistGate} from 'redux-persist/integration/react';
import login from './src/login.js';
import API from './utils/api.js';

import ejemplo from './src/ejemplo.js';

import seriesBuscar from './src/seriesBuscar.js';
import serieDetalles from './src/serieDetalles.js';
import Cargando from './src/cargando.js';

// import detallesSeries from './src/detallesSeries.js';
// import HelloReactNative from './src/practica.js';
// Create our stack navigator
const Pantallas = createStackNavigator(
{
  Login: {screen:login},
  seriesBuscar: {screen:seriesBuscar},
  ejemplo:{screen:ejemplo},
 
 
  // detallesSeries:detallesSeries,
  //StaticCounter: StaticCounterContainer,
},{
  headerMode:'none',
  initialRouteName: 'Login',
}
);

const pantallas2 = createStackNavigator(
  {
    serieDetalles:{screen:serieDetalles},
  },{
    mode: 'modal',
    headerMode: 'none',
  }
);
const pantallas3 = createStackNavigator(
  {
    pantallas:{screen:Pantallas},
    pantallas2:{screen:pantallas2},
  },{
    mode: 'modal',
    headerMode: 'none',
  }
);
// And the app container
const Navegacion = createAppContainer(pantallas3);
type Props = {};
// Render the app container component with the provider around it
export default class App extends React.Component<Props> {
   state = {
    // suggestionList: [],
    // categoryList: [],
  }

  async componentDidMount() {
    // const tokenseries = await API.ObtenerToken();
    // store.dispatch({
    //   type: 'ENTRAR_TOKEN',
    //   payload: {
    //     tokenseries
    //   }
    // })
    // const ListaS = await API.ListaSerie();
    // store.dispatch({
    //   type: 'LISTASERIES',
    //   payload: {
    //     ListaS
    //   }
    // })


 // const ListaSeriesNombre = await API.ListaSerieNombres();
 //    store.dispatch({
 //      type: 'LISTASERIES_NOMBRE',
 //      payload: {
 //        ListaSeriesNombre
 //      }
 //    })



  }

  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Cargando/>}
          persistor={persistor}
        >
        <Navegacion />
         </PersistGate>
      </Provider>
    );
  }
}





