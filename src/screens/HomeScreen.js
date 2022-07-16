/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View,Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function HomeScreen({navigation}) {

  return (
    <View style={{flex: 1, padding: 25, backgroundColor: "#e5e5e5"}}>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15, marginBottom: 20}}>
            <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 32, marginTop: 15, color: "#2c2c2c"}}>Explore</Text>
        </View>
        
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10}}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "#2c2c2c"}}>Categories</Text>
        </View>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 15}}>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate('DisplayAdsScreen')}}
            style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://images.mid-day.com/images/images/2021/jul/HOME-APPLI_d.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Electronics</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://www.wickhammotorcycles.com/wp-content/uploads/2015/08/feat3.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Automobiles</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 15}}>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://thumbs.dreamstime.com/b/assorted-sports-equipment-black-11961711.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Sports</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://images.unsplash.com/photo-1559723944-6913027cf19a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFibGV0JTIwYW5kJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Mobiles & Tablets</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 10, width: "100%"}}>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://thumbs.dreamstime.com/b/desktop-pc-laptop-computer-wide-monitor-keyboard-mouse-app-icons-blue-screen-d-rendered-image-45985589.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Computer & Laptops</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://c0.wallpaperflare.com/preview/214/188/1021/indoor-living-room-interior-home.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Furniture</Text>
                </View>
            </TouchableOpacity>
        </View>

    </View>
  );
}