import {Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";

export const HomeScreenComponent=({title,onPress,image,Style})=>{
    return(
        <TouchableOpacity onPress={onPress} style={[{margin:10,backgroundColor:Color.primary,justifyContent:"center",alignItems:"center",padding:10,borderRadius:15,flex:1},Style]}>
            <View style={{backgroundColor:"#fff",alignItems:"center",justifyContent:"center",height:50,width:50,borderRadius:25}}>
                <Image source={image} style={{aspectRatio:1,width:"70%",height:undefined}}/>
            </View>
            <Text style={{fontSize:14,color:"#fff",fontFamily:Constants.fontFamilyMedium,marginTop:5}}>{title}</Text>
        </TouchableOpacity>
    )
}