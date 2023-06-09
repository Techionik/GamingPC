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


export const SettingScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <HeaderComponent title={"Settings"}/>
            <View style={{marginHorizontal:15,marginTop:20}}>
            <RowComponent onPress={()=>{navigation.navigate("ProfileScreen")}} title={"Profile"}/>
            <RowComponent onPress={()=>{navigation.navigate("AboutUsScreen")}} title={"About Us"}/>
            <RowComponent onPress={()=>{navigation.navigate("PrivacyPolicyScreen")}} title={"Privacy Policy"}/>
            <RowComponent onPress={()=>{navigation.navigate("FeaturesScreen")}} title={"App Features"}/>
            <RowComponent title={"Share App"}/>
            <RowComponent onPress={()=>{navigation.replace("MainStack")}} arrow={true} title={"Sign Out"}/>
            </View>

        </View>
    )
}


const RowComponent=({title,onPress,arrow})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{padding:15,marginVertical:10,alignItems:"center",flexDirection:"row",borderRadius:30,backgroundColor:"rgba(128,128,128,0.2)"}}>
            <Text style={{fontSize:15,flex:1,fontFamily:Constants.fontFamilyMedium,marginLeft:10,color:"#fff"}}>{title}</Text>
            {arrow?null:<AntDesign name={"right"} size={20} color={"#fff"}/>}
        </TouchableOpacity>
    )
}




