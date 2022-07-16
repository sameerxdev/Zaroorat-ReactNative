/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */


import { Text, View,Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useContext, useState, useEffect} from 'react';
import { AuthContext } from '../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';

export default function ProfileScreen({navigation}) {
    const {user, logout} = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    const getUser = async() => {
        await firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
      }

      useEffect(() => {
        getUser();
      }, []);



    return (
        <View style={{flex: 1, padding: 25, backgroundColor: "#e5e5e5"}}>
        <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 32, marginTop: 15, color: "#2c2c2c", marginBottom: 30}}>My Profile</Text>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10}}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "#2c2c2c"}}>Personal Details</Text>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('EditProfileScreen');}}>
                <Text style={{fontSize: 14, fontWeight: "bold", color: "#00cc66"}}>change</Text>
            </TouchableOpacity>
        </View>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: 150, width: "100%", backgroundColor: "white", borderRadius: 20, marginBottom: 40}}>
            <View style={{flex:0.35, display: "flex", justifyContent: "center", alignItems: "center",}}>
                <Image style={{width: 80, height: 80, borderRadius: 40}} source={{uri:userData?userData.userImg:'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}/>
            </View>
            <View style={{flex:0.65}}>
                <Text style={{fontWeight: "bold", fontSize: 18, color: "#2c2c2c", marginBottom: 5}}>{userData?userData.fname:"Test"}</Text>
                <Text style={{ fontSize: 15, color: "#676767", marginBottom: 3}}>{userData?userData.email:"Test"}</Text>
                <Text style={{fontSize: 15, color: "#676767"}}>{userData?userData.phone:"Test"}</Text>
            </View>
        </View>

        <TouchableOpacity style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: 50, width: "100%", backgroundColor: "white", borderRadius: 15, marginBottom: 30}}>
            <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Text> <Icon name="settings" size={22} color="#2c2c2c" /></Text>
            </View>
            <View style={{flex:0.55}}>
                <Text style={{fontWeight: "bold", fontSize: 18, color: "#2c2c2c", marginBottom: 5}}>Setting</Text>
            </View>
            <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Text><Icon name="arrow-forward-ios" size={20} color="#2c2c2c" /></Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: 50, width: "100%", backgroundColor: "white", borderRadius: 15, marginBottom: 30}}>
            <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Text> <Icon name="notifications" size={22} color="#2c2c2c" /></Text>
            </View>
            <View style={{flex:0.55}}>
                <Text style={{fontWeight: "bold", fontSize: 18, color: "#2c2c2c", marginBottom: 5}}>Notifications</Text>
            </View>
            <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Text><Icon name="arrow-forward-ios" size={20} color="#2c2c2c" /></Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: 50, width: "100%", backgroundColor: "white", borderRadius: 15, marginBottom: 30}}>
            <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Text> <Icon name="home" size={24} color="#2c2c2c" /></Text>
            </View>
            <View style={{flex:0.55}}>
                <Text style={{fontWeight: "bold", fontSize: 18, color: "#2c2c2c", marginBottom: 5}}>Sell Item</Text>
            </View>
            <View style={{flex:0.2, display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Text><Icon name="arrow-forward-ios" size={20} color="#2c2c2c" /></Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity 
         onPress={()=>{logout()}}
        style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: 50, width: "100%", backgroundColor: "#00cc66", borderRadius: 15, marginBottom: 30}}>
                <Text style={{fontWeight: "bold", fontSize: 18, color: "white", marginBottom: 5}}>Sign Out</Text>
        </TouchableOpacity>
    </View>
    );
}