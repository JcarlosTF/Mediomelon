import React,{Component} from 'react';
import{
	View,
	Text,
	StyleSheet,
	Dimensions
} from 'react-native';
import { Image } from 'react-native-elements';

const url='https://www.thetvdb.com/banners/'
function ListAct(props){
	// console.log("seee ",props.list);
	return(
		<View style={styles.margenes}>
		 <View style={styles.marco}>   
       		
	           		<View style={styles.izquierda}>
			            <Image 
						style={styles.poster}
						source={{uri:'https://www.thetvdb.com/banners/'.concat(props.image)}}
						/>
	            	</View>
		            <View style={styles.contenedorText}>
			            <Text style={styles.texto}>{props.name}</Text>
			            <Text style={styles.texto}>{props.role}</Text>
		            </View>
        

        </View>
        </View>
	)
}

const styles=StyleSheet.create({
	marco:{
		// borderWidth:.5,

	},
	// margenes:{
 //    borderWidth:.7,

 //  },
  // izquierda:{
  //    borderTopWidth:11,
  //    opacity:.2,
  // },
  poster:{
  	backgroundColor:'#4D243D',
  	alignItems:'center',
  	justifyContent:'center',
    flex:1,
    marginRight:7,
    width:100,
    height:90,
    resizeMode:'contain',
  },
  contenedorText:{
   alignItems:'center',
  	
  },
  texto:{
  	fontSize: 11,
    fontWeight: 'bold',
  }
})

export default ListAct;