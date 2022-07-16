/* eslint-disable prettier/prettier */

import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PostAdScreen from '../screens/PostAdScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EditProfileScreen from '../screens/EditProfileScreen';
import DisplayAdsScreen from '../screens/DisplayAdsScreen';
import DisplayAdsDiscScreen from '../screens/DisplayAdsDiscScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const addPost = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="PostAdScreen"
        component={PostAdScreen}
        options = {{
            tabBarLabel:'Explore',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options = {{
            tabBarLabel:'Explore',
            headerShown:false,
            // ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );


  const editProfile = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options = {{
            tabBarLabel:'ProfileScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options = {{
            tabBarLabel:'EditProfileScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );


  const expoloreAds = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options = {{
            tabBarLabel:'HomeScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="DisplayAdsScreen"
        component={DisplayAdsScreen}
        options = {{
            tabBarLabel:'DisplayAdsScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="DisplayAdsDiscScreen"
        component={DisplayAdsDiscScreen}
        options = {{
            tabBarLabel:'DisplayAdsDiscScreen',
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );

export default function AppNavigation(){
    return (
        <Tab.Navigator
        screenOptions ={({route})=> ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'white',
            },
          })}
          tabBarOptions={{
            activeTintColor:'#00cc66',
            inactineTintColor:'grey',
            labelStyle:{paddingBottom:0, fontSize:10},
            style:{
              backgroundColor:'black',
              height:70},
          }}>


                <Tab.Screen
                name = "HomeScreen"
                component = {expoloreAds}
                options={({route}) => ({
                    tabBarLabel: 'Home',
                    headerShown:false,
                    tabBarIcon: ({color, size}) => (
                      <MaterialCommunityIcons
                        name="home-outline"
                        color={color}
                        size={size}
                      />
                    ),
                  })}
                />

                <Tab.Screen
                name = "PostAdScreen"
                component = {addPost}
                options={({route}) => ({
                    tabBarLabel: 'Offers',
                    headerShown:false,
                    tabBarIcon: ({color, size}) => (
                      <AntDesign
                        name="tago"
                        color={color}
                        size={size}
                      />
                    ),
                  })}
                />
                <Tab.Screen
                name = "MessagesScreen"
                component = {MessagesScreen}
                options={({route}) => ({
                    tabBarLabel: 'Messages',
                    headerShown:false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                          name="chatbox-ellipses-outline"
                          color={color}
                          size={size}
                        />
                      ),
                  })}
                />
                <Tab.Screen
                name = "ProfileScreen"
                component = {editProfile}
                options={({route}) => ({
                    tabBarLabel: 'Profile',
                    headerShown:false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-outline" color={color} size={size} />
                      ),
                  })}
                />
        </Tab.Navigator>
    );
}
