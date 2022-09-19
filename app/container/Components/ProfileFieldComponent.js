import React from "react"
import {Text, TextInput, View} from "react-native";
import {Color, Constants} from "../../common";



export default function ProfileFieldComponent({title,value,placeholder,onChangeText,colors,profile}){
    return(
        <View style={{marginBottom:5,paddingBottom:10,borderBottomWidth:1,borderColor:profile==true?colors.greyToWhite:Color.primary}}>
            <Text style={{fontSize:14,fontFamily:Constants.fontFamilyBold,color:profile==true?colors.blackAndWhite:Color.primary}}>{title}</Text>
            <TextInput style={{paddingVertical:0}} value={value} onChangeText={onChangeText} placeholderTextColor={colors.greyToWhite} placeholder={placeholder}/>
        </View>
    )
}
