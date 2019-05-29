import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

function Cargando(props) {
  return (
     <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff"/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  // horizontal: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   padding: 1
  // }
})

export default Cargando;
