import {Image, ImageBackground, StatusBar, View} from "react-native";
import React from "react";
import Images from "../../common/Images";
import Text from "./text/Text";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";



export default function HeaderWihBackground({title,Props,children,colors,isBack,t,Style}){
    const navigation=useNavigation()
    return(
        <View>
            {/*<StatusBar backgroundColor={Color.primary} barStyle={'light-content'}/>*/}
        <View style={[{paddingBottom:30,backgroundColor:Color.primary,borderBottomRightRadius:25,borderBottomLeftRadius:25,paddingTop:10,justifyContent:'flex-start'},Style]}>


            <View style={{flexDirection:'row',justifyContent:"space-between",marginHorizontal:20,alignItems:'center'}}>
                {isBack ?

                    <View style={{justifyContent:'space-between'}}>
                        <AntDesign onPress={()=>{navigation.pop()}} name={"arrowleft"} color={"#fff"} size={35}/>
                        <Text style={{color: "#fff",includeFontPadding:false,padding:0, fontSize: 20,marginTop:30, fontFamily: Constants.fontFamilyBold}}>{title}</Text>
                    </View>
                    :

                    <View>
                        <Text style={{color: "#fff", fontSize: 20, fontFamily: Constants.fontFamilyBold}}>{t("L:HiExpert")}</Text>
                        <Text style={{color: "#fff", fontSize: 15, fontFamily: Constants.fontFamilyRegular}}>{t("L:WelcometoAhla")}</Text>
                    </View>
                }

                <Image style={{height:60,width:60}} resizeMode={"cover"} source={require("../../images/B3.png")}/>
            </View>
        </View>
        </View>
    )
}
