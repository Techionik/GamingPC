import React, {useEffect, useState} from "react";
import {ActivityIndicator, Button, Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";

import {useNavigation} from "@react-navigation/native";

import {useDispatch} from "react-redux";
import Input from "../Components/input/Input";
import InputBasic from "../Components/input/InputBasic";
import {FieldComponent} from "../Components/FieldComponent";
import {ButtonComponent} from "../Components/ButtonComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export const DashboardScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()


    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <View style={{

                padding: 20,
                alignItems: "center",
                flexDirection: "row"
            }}>
                <View style={{flex:1}}>
                <Text style={{
                    fontSize: 20,
                    color: Color.theme,
                    includeFontPadding:false,
                    padding:0,
                    fontFamily: Constants.fontFamilyBold,
                }}>Hi Galeria !</Text>
                    <Text style={{
                    fontSize: 15,
                    color: "#fff",
                        includeFontPadding:false,
                        padding:0,
                    fontFamily: Constants.fontFamilyBold,
                }}>Welcome Back</Text>
                </View>
                <Image source={require('../../images/NotificationBell.png')} resizeMode={"contain"} style={{aspectRatio:1,height:undefined,width:"10%"}}/>
            </View>

            <Image source={require('../../images/DashboardIcon.png')} style={{aspectRatio:1,marginVertical:40,alignSelf:"center",height:undefined,width:"50%"}}/>
            <Text style={{fontFamily:Constants.fontFamilyMedium,color:"#fff",fontSize:20,width:"70%",alignSelf:"center",textAlign:"center"}}>To whom You are looking
                for services?</Text>
            <Text style={{fontFamily:Constants.fontFamilyRegular,color:"#fff",fontSize:12,width:"90%",alignSelf:"center",textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</Text>

            <View style={{flexDirection:"row",alignItems:"center",margin:30,justifyContent:"space-between"}}>
               <DashboardComponent onPress={()=>{navigation.navigate("PcBuildScreen")}} title={"Pc Build"} image={require('../../images/BuildImage.png')}/>
               <DashboardComponent title={"Accessories"} image={require('../../images/AccesoriesImage.png')}/>
            </View>

        </View>
    )
}


const DashboardComponent=({title,onPress,image})=>{
    return(
        <View style={{justifyContent:"center"}}>
            <TouchableOpacity onPress={onPress}  style={{backgroundColor:Color.theme,borderRadius:10,padding:20}}>
                <Image source={image} resizeMode={"contain"} style={{height:120,width:120}}/>
            </TouchableOpacity>
            <Text style={{fontFamily:Constants.fontFamilySemiBold,color:"#fff",fontSize:20,alignSelf:"center",textAlign:"center"}}>{title}</Text>
        </View>
    )
}


