import React from "react";
import {Image, ImageBackground, Text, View} from "react-native";
import {SocialButtonComponent} from "../Components/SocialButtonComponent";
import {Color, Constants} from "../../common";
import SliderComponent from "../Components/SliderComponent";
import {Colors} from "react-native/Libraries/NewAppScreen";



export const SocialSignupScreen=()=>{

    return(
        <View style={{flex:1,justifyContent:"flex-end",backgroundColor:Color.primary,height:undefined,width:"100%",aspectRatio:0.479,alignSelf:"center"}}>
            <SliderComponent/>
            <View style={{backgroundColor:Color.primary,zIndex:2,top:-20,flex:0.2,borderTopLeftRadius:25,borderTopRightRadius:25,justifyContent:"flex-end"}}>
                <View style={{marginHorizontal:20}}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:10}}>
                    <Image source={require('../../images/Google.png')} style={{aspectRatio:1,height:undefined,width:"10%"}}/>
                    <Image source={require('../../images/FacebookCircled.png')} style={{aspectRatio:1,marginLeft:10,height:undefined,width:"10%"}}/>
                    </View>
                </View>
                <Text style={{color:"#fff",textAlign:"center",fontFamily:Constants.fontFamilyRegular,fontSize:12}}>Powered by TECHIONIK</Text>
            </View>

        </View>
    )
}