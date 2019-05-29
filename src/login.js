import React, {Component} from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';
import {Button,ThemeProvider,Image} from 'react-native-elements';
import { connect } from 'react-redux';
import Home from './home.js';
import reducer from './Reducers/reducers.js';
import ejemplo from './ejemplo.js';
import seriesBuscar from './seriesBuscar.js';

import {store,persistor} from './store/store.js';
import API from '../utils/api.js';
import Cargando from './cargando.js';
// import HelloReactNative from './src/practica.js';
// function mapStateToProps(state) {
//       return{
//           token:state.tokenseries   
//       }
// }


class login extends Component {
    state={
    loading:undefined,
    error:null,
    tokenEntrar:undefined,
    entrar:false
  }


    iniciarSesion= async ()=>{
     this.setState({loading:true,error:null})
     try{
      const tokenseries = await API.ObtenerToken();
      store.dispatch({
        type: 'ENTRAR_TOKEN',
        payload: {
          tokenseries
        }
      })
   this.setState({loading:false,tokenEntrar:tokenseries})
    }catch(error){
      this.setState({loading:false,error:error})
    }
    this.props.navigation.navigate('seriesBuscar')
  }

  render() {  
    console.log("s ",this.props.token);
    return (

      <View style={styles.container}>
        <Home>
          <View>
             <Image source={require('../img/imagotipoBHorizontal.png')}
            style={styles.logo}/>
          </View>
            <View style={styles.boton}>
           <ThemeProvider theme={theme}>
              <Button title="Entrar"
                type="clear"
                buttonStyle={{
                  backgroundColor:'white'
                }}
              // onPress={()=>this.props.navigation.navigate('seriesBuscar')}
              onPress={this.iniciarSesion}
              />
            </ThemeProvider>             
            </View>

            {
                this.state.loading===true?
                <View><Cargando /></View>
                :null
              }
      </Home>
    </View>
    ); 

  }
}

const theme={
  Button:{
    titleStyle:{
      color:'orange'
    }
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',

  },
  logo:{
    width:320,
    height:380,
    resizeMode:'contain',
  },
  boton:{
    //backgroundColor:'white',
    width:150,
  }
})

// export default connect(mapStateToProps)(login);
export default login;