import {Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";


export default function BannerComponent({Props,style,image,off,buttonStyle,titleStyle}){
    const {t,language}=Props
    return(
        <View style={[{borderRadius:20,padding:10,backgroundColor:Color.primary,flexDirection:"row"},style]}>
            <View style={{marginVertical:10,flex:1}}>
                <Text style={{fontFamily:Constants.fontFamilyBold,fontSize:20,color:"#000"}}>{t("L:UPTO")} {off} {t("L:OFF")}</Text>
                <Text style={{fontFamily:Constants.fontFamilyBold,fontSize:14,color:"#fff"}}>{t("L:SpecialDiscountOffer")}</Text>
                <Text style={{fontFamily:Constants.fontFamilyBold,fontSize:12,color:"#fff"}}>{t("L:fornewCustomers")}</Text>
                <TouchableOpacity style={[{alignSelf:"flex-start",marginTop:5,backgroundColor:"#fff",paddingHorizontal:10,paddingVertical:5},buttonStyle]}>
                    <Text style={{fontSize:7,fontFamily:Constants.fontFamilyBold,color:"#000"}}>{t("L:ApplyCode")}:<Text style={[{color:Color.primary,fontSize:10},titleStyle]}> NEW40OFF</Text></Text>
                </TouchableOpacity>
            </View>
            <Image source={image} resizeMode={"contain"} style={{aspectRatio:1.5,width:"50%",height:undefined,alignSelf:"flex-end",}}/>

        </View>
    )
}
