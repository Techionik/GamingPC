import {Image, TouchableOpacity} from "react-native";
import React from "react";
import {Color} from "../../common";


export default function SocialButton({onPress,IconStyle,Icon,Style}){
    return(
        <TouchableOpacity onPress={onPress}
            style={[{height: 40, width: 40, borderRadius: 40, borderWidth: 0.5, borderColor: "#D9D9D9",alignItems:"center",justifyContent:"center"},Style]}>
            <Image source={Icon} resizeMode={"contain"} style={[{height:undefined,width:"60%",aspectRatio:1},IconStyle]}/>
        </TouchableOpacity>
    )
}
