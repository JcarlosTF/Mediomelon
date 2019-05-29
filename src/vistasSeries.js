import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

function VistaSeries(props){
	return(
		<View style={styles.contenedor}>
			<Text style={styles.title}>{props.title}</Text>
			{props.children}
		</View>
	)
}

const styles=StyleSheet.create({
	contenedor:{
		paddingVertical:10,
		flex:1,
	},
	title:{
		color:'#4c4c4c',
		fontSize:20,
		marginBottom: 10,
		fontWeight:'bold',
		marginLeft:8,
	}
})

export default VistaSeries;