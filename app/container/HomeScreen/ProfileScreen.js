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


export const ProfileScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <HeaderComponent title={"Profile"}/>
            <View style={{marginHorizontal: 10}}>

                <View style={{
                    borderRadius: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 20,
                    backgroundColor: "rgba(128,128,128,0.2)",
                    padding: 10
                }}>
                    <View style={{backgroundColor: Color.theme, height: 50, width: 50, borderRadius: 25}}></View>
                    <View style={{marginLeft: 10}}>
                        <Text style={{
                            fontSize: 15,
                            color: "#fff",
                            includeFontPadding: false,
                            padding: 0,
                            fontFamily: Constants.fontFamilyMedium
                        }}>Welcome</Text>
                        <Text style={{
                            fontSize: 15,
                            color: "#fff",
                            includeFontPadding: false,
                            padding: 0,
                            fontFamily: Constants.fontFamilyMedium
                        }}>Username</Text>
                    </View>
                </View>
                <View style={{padding:10}}>
                <RowComponent title={"Name"} placeHolder={"Mudassir"} Icon={<Ionicons color={Color.theme} size={30} name={"person-circle"}/>}/>
                <RowComponent title={"Email"} placeHolder={"mudassirch@gmail.com"} Icon={<Entypo color={Color.theme} size={30} name={"mail"}/>}/>
                <RowComponent title={"Phone Number"} placeHolder={"+92 320 65745678"} Icon={<FontAwesome color={Color.theme} size={30} name={"phone"}/>}/>
                <RowComponent title={"Password"} placeHolder={"*******************"} Icon={<FontAwesome color={Color.theme} size={30} name={"lock"}/>}/>
                </View>
            </View>
        </View>
    )
}


const RowComponent = ({title,placeHolder, Icon}) => {
    return (
        <View  style={{
            marginVertical: 10,
            alignItems: "center",
            flexDirection: "row",
            paddingBottom:10,
            borderBottomWidth:1,
            borderColor:Color.theme,
        }}>
            {Icon}
            <View style={{marginLeft:10,flex:1,}}>
            <Text style={{
                fontSize: 15,
                includeFontPadding:false,
                padding:0,
                fontFamily: Constants.fontFamilyBold,
                color: "#fff"
            }}>{title}</Text>
                <TextInput style={{paddingVertical:0,fontSize:15,color:"#fff",}} placeholder={placeHolder} placeholderTextColor={"#fff"}>
                </TextInput>
            </View>

        </View>
    )
}




