
import React, {useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";


export const HomeScreen = () => {

    const navigation=useNavigation()
    const services=[{title:"Washing & Iron",image:require('../../images/washingMachine.png'),navigation:"AddDetailScreen"},{title: "Iron",image:require('../../images/iron.png'),navigation: "AddDetailScreen"},{title: "Dry Cleaning",image:require('../../images/dry-cleaning.png'),navigation: "AddDetailScreen"}]

    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <View style={{flex: 1}}>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff"
                    }}>{"Hi There!"}</Text>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: Constants.fontFamilyRegular,
                        color: "#fff"
                    }}>{"Hope You Are Doing Well"}</Text>
                </View>
                <AntDesign onPress={()=>{navigation.navigate("CartScreen")}} name={"setting"} size={40}/>
            </View>
            <View style={{flex:0.5}}/>
            <View style={{flex:1,backgroundColor:"#dfdfdf",padding:20,borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <ServiceComponent item={services[0]}/>
                    <ServiceComponent item={services[1]}/>
                </View>
                <ServiceComponent item={services[2]} Style={{marginTop:10}}/>
            </View>
        </View>
    )
}
const ServiceComponent=({item,Style})=>{
    const navigation=useNavigation()
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate(item.navigation)}} style={[{backgroundColor: "#fff", borderRadius: 10,justifyContent:"center",height:170,width:170,alignItems:"center",},Style]}>
            <Image source={item.image} style={{height:70,width:70}}/>
            <Text style={{fontSize:18,fontFamily:Constants.fontFamilyBold,color:Color.primary,marginTop:5}}>{item.title}</Text>
        </TouchableOpacity>
    )
}