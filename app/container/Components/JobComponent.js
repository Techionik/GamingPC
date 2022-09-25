import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";


export default function JobComponent({Style, image,name,jobTitle,time,status,colors}) {
    return (
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:15,paddingVertical:12,backgroundColor:colors.fieldBackgroundColor,elevation:2,margin:8,borderRadius:10}}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{height:60,width:60,borderRadius:60}} resizeMode={"contain"} source={image} />
            <View style={{marginLeft:10}}>
            <Text style={{fontSize:16,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{name}</Text>
            <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{jobTitle}</Text>
             </View>

           </View>
            <View>
                <Text style={{fontSize:12,fontFamily:Constants.fontFamilyBold,color:colors.redOrGreen}}>{time}</Text>
                <Text style={{fontFamily:Constants.fontFamilySemiBold,fontSize:11,textAlign:'center',includeFontPadding:false,padding:0,color:"#fff",borderRadius:5,paddingHorizontal:12,paddingVertical:6,backgroundColor:"#40E0D0",marginTop:4}}>{status}</Text>
            </View>
        </View>
    )
}
