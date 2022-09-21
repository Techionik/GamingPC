import {Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import drawer from "../../navigation/drawer_ref";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function HeaderComponent({Props,backColor, title,Drawer,Location,titleStyle,back,style}) {

    const navigation=useNavigation()
    const {t, language,themeColor} = Props
    const {colors}=themeColor
    return (
        <View style={[{flexDirection: "row",marginHorizontal:10,paddingBottom:10, alignItems: "center", marginTop: 10,},style]}>
            <TouchableOpacity onPress={()=>{drawer.current.open()}} style={{borderRadius: 5, backgroundColor: colors.greyToDark, padding: 10}}>
                <MaterialIcons name={"sort"} size={25} color={Color.grayIn}/>
            </TouchableOpacity>
            {Drawer == true ?
                <View style={{flex:Location===false||back==false?0.9:1,alignItems:"center",}}>
                    <Text style={[{includeFontPadding:false,padding:0,fontSize: 16, fontFamily: Constants.fontFamilyBold, color: colors.blackAndWhite},titleStyle]}>{title}</Text></View> :
               <>
                <View style={{marginLeft: 10, alignSelf: "flex-start"}}>
                    <Text style={{fontSize: 18,includeFontPadding:false,padding:0, fontFamily: Constants.fontFamilyBold, color: colors.blackAndWhite}}>Hi Galeria !</Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: Constants.fontFamilyBold,
                        color: colors.greyToDark,
                        includeFontPadding:false,
                        padding:0

                    }}>{t("L:WelcomeBack")}</Text>
                </View>
                <View style={{flex:1}}/>
                   <TouchableOpacity onPress={()=>{navigation.navigate('NotificationScreen')}}>
                <Image source={require('../../images/NotficationICon.png')} resizeMode={"contain"} style={{height:40,width:40,marginRight:10,aspectRatio:1}}/>
                   </TouchableOpacity>
                   </>}

            {Location===false||back===true?
                 <TouchableOpacity onPress={()=>{
                     navigation.pop()

                 }}>
                     <AntDesign name={"arrowleft"} color={backColor??"#fff"} size={25}/>
                     <Text style={{fontSize:12,fontFamily:Constants.Bold,color:backColor??"#fff",includeFontPadding:false,padding:0}}>{t("L:Back")}</Text>
                 </TouchableOpacity>
                :
                <TouchableOpacity style={{
                width: 80,
                paddingVertical: 10,
                borderRadius: 7,
                borderColor: Color.primary,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                    backgroundColor:colors.whiteToDark,
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
