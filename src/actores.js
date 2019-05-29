import React, { Component } from 'react';
import { Text, View,ScrollView,StyleSheet,FlatList,Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {Button,ButtonGroup} from 'react-native-elements';
import API from '../utils/api.js';
// import Paginacion from './paginacion.js';
import {store,persistor} from './store/store.js';

import Home from './home.js';
import DatosVacio from './datosvacios.js';
import Separador from './verticalSeparador.js';
import ListAct from './listaActores.js';

function mapStateToProps(state){
  return{
    tokenseries:state.tokenseries,
    detalleSeries:state.idserie,
  }
}
class Actores extends Component{
  state = {
    loading:true,
    error:null,
    ListaActores:undefined,
  }
  async componentDidMount(){
       this.setState({loading:true,error:null})
      try {
         const ListaActores = await API.ListaActores(this.props.tokenseries,this.props.detalleSeries.id);
         store.dispatch({
            type: 'ACTORES',
            payload: {
              ListaActores
            }
          })
        this.setState({loading:false,ListaActores:ListaActores})
      } catch(error) {
        this.setState({loading:false,error:error})
      }
}


  renderEmpty= () => <DatosVacio texto="no se encontraron datos"/>
  itemSeparador= () => <Separador/> 
  renderItem=({item})=>{
    return(
      <ListAct {...item}/>
      )
  }
  render(){
    console.log("actores : ",this.state.ListaActores)
    console.log("tokens",this.props.ListaS);
    const list=[
     {
       title:"leo",
       key:"1"
     },
     {
       title:"a",
       key:"2"
     },
      {
       title:"leo",
       key:"1"
     },
     {
       title:"a",
       key:"2"
     }, {
       title:"leo",
       key:"1"
     },
     {
       title:"a",
       key:"2"
     },
      {
       title:"leo",
       key:"1"
     },
     {
       title:"a",
       key:"2"
     }
    ]
    return(
    <ScrollView>
    <View style={styles.conte}>
      <FlatList
        style={styles.container} 
        data={this.state.ListaActores}
        // ListEmptyComponent={this.renderEmpty}
        // columnWrapperStyle={this.itemSeparador}
        ItemSeparatorComponent={this.itemSeparador}
        renderItem={this.renderItem}
        numColumns={3}
      />
      </View>
       </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  conte:{
       alignItems :'center',

  },
  container: {
    // flex: 1,
    marginVertical: 11,
  }
});

export default connect(mapStateToProps)(Actores);




