import React, { Component } from 'react';
import { Text, View,ScrollView,StyleSheet,FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Button,ButtonGroup} from 'react-native-elements';
import API from '../utils/api.js';
// import Paginacion from './paginacion.js';
import {store,persistor} from './store/store.js';

import Home from './home.js';
import DatosVacio from './datosvacios.js';
import Separador from './verticalSeparador.js';
import TemporadasLista from './listaEpisodios.js';
import BtnPaginacion from './btnpaginacion.js';


function mapStateToProps(state){
  return{
    tokenseries:state.tokenseries,
    detalleSeries:state.idserie,
    detalles:state.temporadas,
    ListaS:state.ListaS
  }
}
class Episodios extends Component {

state = {
    loading:true,
    error:null,
    capitulos:undefined,
  }
  
    constructor(props) {
    super(props);
    const tempo=parseInt(this.props.detalles.totalSeasons)
    console.log("numero de temporadas",tempo)

      // const limite=5
    const paginasbtn=[]
    const pag=Array.apply(null,Array(3)).map((v,i)=>{
      return paginasbtn.push(i)
    })
    this.state = {
      btn:pag
  }





}
  paginacionpresionado=async(item)=>{
    const  NumTemporada=item;
     console.log("temporada numero ",item)
     console.log("nuero selec ",this.state.btn)
       this.setState({loading:true,error:null})
      try {
         const capitulos = await API.capitulosTemporada(this.props.tokenseries,this.props.detalleSeries.id,NumTemporada);
         store.dispatch({
            type: 'EPISODIOS',
            payload: {
              capitulos
            }
          })
        this.setState({loading:false,capitulos:capitulos})
      } catch(error) {
        this.setState({loading:false,error:error})
      }
  }
    btnpaginacion=({item}) => {

    return(

         <BtnPaginacion
         {...item}
          onPress={()=> {
            console.log("presionado ::::",item)
            this.paginacionpresionado(item)
            presionado=true
          }}
          capitulos={item}
         />
      )
  }

componentDidMount(){
this.paginacionpresionado(1)
}



    renderEmpty= () => <DatosVacio texto="no se encontraron datos"/>
    itemSeparador= () => <Separador/> 

     renderItem=({item}) => {
    return(
      // <ScrollView horizontal>
          <TemporadasLista {...item} />
          // </ScrollView> 
      )
  }


  render() {
 
     console.log("datos de epi",this.state.capitulos)
    // console.log(this.props.detalleSeries.imdbId)
    console.log("numero de temporadas",this.props.detalles)
    
    const list=[
      {
        title:'avengers',
        ket:'1',
      },{
         title:'a1vengers',
        ket:'2',
      }
      ]
    return (
        <Home>

        <View style={styles.margenes}>

     
                <ScrollView horizontal >
                     <FlatList style={styles.margenes}
                      data={this.state.btn}
                      horizontal
                      ListEmptyComponent={<Text>no se encontro la serie </Text>}
                      ItemSeparatorComponent={this.itemSeparador}

                      renderItem={this.btnpaginacion}  
                    />
                </ScrollView>


              <View style={styles.contenedor}>
                <Text>Temporadas: </Text>

               </View>

           <ScrollView>
          <View>
        <FlatList
          data={this.state.capitulos}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparador}
          // renderItem={({item})=><Text>{item.title}</Text>}
          renderItem={this.renderItem}
        /> 
        </View>
         </ScrollView>
        </View>
       </Home>
    );
  }
}



const styles=StyleSheet.create({
  margenes:{
    paddingHorizontal:15,
  },
  contenedor:{
    flexDirection:'row',
},
contentContainer: {
    paddingVertical: 20,
  }
})
export default connect(mapStateToProps)(Episodios);