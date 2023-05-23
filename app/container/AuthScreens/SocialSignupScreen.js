import React from "react";
import {Image, ImageBackground, Text, View} from "react-native";
import {SocialButtonComponent} from "../Components/SocialButtonComponent";
import {Color, Constants} from "../../common";
import SliderComponent from "../Components/SliderComponent";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useNavigation} from "@react-navigation/native";



export const SocialSignupScreen=()=>{
    const navigation=useNavigation()

    return(
        <View style={{flex:1,justifyContent:"flex-end",backgroundColor:Color.primary,height:undefined,width:"100%",aspectRatio:0.479,alignSelf:"center"}}>
            <SliderComponent/>
            <View style={{backgroundColor:Color.primary,zIndex:2,top:-20,flex:0.2,borderTopLeftRadius:25,borderTopRightRadius:25,justifyContent:"flex-end"}}>
                <Image style={{
                    height: undefined,
                    width: "50%",
                    aspectRatio: 8,
                    marginBottom:20,
                    alignSelf: 'center',
                }} source={require('../../images/Logo.png')}/>
                <View style={{marginHorizontal:20}}>
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:10}}>
                        <SocialButtonComponent onPress={()=>{navigation.navigate("HomeScreen")}} image={require('../../images/Google.png')}/>
                        <SocialButtonComponent onPress={()=>{navigation.navigate("HomeScreen")}} image={require('../../images/FacebookCircled.png')}/>
                    </View>
                </View>
                <Text style={{color:"#fff",textAlign:"center",fontFamily:Constants.fontFamilyRegular,fontSize:12}}>Powered by TECHIONIK</Text>
            </View>

        </View>
    )
}