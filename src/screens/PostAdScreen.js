/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import { View, Text, TouchableOpacity, FlatList, Image ,Alert} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/authProvider';
import moment from 'moment';





export default function PostAdScreen({navigation}) {
    const {user} = useContext(AuthContext);

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const fetchPosts = async () => {
        try {
          const list = [];

          await firestore()
            .collection('posts')
            .orderBy('postTime', 'desc')
            .get()
            .then((querySnapshot) => {


              querySnapshot.forEach(doc =>{
                      const {userId, title, postImg,category, price, discription, postTime} = doc.data();
                      // eslint-disable-next-line eqeqeq
                      user.uid == userId
                      ?
                      list.push({
                          id : doc.id,
                          userId,
                          title,
                          postImg,
                          category,
                          price,
                          discription,
                          postTime,
                  })
                  :
                  null;
                  });
              });
          setPosts(list);
          if (loading) {
            setLoading(false);
          }

        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        fetchPosts();
        setLoading(true);
      }, [loading]);
      useEffect(() => {
        fetchPosts();
        setDeleted(false);
      }, [deleted]);

      const handleDelete = (postId) => {
        Alert.alert(
          'Delete post',
          'Are you sure?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed!'),
              style: 'cancel',
            },
            {
              text: 'Confirm',
              onPress: () => deletePost(postId),
            },
          ],
          {cancelable: false},
        );
      };

      const deletePost = (postId) => {
        firestore()
          .collection('posts')
          .doc(postId)
          .get()
          .then((documentSnapshot) => {
            if (documentSnapshot.exists) {
              const {postImg} = documentSnapshot.data();

              if (postImg != null) {
                const storageRef = storage().refFromURL(postImg);
                const imageRef = storage().ref(storageRef.fullPath);

                imageRef
                  .delete()
                  .then(() => {
                    deleteFirestoreData(postId);
                  })
                  .catch((e) => {
                    console.log('Error while deleting the image. ', e);
                  });
                // If the post image is not available
              } else {
                deleteFirestoreData(postId);
              }
            }
          });
      };

      const deleteFirestoreData = (postId) => {
        firestore()
          .collection('posts')
          .doc(postId)
          .delete()
          .then(() => {
            Alert.alert(
              'Post deleted!',
              'Your post has been deleted successfully!',
            );
            setDeleted(true);
          })
          .catch((e) => console.log('Error deleting posst.', e));
      };


  return (

    <View style={{flex: 1, padding: 25, backgroundColor: '#e5e5e5'}}>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 35}}>
            <Text style={{fontWeight: 'bold', fontSize: 32, color: '#2c2c2c'}}>My Ads</Text>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('AddPostScreen');}}
            style={{height: 40, width: 110, borderRadius: 18, backgroundColor: '#00cc66', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}><Icon style={{color: 'white'}} name="add" size={15} color="#676767" />New Ad</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            // data={products}
            data ={posts}
            renderItem={({item}) => (
                <TouchableOpacity style={{height: 90, display:'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 15, borderRadius: 10}}>
                <View style={{flex: 0.3}}>
                    <Image style={{height: 80, width: 80, marginLeft: 5, marginRight: 10, borderRadius: 5}} source={{uri: item.postImg}} />
                </View>
                <View style={{flex: 0.55}}>
                    <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>{item.title}</Text>
                    <Text style={{color: 'black', fontSize: 10}}>PKR {item.price}</Text>
                    <Text style={{color: 'black', fontSize: 10}}>   {moment(item.postTime.toDate()).fromNow()}</Text>
                </View>
                <View style={{flex: 0.15}}>
                    <TouchableOpacity
                    onPress={() => handleDelete(item.id)}
                    ><Text><Icon name="delete" size={25} color="#676767" /></Text></TouchableOpacity>
                </View>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
             />
    </View>
  );
}
