import React from "react";
import {Image, ImageBackground, Text, View} from "react-native";
import {SocialButtonComponent} from "../Components/SocialButtonComponent";
import {Constants} from "../../common";


export const SocialSignupScreen=()=>{
    return(
        <ImageBackground source={require('../../images/SocialBackground.png')} style={{flex:1,justifyContent:"flex-end",height:undefined,width:"100%",aspectRatio:0.479,alignSelf:"center"}}>

            <View style={{backgroundColor:"#DEDEDE",flex:0.2,borderTopLeftRadius:25,borderTopRightRadius:25,justifyContent:"flex-end"}}>
                <View style={{marginHorizontal:20}}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:10}}>
                    <Image source={require('../../images/Google.png')} style={{aspectRatio:1,height:undefined,width:"12%"}}/>
                    <Image source={require('../../images/FacebookCircled.png')} style={{aspectRatio:1,height:undefined,width:"12%"}}/>
                    </View>
                </View>

            </View>
            <Text style={{color:"#000",backgroundColor:"#DEDEDE",textAlign:"center",fontFamily:Constants.fontFamilyRegular,fontSize:12}}>Powered by TECHIONIK</Text>
        </ImageBackground>
    )
}