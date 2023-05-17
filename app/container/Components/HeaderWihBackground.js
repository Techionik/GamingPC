import {Image, ImageBackground, StatusBar, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import Images from "../../common/Images";
import Text from "./text/Text";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";



export default function HeaderWihBackground({title,Props,children,colors,isBack,t,Style}){
    const navigation=useNavigation()
    const userData = useSelector(state => state.user.userInfo)
    return(
        <View>
        <View style={[{paddingBottom:10,backgroundColor:Color.primary,borderBottomRightRadius:25,borderBottomLeftRadius:25,paddingTop:10,justifyContent:'flex-start'},Style]}>


            <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                {isBack ?

                    <View style={{justifyContent:'space-between',paddingBottom:25}}>
                        <AntDesign onPress={()=>{navigation.pop()}} name={"arrowleft"} style={{marginLeft:20}} color={"#fff"} size={35}/>
                        <View style={{flexDirection:"row",alignItems:"center",zIndex:-2,right:10,marginTop:20}}>
                        <View style={{height:15,paddingHorizontal:20,zIndex:-2,right:-10,backgroundColor:"#fff"}}/>
                        <Text style={{color: "#000",includeFontPadding:false,paddingHorizontal:15,backgroundColor:"#fff",borderRadius:20, fontSize: 20, fontFamily: Constants.fontFamilyBold}}>{title}</Text>
                        </View>
                    </View>
                    :
                    <View style={{marginHorizontal:20}}>
                        <Text style={{color: "#fff", fontSize: 20, fontFamily: Constants.fontFamilyBold}}>{`HI! ${userData?.Full_Name}`}</Text>
                        <Text style={{color: "#000", fontSize: 16,marginTop:5,paddingHorizontal:15,borderRadius:20,backgroundColor:"#fff", fontFamily: Constants.fontFamilyRegular}}>{userData?.Designation}</Text>
                    </View>
                }
                <TouchableOpacity onPress={()=>{  navigation.navigate("SettingScreen")}}>
                <Image  style={{height:70,marginRight:20,borderWidth:2,borderColor:"#fff",width:70,borderRadius:35}} resizeMode={"cover"} source={require("../../images/ProfileImage.png")}/>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}
