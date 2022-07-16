/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';


export default function DisplayAdsDiscScreen({route, navigation}) {
  const item =  route.params;

  return (
    <View style={{flex: 1,padding:25 , paddingBottom:0 ,paddingTop:10 , backgroundColor: '#e5e5e5'}}>
        <Header title="Login" type={'arrow-left'} navigation={navigation}/>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image
          style={{width: '80%', height: 250, borderRadius: 20}}
          source={{uri: item.postImg}} />
      </View>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 28,
          marginTop: 10,
          color: '#2c2c2c',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          marginTop: 10,
          color: '#2c2c2c',
        }}>
        PKR {item.price}
      </Text>
      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
          color: '#2c2c2c',
          marginBottom: 20,
        }}>
        {item.discription}
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            marginRight: 5,
            borderRadius: 10,
            backgroundColor: '#00cc66',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>
            <Icon name="bookmark-border" size={20} color="white" />
            Save Item
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            marginLeft: 5,
            borderRadius: 10,
            backgroundColor: '#00cc66',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Contact Seller</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
