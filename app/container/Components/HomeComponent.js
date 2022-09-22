import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";


export default function HomeComponent({Style,title,titleStyle,onPress,image,colors}) {
    return (
        <TouchableOpacity onPress={onPress} style={[{
            borderRadius: 10,
            backgroundColor: colors.componentBackground,
            justifyContent:"center",
            alignItems:"center",
            height:130,
            width:140,
            margin:10
        }, Style]}>


            <View style={{alignItems:'center',}}>

                <View style={{height:40,width:40,borderRadius:40,backgroundColor:Color.primary,justifyContent:'center'}}>
                    <Image style={{height:20,width:20,alignSelf:'center'}} resizeMode={"cover"} source={image}/>
                </View>

                <Text style={[{fontSize:15,marginTop:10,fontFamily:Constants.fontFamilySemiBold,color:colors.blackAndWhite,includeFontPadding:false,padding:0},titleStyle]}>{title}</Text>


            </View>
        </TouchableOpacity>
    )
}
