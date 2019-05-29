import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Series(props) {
  // // console.log("v: ",props.banner)
  // if(props.banner==''){
  //   console.log("vacio")
  // }else{
  //   console.log(props.banner)
  // }
  return (
      <TouchableOpacity
      onPress={props.onPress}
    >    
          <View style={styles.margenes}>
            <View>
              <Text>{props.seriesName}</Text>
                  <View style={styles.marco}>
                     {
                    props.banner==''?
                    <Image 
                    source={require('../img/Mediomelón-banner.png')}
                    style={styles.banner}
                    />                 
                    :null
                    }
                    {
                    props.banner!==''?
                    <Image 
                    style={styles.portada}
                    source={{uri:'https://www.thetvdb.com/banners/'.concat(props.banner)}}
                    style={styles.banner}
                    />
                     :null
                    }
                </View>
            </View>
        </View>  
      </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  marco:{
    // backgroundColor:'red',
    alignItems:'center',
    borderWidth:1,
  },
  margenes:{
  paddingHorizontal:20,
  },
  banner:{
    width:"85%", height: 120,resizeMode:'contain',
  }
})

export default Series;
