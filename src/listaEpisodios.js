import React,{Component} from 'react';
import{
	View,
	Text,
	StyleSheet
} from 'react-native';
import { Image } from 'react-native-elements';

	


// function mapStateToProps(state) {
// // debugger
// return{
// listnombre:state.ListaSeriesNombre
// }
// }
const url='https://www.thetvdb.com/banners/'
function TemporadasLista(props){
	// console.log("seee ",props.list);
	return(
		<View style={styles.margenes}>
		 <View style={styles.marco}>   
       		 <View style={styles.contenedor}>
	           		<View style={styles.izquierda}>
			            <Image 
						style={styles.poster}
						source={{uri:'https://www.thetvdb.com/banners/'.concat(props.filename)}}
						/>
	            	</View>
		            <View style={styles.derecha}>
			            <Text>Capitulo {props.airedEpisodeNumber}</Text>
			            <Text>{props.episodeName}</Text>
						<Text style={styles.texto}>{props.overview}</Text>
						<Text>{props.firstAired}	{props.siteRating}</Text>
						
		            </View>
        	</View>

        </View>
        </View>
	)
}

const styles=StyleSheet.create({
	// margenes:{
	// paddingHorizontal:18,
	// },
	marco:{
    borderWidth:.5,
  },
  contenedor:{
    flexDirection:'row',
  },
  izquierda:{
    paddingLeft:2,
  },
  poster:{
    width:90,
    height:90,
    resizeMode:'contain',

  },
  derecha:{
    paddingLeft:5,
    justifyContent:'space-around',
  },
  texto:{
  	fontSize:9,
  	// textAlign:'center',
  	textAlign:'left',
  }
})

export default TemporadasLista;