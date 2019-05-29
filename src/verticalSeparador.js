import React from 'react';
import{
	View,
	Text,
	StyleSheet,
}from 'react-native';

function VeticalSeparador(props){
	return(
		<View style={[
			styles.separador,
			{
				borderTopColor:'black'
			}
			]}>
		</View>
	)
}

const styles=StyleSheet.create({
	separador:{
		opacity:.0,
		borderTopWidth:20,
	},
})

export default VeticalSeparador;