import {Image, TextInput, TouchableOpacity, View} from "react-native";
import {Color} from "../../common";
import React from "react";


export default function SearchAndFilter({Props,value,onChangeText,onPress}){
    const {t,language}=Props
    return(
        <View style={{flexDirection:"row",alignItems:"center",marginVertical:20,}}>
            <View style={{flexDirection:"row",flex:1,padding:5,alignItems:"center",backgroundColor:"#F5F5F5",borderRadius:10}}>
                <TextInput placeholder={t("L:Searchservices")} value={value} onChangeText={onChangeText} placeholderTextColor={Color.grayIn}  style={{color:Color.grayIn,flex:1,paddingVertical:0}}></TextInput>
                <Image source={require("../../images/SearchIcon.png")} resizeMode={"contain"}
                       style={{aspectRatio: 1, height: undefined, width: "7%", marginRight: 10}}/>
            </View>
            <TouchableOpacity onPress={onPress} style={{backgroundColor:"#F5F5F5",marginLeft:10,alignItems:"center",justifyContent:"center",height:40,width:60,borderRadius:5}}>
                <Image source={require("../../images/Filter.png")} resizeMode={"contain"}
                       style={{height:30,width:30,alignSelf:"center",}}/>
            </TouchableOpacity>
        </View>
    )
}
