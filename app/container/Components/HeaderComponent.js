import {Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function HeaderComponent({Props, title,Drawer,Location}) {
    const navigation=useNavigation()
    const {t, language} = Props
    return (
        <View style={{flexDirection: "row",marginHorizontal:10, alignItems: "center", marginTop: 10,}}>
            <TouchableOpacity onPress={()=>{navigation.navigate("DrawerScreen")}} style={{borderRadius: 5, backgroundColor: Color.grayback, padding: 10}}>
                <MaterialIcons name={"sort"} size={25} color={Color.grayIn}/>
            </TouchableOpacity>
            {Drawer == true ?
                <View style={{flex:Location===false?0.9:1,alignItems:"center",}}>
                    <Text style={{fontSize: 16, fontFamily: Constants.fontFamilyRegular, color: "#000"}}>{title}</Text></View> :
               <>
                <View style={{marginLeft: 10, alignSelf: "flex-start"}}>
                    <Text style={{fontSize: 18, fontFamily: Constants.fontFamilyBold, color: "#000"}}>Hi Galeria !</Text>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.grayIn
                    }}>{t("L:WelcomeBack")}</Text>
                </View>
                <View style={{flex:1}}/>
                <Image source={require('../../images/NotficationICon.png')} resizeMode={"contain"} style={{height:undefined,width:"10%",marginRight:10,aspectRatio:1}}/></>}
            {Location===false?
               null
                :
                <TouchableOpacity style={{
                width: 80,
                paddingVertical: 10,
                borderRadius: 7,
                borderColor: Color.primary,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
            }}>
                <Image source={require('../../images/MarkerPin.png')} resizeMode={"contain"}
                style={{height: undefined, width: "20%", aspectRatio: 1, tintColor: Color.grayIn}}/>
                <Text numberOfLines={1} style={{
                fontSize: 12,
                fontFamily: Constants.fontFamilyRegular,
                color: "#000",
                marginLeft: 5,
                width: "70%"
            }}>St-14, Mall City</Text>
                </TouchableOpacity>
            }
        </View>
    )
}
