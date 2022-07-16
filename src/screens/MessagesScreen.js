/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import { Text, View,Image, TouchableOpacity, FlatList } from 'react-native';


export default function MessagesScreen() {

    const chats = [
        {
            id: 1,
            name: "Muhammad Sameer",
            userImg: "https://scontent.fisb17-1.fna.fbcdn.net/v/t1.6435-9/74841526_1195960653921701_1908725496892358656_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=OF681lV9-oEAX_nZZCO&_nc_ht=scontent.fisb17-1.fna&oh=00_AT-2D5X4LbYjVLqAIPLpr85nln3St76FEEmYKS8uyp2oKg&oe=62C63C48",
            msgTime: "2 hours ago",
            msgText: "Hello, Iphone 8 available or sold???"
        },
        {
            id: 2,
            name: "Wajahat Ahmad",
            userImg: "https://pps.whatsapp.net/v/t61.24694-24/260584099_129932969689343_1363872281947004933_n.jpg?ccb=11-4&oh=01_AVy5okIfYywbEAfeSdq_sFtBSETtGQf_Ys01UfjaQXi0mg&oe=62C0DC36",
            msgTime: "5 hours ago",
            msgText: "Hy, Honda 125 available or sold???"
        },
        {
            id: 3,
            name: "Faiq Shahzad",
            userImg: "https://pps.whatsapp.net/v/t61.24694-24/197917404_229073326061390_209738329490280572_n.jpg?ccb=11-4&oh=6564212bb4b1371888ccac7a390cd1ae&oe=62C0D32D",
            msgTime: "18 hours ago",
            msgText: "Hello cricket kit available???"
        },
        {
            id: 4,
            name: "Muhammad Usama",
            userImg: "https://pps.whatsapp.net/v/t61.24694-24/223465431_1675271452817032_4466194354911050365_n.jpg?ccb=11-4&oh=01_AVxvZcZuKf5biZbNk4qH8XHYIHnlCpLqGnPSsxCSib0J0g&oe=62BE7AF2",
            msgTime: "1 day ago",
            msgText: "aoa navy blue sofa sold???"
        },
        {
            id: 5,
            name: "Najam Khan",
            userImg: "https://pps.whatsapp.net/v/t61.24694-24/258884285_1993996637474625_1365705343874505296_n.jpg?ccb=11-4&oh=01_AVxahps-VAKaHPPRhixnCEzG2SWnvZ2gJXrqfR2wjwBB2g&oe=62BF4823",
            msgTime: "2 day ago",
            msgText: "Aoa hp g3 available???"
        },
    ]

  return (
    <View style={{flex: 1, paddingTop: 25, paddingRight: 10, paddingLeft: 10,  backgroundColor: "#e5e5e5"}}>
        <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 32, marginTop: 15, color: "#2c2c2c", marginBottom: 30}}>Messages</Text>

        <FlatList
            data={chats}
            renderItem={({item}) => (
                <TouchableOpacity style={{height: 120, display:"flex", flexDirection: "row", alignItems: 'center', backgroundColor: "white", marginTop: 10, borderRadius: 10}}>
                    <View style={{flex:0.25}}>
                        <Image style={{height: 60, width: 60, marginLeft: 10 ,marginRight: 3, borderRadius: 30}} source={{uri: item.userImg}} />
                    </View>
                    <View style={{flex:0.75}}>
                        <View style={{display: "flex", flexDirection:"row", justifyContent: "space-between", marginRight: 10, marginBottom: 10}}>
                            <Text style={{color: "black", fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
                            <Text style={{color: 'black', fontSize: 11}}>{item.msgTime}</Text>
                        </View>
                        <View>
                            <Text style={{color: 'black', fontSize: 13}}>{item.msgText}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            ></FlatList>

    </View>
  );
}