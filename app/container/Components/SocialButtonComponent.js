import React from "react";
import {Image, Text, TouchableOpacity} from "react-native";
import {Color} from "../../common";


export const SocialButtonComponent=({image,style,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={[{margin:5,aspectRatio:1,height:undefined,width:"10%"},style]}>
            <Image source={image} style={{aspectRatio:1,height:undefined,width:"100%"}}/>
        </TouchableOpacity>
    )
}