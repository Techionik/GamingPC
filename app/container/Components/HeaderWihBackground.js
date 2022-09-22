import {Image, ImageBackground, StatusBar, View} from "react-native";
import React from "react";
import Images from "../../common/Images";
import Text from "./text/Text";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";



export default function HeaderWihBackground({title,Props,children,colors,isBack}){
    const navigation=useNavigation()
    return(
        <View>
            <StatusBar backgroundColor={Color.primary} barStyle={'light-content'}/>
        <ImageBackground resizeMode={"cover"} source={require('../../images/headerBackgroundImage.png')}
                         style={{height: undefined, width: "100%", aspectRatio: 2.1,justifyContent:'center'}}>


            <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:20,alignItems:'center'}}>
                {isBack ?

                    <View style={{justifyContent:'space-between'}}>
                        <AntDesign onPress={()=>{navigation.pop()}} name={"arrowleft"} color={"#fff"} size={25}/>
                        <Text style={{color: "#fff", fontSize: 20,marginTop:30, fontFamily: Constants.fontFamilyBold}}>{title}</Text>
                    </View>
                    :

                    <View>
                        <Text style={{color: "#fff", fontSize: 20, fontFamily: Constants.fontFamilyBold}}>Hi , Expert
                            !</Text>
                        <Text style={{color: "#fff", fontSize: 15, fontFamily: Constants.fontFamilyRegular}}>Welcome to
                            Ahla</Text>
                    </View>
                }

                <View>
                <Image style={{height:70,width:70}} resizeMode={"cover"} source={require("../../images/defaultLogo.png")}/>
                <Text onPress={()=>{navigation.navigate("SettingsScreen")}} style={{fontFamily:Constants.fontFamilySemiBold,fontSize:14,color:'#fff',marginTop:10}}>Settings</Text>
                </View>
            </View>
        </ImageBackground>
        </View>
    )
}
