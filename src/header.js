import React,{Component} from 'react';
import{
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';

class Header extends Component{
	render(){
		return(
			<View style={styles.contenedor}>
					<Image 
						source={require('../img/IsotipoB.png')}
						style={styles.logo}
					/>
				<View style={styles.contenedor}>
					<Image 
						source={require('../img/LogotipoB.png')}
						style={styles.logoTexto}
					/>
				</View>
			</View>
		)
	}
}

export default Header;

const styles=StyleSheet.create({
	contenedor:{
		paddingVertical:1,
		paddingHorizontal:20,
		backgroundColor:'#EB8532',
		flexDirection:'row',
	},
	logo:{
		width:65,
		height:65,
		resizeMode:'contain',
	},
	logoTexto:{
		width:170,
		height:70,
		resizeMode:'contain',
	}
})