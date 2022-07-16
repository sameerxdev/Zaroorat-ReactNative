/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {View, StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';

export default function header({title ,type, navigation}) {
  return (
    <View style ={styles.header} >
      <View style = {{marginLeft:25, marginTop:12}}>
      <TouchableOpacity
        onPress={()=>{navigation.goBack();}}
        style={{height: 46, width: 46, borderRadius: 23, backgroundColor: '#00cc66', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <Icon type="material-community" name="arrow-left" size={30} color={'#2c2c2c'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header : {
    flexDirection:'row',
    backgroundColor:'#e5e5e5',
    height : 60,
  },

  HeaderText :{
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 0,
    color: '#2c2c2c',

  },
});
