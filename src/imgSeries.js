import React,{Component} from 'react';
import{
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
} from 'react-native';
import { Image,Button } from 'react-native-elements';
import {connect} from 'react-redux';
	
import store from './store/store.js';
// import detallesSeries from './detallesSeries.js';
// function mapStateToProps(state) {
// // debugger
// return{
// id:state.id
// }
// }
const banner=false;
const url='https://www.thetvdb.com/banners/'
class ImgSeries extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {props};
	}
		obtenerid=()=>{
	// 		const {props}=this.state
	console.log("pres ",this.state.props.id)
	// const ids=props.id
	// store.props.dispatch({
	// 	type:'SELECCIONAR_SERIE',
	// 	payload:{
	// 		ids
	// 	}
	// })
	// this.props.navigation.navigate('detallesSeries')

     // this.props.navigation.navigate('HelloReactNative')
}

	// console.log("seee ",props.list);
	render(){
		const {props}=this.state
	return(
		<View style={styles.margenes}>
			<View>
				<Text>{props.seriesName}</Text>
				<TouchableHighlight onPress={this.obtenerid}>
						<View style={styles.marco}>
						<Image 
						style={styles.portada}
						source={{uri:'https://www.thetvdb.com/banners/'.concat(props.banner)}}
						style={styles.banner}
						/>
					</View>
				 </TouchableHighlight>
						
			</View>
		</View>
	)
}
}
// function ImgSeries(props){

// }

const styles=StyleSheet.create({
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
	}
})

// export default connect(mapStateToProps)(ImgSeries);
export default ImgSeries;