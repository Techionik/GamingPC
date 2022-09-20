import {Image, Text, View} from "react-native";
import React from "react";
import Constants from "../../common/Constants";


export default function ProductHeader({title,colors}){
    return(
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{fontSize:14,flex:1,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyBold,color:colors.blackAndWhite}}>{title}</Text>
            <Image source={require('../../images/Trending.png')} resizeMode={"contain"} style={{height:undefined,width:"17%",aspectRatio:1}}/>
        </View>
    )
}
