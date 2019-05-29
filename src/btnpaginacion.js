import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function BtnPaginacion(props) {
  return (
      <TouchableOpacity
      onPress={props.onPress}
    >            
                  <View style={styles.marco}>
                    <Text style={styles.capitulos}>{props.capitulos}</Text>
                </View>
      </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  marco:{
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
 
    margin: 1,
    width:25,
    borderWidth:.6,
  },
  capitulos:{
    fontSize:20,
    color:'red',
  },
})

export default BtnPaginacion;
