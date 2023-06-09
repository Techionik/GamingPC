import {Text, TextInput, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Color, Constants} from "../../common";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export const SearchHeaderComponent=({title,})=>{
    const navigation=useNavigation()
    return(
        <View style={{flexDirection:"row",padding:20,paddingBottom:30,borderBottomRightRadius:20,borderBottomLeftRadius:20,backgroundColor:Color.theme,alignItems:"center"}}>
            <AntDesign onPress={() => {
                navigation.pop()
            }} name={"arrowleft"} size={30} color={Color.theme} style={{marginRight: 10,backgroundColor:Color.primary,padding:5,borderRadius:50}}/>
           <TextInput style={{padding:5,borderRadius:5,paddingLeft:10,flex:1,fontFamily:Constants.fontFamilyBold,color:"#000",backgroundColor:"rgba(248,248,248,0.2)"}} placeholder={"Search Monitor"} placeholderTextColor={"#000"}/>
            <MaterialIcons name={"sort"} size={25} style={{marginLeft:10}} color={"#000"}/>
        </View>
    )
}