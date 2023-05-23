import React from "react";
import {Image, Text, TouchableOpacity} from "react-native";
import {Color} from "../../common";


export const SocialButtonComponent=({title,image,style})=>{
    return(
        <TouchableOpacity style={[{alignItems:"center",marginVertical:5,flexDirection:"row",backgroundColor:Color.Lightprimary,borderRadius:30,paddingHorizontal:20,paddingVertical:10},style]}>
            <Image source={image} style={{height:undefined,width:"12%",marginRight:20,aspectRatio:1}}/>
            <Text style={{fontSize:18,}}>{title}</Text>
        </TouchableOpacity>
    )
}