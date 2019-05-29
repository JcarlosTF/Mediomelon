import React from 'react';
import {
	Text,
	View,
	StyleSheet,
} from 'react-native';

function Datosvacio(props){
	return(
		<View style={styles.contenedor}>
			<Text style={styles.texto}>{props.text}</Text>
		</View>
	)
}

const styles=StyleSheet.create({
	contenedor:{
		padding:10,
	},
	texto:{
		fontSize:16
	}
})

export default Datosvacio;