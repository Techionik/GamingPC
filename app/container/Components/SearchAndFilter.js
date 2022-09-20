import {Image, TextInput, TouchableOpacity, View} from "react-native";
import {Color} from "../../common";
import React from "react";


export default function SearchAndFilter({Props,value,onChangeText,onPress}){
    const {t,language,themeColor}=Props
    const {colors}=themeColor
    return(
        <View style={{flexDirection:"row",alignItems:"center",marginVertical:20,}}>
            <View style={{flexDirection:"row",flex:1,padding:5,alignItems:"center",backgroundColor:colors.greyToDark,borderRadius:10}}>
                <TextInput placeholder={t("L:Searchservices")} value={value} onChangeText={onChangeText} placeholderTextColor={colors.blackAndWhite}  style={{color:colors.greyToWhite,flex:1,paddingVertical:0}}></TextInput>
                <Image source={require("../../images/SearchIcon.png")} resizeMode={"contain"}
                       style={{aspectRatio: 1,tintColor:colors.greyToWhite, height: undefined, width: "7%", marginRight: 10}}/>
            </View>
            <TouchableOpacity onPress={onPress} style={{backgroundColor:colors.greyToDark,marginLeft:10,alignItems:"center",justifyContent:"center",height:40,width:60,borderRadius:5}}>
                <Image source={require("../../images/Filter.png")} resizeMode={"contain"}
                       style={{height:30,width:30,tintColor:colors.greyToWhite,alignSelf:"center",}}/>
            </TouchableOpacity>
        </View>
    )
}
