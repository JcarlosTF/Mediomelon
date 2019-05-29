import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Button,Icon} from 'react-native-elements';
import Home from './home.js';
import Header from './header.js';
import ejemplo from './ejemplo.js';
import {store,persistor} from './store/store.js';
import { connect } from 'react-redux';
import API from '../utils/api.js';


function mapStateToProps(state) {
// debugger
return{
tokenseries:state.tokenseries,
seriesNombre:state.seriesNombre,
}
}

class seriesBuscar extends Component{
	state={
		text:'',
	}
	handleSubmit=() =>{
		//console.log(this.state.text)
	}

	handleChangeText=(text)=>{
		this.setState({
			text
		})
	}
Buscar=async() =>{
    //console.log(this.state.text)
    const seriesNombre=this.state.text
    //console.log(seriesNombre)
    store.dispatch({
      type:'SERIE_BUSCAR',
      payload:{
        seriesNombre
      }
    })


	this.props.navigation.navigate('ejemplo')
}

	render(){
    console.log("valors ",this.state.loading)
// 	console.log(this.props)
// console.log(store.getState())
    return(
  <View style={styles.background}>
      <Home>
        <Header/>
        <View style={styles.contenedor}>
          <TextInput
            placeholder="buscar "
            autoCapitalize="none"
            autoCorrent={false}
            onSubmitEditing={this.handleSubmit}
            onChangeText={this.handleChangeText}
            style={styles.buscar}
          />
          <View style={styles.btnBuscar}>
      <Icon
        name='search'
        type='font-awesome'
        color='white'
        onPress={this.Buscar}
        containerStyle={{
        // backgroundColor: 'blue',
        paddingLeft:5,
      }}
      />
          </View>
        </View>
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
})


 export default connect(mapStateToProps)(seriesBuscar);