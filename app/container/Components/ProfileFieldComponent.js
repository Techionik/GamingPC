import React from "react"
import {Text, TextInput, View} from "react-native";
import {Color, Constants} from "../../common";



export default function ProfileFieldComponent({title,value,placeholder,onChangeText,colors,profile,titleStyle,viewStyle}){
    return(
        <View style={[{marginBottom:5,paddingBottom:10,borderBottomWidth:1,borderColor:profile==true?colors.greyToWhite:Color.primary},viewStyle]}>
            <Text style={[{fontSize:14,marginLeft:5,fontFamily:Constants.fontFamilyRegular,color:profile==true?colors.blackAndWhite:Color.primary},titleStyle]}>{title}</Text>
            <TextInput style={{paddingVertical:0,color:colors.blackAndWhite}} value={value} onChangeText={onChangeText} placeholderTextColor={colors.greyToWhite} placeholder={placeholder}/>
        </View>
    )
}
