import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";


export default function AddToCartComponent({Props,Style,title,image,onPress,colors,numberofPerson,price,quantity}) {
  const {t,language}=Props
    return (
        <View onPress={onPress} style={[{
            borderRadius: 10,
            backgroundColor: colors.BackgroundView,
            paddingVertical: 15,
            paddingHorizontal:12,
            marginTop: 15,
            flexDirection:'row',
            justifyContent:'space-between',

        }, Style]}>

            <View style={{flexDirection:'row'}}>
            <Image style={{height:140,width:110,borderRadius:10}} source={image}/>
            <View style={{marginLeft:10,justifyContent:'space-between'}}>
                <View>
                <Text style={{fontSize:14,fontFamily:Constants.fontFamilySemiBold,color:colors.blackAndWhite,}}>{title}</Text>
                <Text style={[{fontSize:13,fontFamily:Constants.fontFamilyRegular,color:colors.fieldTextColor},]}>{t("L:Persons")} : {numberofPerson}</Text>
                <Text style={{fontSize:13,fontFamily:Constants.fontFamilyBold,color:colors.redOrGreen}}>{t("L:Edit")}</Text>
                </View>
                <Text style={{fontSize:15,fontFamily:Constants.fontFamilyBold,color:Color.primary,marginTop:15}}>{price} SAR</Text>
            </View>

            </View>

            <View style={{justifyContent:'space-between',alignItems:'flex-end'}}>
                <View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:12,fontFamily:Constants.fontFamilyBold,color:colors.redOrGreen}}>{t("L:Remove")}</Text>
                <Ionicons name={"remove-circle-outline"} style={{marginLeft:4}} color={colors.redOrGreen} size={20}/>
                    </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{height:32,width:32,borderWidth:0.5,borderColor:Color.grayIn,borderRadius:3,justifyContent:'center',backgroundColor:colors.whiteAndBlue}}>
                        <Entypo name={"minus"} style={{alignSelf:'center',}} color={colors.blackAndWhite} size={20}/>

                    </View>
                    <Text style={{fontSize:14,marginHorizontal:7,fontFamily:Constants.fontFamilySemiBold,color:colors.blackAndWhite,}}>{quantity}</Text>

                    <View style={{height:32,width:32,borderWidth:0.5,borderColor:Color.grayIn,borderRadius:3,justifyContent:'center',backgroundColor:colors.whiteAndBlue}}>
                        <Entypo name={"plus"} style={{alignSelf:'center',}} color={colors.blackAndWhite} size={20}/>

                    </View>
                </View>

            </View>


        </View>
    )
}
