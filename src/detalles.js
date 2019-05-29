import React, {Component} from 'react';
import {Text, View,StyleSheet} from 'react-native';
import {Header,Icon,Image,ButtonGroup} from 'react-native-elements';
import Home from './home.js';
import ejemplo from './ejemplo.js';
import {connect} from 'react-redux';
import API from '../utils/api.js';
import {store,persistor} from './store/store.js';


  function mapStateToProps(state){
  return{
    tokenseries:state.tokenseries,
    detalleSeries:state.idserie,
  }
}
class Detalles extends Component {
     state={
    loading:undefined,
    error:null,
    temporadas:null,
  }
     async componentDidMount() {
      this.setState({loading:true,error:null})
      try {
        if(this.props.detalleSeries.imdbId!=""){
          console.log("a")
        const temporadas = await API.serieDetalles2(this.props.detalleSeries.imdbId);
          store.dispatch({
            type: 'SERIE_DETALLES',
            payload: {
              temporadas,
            }
          })
          this.setState({loading:false,temporadas:temporadas})
        }else{
          this.setState({loading:false,error:error})
        }
      } catch(error) {
        this.setState({loading:false,error:error})
      }
      
      }


  render() {
      console.log(this.state.loading)
  //   console.log("error en la api",this.state.error)
  //   console.log("aaaaaaaaaaa ",this.state.temporadas)
  // console.log(this.props)
     if( this.state.loading){
         return(<Text>Cargando</Text>)
     }
      return (
         
         <View style={styles.marco}>   
        <View style={styles.contenedor}>
           <View style={styles.izquierda}>
              <Image
              source={{uri:'https://www.thetvdb.com/banners/'.concat(this.props.detalleSeries.banner)}}
              style={styles.poster}
              />
            </View>
            <View style={styles.derecha}>
              <Text>Genero:  {this.props.detalleSeries.genre}</Text>
              <Text>Primera emision:  {this.props.detalleSeries.firstAired}</Text>
              <Text>Horario:  {this.props.detalleSeries.airsTime}</Text>
             {
              this.state.temporadas===null?
              <Text>no hay temporadas</Text>
              :null
             }
             {
              this.state.temporadas!=null?
              <Text>Temporadas: {this.state.temporadas.totalSeasons}</Text>
              :null
             }
              <Text>Calificacion:  {this.props.detalleSeries.siteRating}</Text>
            </View>
        </View>
        <View><Text>Sipnosis:</Text></View>
        <View><Text>{this.props.detalleSeries.overview}</Text></View>
        </View>
    );
  }
}
const styles=StyleSheet.create({
  LogotipoB:{
    width: 110, 
    height: 90,
    resizeMode:'contain', 
  },
  IsotipoB:{
    width: 70, 
    height: 70,
    resizeMode:'contain', 
  },
  icono:{
    paddingLeft:100,
  },
  marco:{
    borderWidth:.6,
  },
  contenedor:{
    flexDirection:'row',
  },
  izquierda:{
    paddingLeft:20,
  },
  poster:{
    width:150,
    height:150,
    resizeMode:'contain',

  },
  derecha:{
    paddingLeft:10,
    justifyContent:'space-around',
  },
})


export default connect(mapStateToProps)(Detalles);