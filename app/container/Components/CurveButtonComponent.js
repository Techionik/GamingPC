import {Text, TouchableOpacity} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";


export default function CurveButtonComponent({title,titleStyle,Style,onPress,children}){
    return(
        <TouchableOpacity onPress={onPress} style={[{flexDirection:"row",backgroundColor:Color.primary,justifyContent:"center",alignItems:"center",paddingVertical:20,borderTopLeftRadius:70},Style]}>
            <Text style={[{fontSize:20,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyBold,color:"#fff"},titleStyle]}>{title}</Text>
            {children}
        </TouchableOpacity>

    )
}
