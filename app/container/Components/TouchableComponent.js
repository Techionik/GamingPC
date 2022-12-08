import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";



export default function TouchableComponent({onPress,disabled,Icon,withoutIcon,theme, title, Style, IconStyle,title2Style, title2,titleStyle}) {

    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[{
            flexDirection: "row",
            borderRadius: 10,
            alignItems:"center",
            backgroundColor: theme?.fieldBackgroundColor,
            paddingVertical: 15,
            paddingLeft: 20,
            paddingRight:10,
            marginTop: 10
        }, Style]}>

            {withoutIcon==true?null:
                <Image source={Icon} resizeMode={"contain"}
                       style={[{
                           aspectRatio: 1,
                           height: undefined,
                           width: "5%",
                           tintColor:theme?.blackAndWhite,
                           paddingRight:20,
                       }, IconStyle]}/>
            }
            <Text style={[{flex:1,marginLeft:10,color:theme?.fieldTextColor,includeFontPadding:false,padding:0,fontSize:14,fontFamily:Constants.fontFamilyRegular},titleStyle]}>{title}</Text>
            <Text style={[{marginRight:10,color:theme?.fieldTextColor,includeFontPadding:false,padding:0,fontSize:14,fontFamily:Constants.fontFamilyRegular},title2Style]}>{title2}</Text>

        </TouchableOpacity>
    )
}
