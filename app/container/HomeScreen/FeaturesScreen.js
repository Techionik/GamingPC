import React, {useEffect, useState} from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {Color, Constants} from "../../common";

import {useNavigation} from "@react-navigation/native";

import {useDispatch} from "react-redux";
import Input from "../Components/input/Input";
import InputBasic from "../Components/input/InputBasic";
import {FieldComponent} from "../Components/FieldComponent";
import {ButtonComponent} from "../Components/ButtonComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {HeaderComponent} from "../Components/HeaderComponent";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";


export const FeaturesScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <HeaderComponent title={"Features"}/>
            <View style={{padding: 20}}>
                <FeaturesComponent title={"Browse"} disc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "} image={require('../../images/Browse.png')}/>
                <FeaturesComponent title={"Build"} disc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "} image={require('../../images/Build.png')}/>
                <FeaturesComponent title={"Share"} disc={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "} image={require('../../images/Share.png')}/>
            </View>

        </View>
    )
}

const FeaturesComponent=({image,title,disc})=>{
    return(
        <View style={{flexDirection:"row",marginVertical:10}}>
            <Image source={image} resizeMode={"contain"} style={{aspectRatio:1,width:"10%",height:undefined}}/>
            <View style={{marginLeft:10}}>
                <Text style={{fontFamily:Constants.fontFamilyBold,fontSize:20,color:Color.theme}}>{title}</Text>
                <Text style={{fontFamily:Constants.fontFamilyRegular,fontSize:12,color:"#fff"}}>{disc}</Text>
            </View>
        </View>
    )
}




