import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { Image,Icon } from 'react-native-elements';
import Header from './header.js';
import Home from './home.js';

import API from '../utils/api.js';
import {store,persistor} from './store/store.js';


import Separador from './verticalSeparador.js';
import DatosVacio from './datosvacios.js';
import Series from './series.js';
import seriesBuscar from './seriesBuscar.js';
import serieDetalles from './serieDetalles.js'
import Cargando from './cargando.js';
function mapStateToProps(state) {
// debugger
return{
tokenseries:state.tokenseries,
seriesNombre:state.seriesNombre,

}
}

class ejemplo extends Component{
  state={
    loading:undefined,
    error:null,
    ListaS:null,
  }

async componentDidMount(){
   this.setState({loading:true,error:null})
  try{
    const ListaS = await API.ListaSerie(this.props.tokenseries,this.props.seriesNombre);
    store.dispatch({
      type: 'LISTASERIES',
      payload: {
        ListaS
      }
    })
    this.setState({loading:false,ListaS:ListaS})
  }catch(error){
    this.setState({loading:false,error:error})
  }
}

Cerrar=()=>{
  console.log("borando datos")
store.dispatch({
      type:'SERIE_BUSCAR',
      payload:{
        seriesNombre:null,
      }
    })
store.dispatch({
      type: 'LISTASERIES',
      payload: {
        ListaS:null,
      }
    })

   this.props.navigation.navigate('seriesBuscar')
}

  itemSeparador= () => <Separador/> 

  viewMovie=async(item)=>{
    const id=item.id
      const idserie = await API.serieDetalles(this.props.tokenseries,id);
        store.dispatch({
          type: 'VERSERIES',
          payload: {
            idserie
          }
        })
        this.props.navigation.navigate('serieDetalles')
  }

  renderEmpty= () => <DatosVacio texto="no se encontraron datos"/>
  renderItem=({item}) => {
    return(
         <Series 
         {...item}
          onPress={()=> {
    this.viewMovie(item)
          }}
         />
      )
  }

	render(){
    console.log(this.state.loading)
    console.log("error en la api",this.state.error)
    console.log("aaaaaaaaaaa ",this.state.ListaS)
	console.log(this.props)
    
  // console.log("datos ",this.state.props.ListaS.seriesName)
		return(

	<View style={styles.background}>
      <Home>
        <Header/>
        <View style={styles.contenedor}>
          <TextInput
            // placeholder="buscar "
            placeholder={this.props.seriesNombre}
            editable={false}
            style={styles.buscar}
          />
          <View style={styles.btnBuscar}>
               <Icon
              name='times-circle'
              type='font-awesome'
              color='white'
              onPress={this.Cerrar}
              containerStyle={{
              // backgroundColor: 'blue',
              paddingLeft:5,
            }}
            />

          </View>
        </View>
          {
          this.state.loading===true?
         <View><Cargando/></View>
         :null
         }{
          this.state.ListaS===undefined?
          <Text style={styles.error}>no se encontro la serie: {this.props.seriesNombre}</Text>
          :null
         }

         <FlatList 
        data={this.state.ListaS}
        ListEmptyComponent={this.renderEmpty}
        ItemSeparatorComponent={this.itemSeparador}

        renderItem={this.renderItem}  
      />
     
      </Home>
      </View>
		)
	}
}
const styles=StyleSheet.create({
  background:{
    backgroundColor:'#D8D8D8',
    flex:1,
  },
  buscar:{
    textAlign:'center',
    paddingVertical:1,
    fontSize:15,
    width:260,
    height:30,
    borderWidth:.5,
    backgroundColor:'white',
    borderColor:'#454545',
  },
  contenedor:{
    backgroundColor:'#D8D8D8',
    paddingVertical:13,
    paddingHorizontal:17,
    flexDirection:'row',
  },
  btnBuscar:{
    paddingLeft:5,
  },
  portada:{
    height:90,
    width:150,
    resizeMode:'contain',
  },
  marco:{
    alignItems:'center',
    borderWidth:1,
  },
  margenes:{
  paddingHorizontal:20,
  },
  banner:{
    width:300, height: 120,
  },
  error:{
    fontSize:22,
    textAlign:'center',
  },
})



export default connect(mapStateToProps)(ejemplo);

