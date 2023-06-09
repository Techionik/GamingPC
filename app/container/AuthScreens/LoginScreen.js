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


export const LoginScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()


    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <View style={{
                backgroundColor: Color.theme,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                padding: 20,
                alignItems: "center",
                flexDirection: "row"
            }}>
                <Text style={{
                    fontSize: 25,
                    flex: 1,
                    color: Color.primary,
                    fontFamily: Constants.fontFamilySemiBold,
                    width: "50%"
                }}>Welcome to Gaming PC!</Text>
                <Image source={require('../../images/Icon.png')} style={{tintColor: Color.primary}}/>
            </View>
            <View style={{paddingHorizontal: 20, marginTop: 30}}>
                <FieldComponent placeholder={"Enter Email"} title={"Email"}/>
                <FieldComponent Style={{marginTop: 20}} placeholder={"Enter Password"} title={"Password"}/>
                <Text
                    style={{fontSize: 10, fontFamily: Constants.fontFamilyRegular, color: "#fff", textAlign: "right"}}>Forget
                    Password?</Text>
                <ButtonComponent onPress={()=>{navigation.replace("HomeStack")}} Style={{marginTop: 50}} title={"Login"}/>
            </View>

            <View style={{flex: 1}}/>
            <Text style={{color: "#fff", textAlign: "center", fontFamily: Constants.fontFamilyRegular, fontSize: 12}}>Or
                sign up with</Text>
            <View style={{marginVertical: 30, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity style={{
                    height: 50,
                    width: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    backgroundColor: Color.theme
                }}>
                    <AntDesign name={"google"} size={30} color={"#000"}/>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    height: 50,
                    marginLeft: 20,
                    width: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    backgroundColor: Color.theme
                }}>
                    <FontAwesome name={"facebook-f"} size={30} color={"#000"}/>
                </TouchableOpacity>
            </View>
            <Text style={{color: "#fff",marginBottom:20, textAlign: "center", fontFamily: Constants.fontFamilyRegular, fontSize: 14}}>Not register yet ?<Text onPress={()=>{navigation.navigate("SignUpScreen")}} style={{color:Color.theme,fontFamily:Constants.fontFamilyBold}}>  Create Account</Text></Text>
        </View>
    )
}


