import React from "react";
import {ImageBackground, Text, View} from "react-native";
import {SocialButtonComponent} from "../Components/SocialButtonComponent";
import {Constants} from "../../common";


export const SocialSignupScreen=()=>{
    return(
        <ImageBackground source={require('../../images/SocialBackground.png')} style={{flex:1,justifyContent:"flex-end",height:undefined,width:"100%",aspectRatio:0.479,alignSelf:"center"}}>
            <View style={{flex:0.4,backgroundColor:"rgba(255,255,255,0.42)",justifyContent:"flex-end",borderTopLeftRadius:25,borderTopRightRadius:25}}>
            <View style={{backgroundColor:"#fff",flex:0.9,borderTopLeftRadius:25,borderTopRightRadius:25,justifyContent:"center"}}>
                <View style={{marginHorizontal:20}}>
                <SocialButtonComponent title={"Continue with Google"} image={require('../../images/Google.png')}/>
                <SocialButtonComponent title={"Continue with Facebook"} image={require('../../images/FacebookCircled.png')}/>
                <SocialButtonComponent title={"Continue with Instagram"} image={require('../../images/Instagram.png')}/>
                </View>

            </View>
            <Text style={{color:"#000",backgroundColor:"#fff",textAlign:"center",fontFamily:Constants.fontFamilyRegular,fontSize:12}}>Powered by TECHIONIK</Text>
            </View>
        </ImageBackground>
    )
}