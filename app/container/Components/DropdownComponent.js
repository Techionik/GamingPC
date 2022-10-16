import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";



export default function DropdownComponent({onPress,Icon,withoutIcon,theme, title, Style, IconStyle, FieldStyle,children,titleStyle}) {

    return (
        <TouchableOpacity onPress={onPress} style={[{
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
                        width: "8%",

                        paddingRight:20,
                    }, IconStyle]}/>
            }
            <Text style={[{flex:1,marginLeft:10,color:theme?.fieldTextColor,includeFontPadding:false,padding:0,fontSize:14,fontFamily:Constants.fontFamilyRegular},titleStyle]}>{title}</Text>

            {children?children:
            <Entypo name={"chevron-down"} size={20} color={theme?.darKToWhite} />
            }
        </TouchableOpacity>
    )
}
