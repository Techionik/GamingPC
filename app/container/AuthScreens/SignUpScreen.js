import React, {useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {FieldComponent} from "../Components/FieldComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {ButtonComponent} from "../Components/ButtonComponent";
import {toast} from "../../Omni";
import firestore from "@react-native-firebase/firestore";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export const SignUpScreen = (props) => {
    const [FirstName,setFirstName]=useState("")
    const [LastName,setLastName]=useState("")
    const [Phone,setPhone]=useState(props?.route?.params?.PhoneNumber?props?.route?.params?.PhoneNumber:"")
    const [Password,setPassword]=useState("")
    const [Address,setAddress]=useState("")
    const navigation=useNavigation()



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
                flexDirection: "row",
                justifyContent:"center"
            }}>
                <Image style={{
                    height: undefined,
                    width: "100%",
                    aspectRatio: 2.81,
                    alignSelf: 'center',
                }} source={require('../../images/SignIpLogo.png')}/>
            </View>
            <View style={{paddingHorizontal: 20, marginTop: 30}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <FieldComponent Style={{flex:1}} placeholder={"First Name"} title={"First Name"}/>
                <FieldComponent Style={{flex:1,marginLeft:20}} placeholder={"Last Name"} title={"Last Name"}/>
                </View>
                <FieldComponent Style={{marginTop: 20}} placeholder={"Enter Email"} title={"Email"}/>
                <FieldComponent Style={{marginTop: 20}} placeholder={"Enter Password"} title={"Password"}/>
                <ButtonComponent onPress={()=>{navigation.navigate("LoginScreen")}} Style={{marginTop: 50}} title={"Sign Up"}/>
            </View>
            <View style={{flex:1}}/>

            <Text style={{color: "#fff",marginBottom:20, textAlign: "center", fontFamily: Constants.fontFamilyRegular, fontSize: 14}}>Already have an account?<Text onPress={()=>{navigation.navigate("LoginScreen")}} style={{color:Color.theme,fontFamily:Constants.fontFamilyBold}}>  Login</Text></Text>
        </View>
    )
}

