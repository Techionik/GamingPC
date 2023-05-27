import {Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Constants} from "../../common";
import React from "react";
import {useNavigation} from "@react-navigation/native";


export const HeaderComponent=({title,back})=>{
    const navigation=useNavigation()
    return(
        <View style={{flexDirection:"row",alignItems:"center"}}>
            {back==false?null:<AntDesign onPress={() => {
                navigation.pop()
            }} name={"left"} size={30} color={"#fff"} style={{marginRight: 10}}/>}
            <Text style={{
                fontSize: 24,
                fontFamily: Constants.fontFamilyBold,
                color: "#fff",
                includeFontPadding: false,
                padding: 0,
            }}>{title}</Text>
        </View>
    )
}