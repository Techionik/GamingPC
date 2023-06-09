import {Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Color, Constants} from "../../common";
import React from "react";
import {useNavigation} from "@react-navigation/native";


export const HeaderComponent=({title,})=>{
    const navigation=useNavigation()
    return(
        <View style={{flexDirection:"row",padding:20,paddingBottom:30,borderBottomRightRadius:20,borderBottomLeftRadius:20,backgroundColor:Color.theme,alignItems:"center"}}>
            <AntDesign onPress={() => {
                navigation.pop()
            }} name={"arrowleft"} size={30} color={Color.theme} style={{marginRight: 10,backgroundColor:Color.primary,padding:5,borderRadius:50}}/>
            <Text style={{
                fontSize: 24,
                fontFamily: Constants.fontFamilyBold,
                color: Color.primary,
                includeFontPadding: false,
                padding: 0,
            }}>{title}</Text>
        </View>
    )
}