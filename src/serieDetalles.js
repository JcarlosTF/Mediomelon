import React, {Component} from 'react';
import {Text, View,Image,StyleSheet} from 'react-native';
import Home from './home.js';
import {Header,Icon,ButtonGroup} from 'react-native-elements';
import {connect} from 'react-redux';
import Detalles from './detalles.js';
import Episodios from './episodios.js';
import Actores from './actores.js';


import API from '../utils/api.js';
import {store,persistor} from './store/store.js';

function mapStateToProps(state){
  return{
    tokenseries:state.tokenseries,
  }
}
class LogotipoB extends React.Component {
  render() {
    return (
      <Image
        source={require('../img/LogotipoB.png')}
        style={styles.LogotipoB}
      />
    );
  }
}
class IsotipoB extends React.Component {
  render() {
    return (
      <Image
        source={require('../img/IsotipoB.png')}
        style={styles.IsotipoB}
      />
    );
  }
}
class serieDetalles extends Component {
  state = {
    loading:undefined,
    error:null,
    destalles:undefined,
  }
 constructor () {
  super()
    this.state = {
    selectedIndex:0,
  }
  this.updateIndex = this.updateIndex.bind(this)
}
  updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

  btnRegresar=()=>{
    console.log("regresar")
    this.props.navigation.navigate('ejemplo')
  }
  render() {
     const buttons = ['Detalles', 'Episodios', 'Actores']
    const { selectedIndex } =this.state
    if(selectedIndex==0){
      console.log("Detalles")
      // return <Detalles />

    }else if(selectedIndex==1){
      console.log("Episodios")

    }
    else if(selectedIndex==2){
      console.log("Actores")

    }
    return (
     <Home>
       <Header
        containerStyle={{
        backgroundColor: '#EB8532',
        paddingBottom:25,
      }}
      leftComponent={
        <Icon
        name='chevron-left'
        type='font-awesome'
        color='white'
        onPress={this.btnRegresar}
        containerStyle={{
        backgroundColor: '#EB8532',
        paddingLeft:15,
      }}
      />}
      centerComponent={<LogotipoB />}
      rightComponent={<IsotipoB />}
      />

        
        <View>
        <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 40}}
          />  
        </View>

        {
          this.state.loading===true?
         <View><Cargando/></View>
         :null
         }
          {
        this.state.selectedIndex==0?
        <Detalles/>
        :null
        }
        {
        this.state.selectedIndex==1?
        <Episodios/>
        :null
        }
        {
        this.state.selectedIndex==2?
        <Actores/>
        :null
        }
      </Home>
        
    );
  }
}
const styles=StyleSheet.create({
  fondoHeader:{
    backgroundColor:'red'
  },
  titulo:{
    fontSize:35,
    textAlign:'center',
    fontFamily: 'lucida grande',
  },
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
    borderWidth:1,
  },
  contenedor:{
    flexDirection:'row',
  },
  poster:{
    width:110,
    height:170,
    resizeMode:'contain', 

  },
  izquierda:{
    paddingLeft:22,
  },
  derecha:{
    paddingLeft:20,
    justifyContent:'space-around',
  }
})

export default connect(mapStateToProps)(serieDetalles);
