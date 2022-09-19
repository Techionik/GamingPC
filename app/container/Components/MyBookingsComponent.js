import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";


export default function MyBookingsComponent({Style,image,title,titleStyle,onPress,}) {
    return (
        <View  style={[{
            borderRadius: 10,
            backgroundColor: "#fff",
            paddingVertical: 10,
            justifyContent:"center",
            alignItems:"center",
            marginVertical: 10,
            borderColor:Color.primary,
            borderWidth:0.4,
        }, Style]}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

           <Image resizeMode={"center"} source={image} style={{height:50,width:60}}/>
            <Text style={[{fontSize:16,fontFamily:Constants.fontFamilyRegular,color:"#000"},titleStyle]}>{title}</Text>

            <Text style={[{fontSize:12,},titleStyle]}>{title}</Text>
        </View>

        </View>
    )
}

