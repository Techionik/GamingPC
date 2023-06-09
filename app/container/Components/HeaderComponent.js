import {Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Color, Constants} from "../../common";
import React, {Children} from "react";
import {useNavigation} from "@react-navigation/native";


export const HeaderComponent=({title,style,theme,Children})=>{
    const navigation=useNavigation()
    return(
        <View style={[{flexDirection:"row",padding:20,paddingBottom:30,borderBottomRightRadius:20,borderBottomLeftRadius:20,backgroundColor:Color.theme,alignItems:"center"},style]}>
            <AntDesign onPress={() => {
                navigation.pop()
            }} name={"arrowleft"} size={30} color={theme?"#fff":Color.theme} style={{marginRight: 10,backgroundColor:Color.primary,padding:5,borderRadius:50}}/>
            <Text style={{
                fontSize: 24,
                flex:1,
                fontFamily: Constants.fontFamilyBold,
                color:theme?"#fff": Color.primary,
                includeFontPadding: false,
                padding: 0,
            }}>{title}</Text>
            {Children}
        </View>
    )
}