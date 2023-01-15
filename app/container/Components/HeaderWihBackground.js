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
            {/*<StatusBar backgroundColor={Color.primary} barStyle={'light-content'}/>*/}
        <View style={[{paddingBottom:10,backgroundColor:Color.primary,borderBottomRightRadius:25,borderBottomLeftRadius:25,paddingTop:10,justifyContent:'flex-start'},Style]}>


            <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:20,alignItems:'center'}}>
                {isBack ?

                    <View style={{justifyContent:'space-between'}}>
                        <AntDesign onPress={()=>{navigation.pop()}} name={"arrowleft"} color={"#fff"} size={35}/>
                        <Text style={{color: "#fff",includeFontPadding:false,padding:0, fontSize: 20,marginTop:30, fontFamily: Constants.fontFamilyBold}}>{title}</Text>
                    </View>
                    :

                    <View>
                        <Text style={{color: "#fff", fontSize: 15, fontFamily: Constants.fontFamilyBold}}>{`HI! ${userData?.Full_Name}`}</Text>
                        <Text style={{color: "#fff", fontSize: 15, fontFamily: Constants.fontFamilyRegular}}>{userData?.Designation}</Text>
                    </View>
                }


                <TouchableOpacity onPress={()=>{  navigation.navigate("SettingScreen")}}>
                <Image  style={{height:70,borderWidth:2,borderColor:"#fff",width:70,borderRadius:35}} resizeMode={"cover"} source={require("../../images/ProfileImage.png")}/>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}
