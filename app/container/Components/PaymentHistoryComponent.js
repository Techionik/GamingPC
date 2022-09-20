import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


export default function PaymentHistoryComponent({Style,title,image,onPress,colors,task,rate,time}) {
    return (
        <View onPress={onPress} style={[{
            flexDirection:'row',
            alignItems:'flex-start'
        }, Style]}>

            <View style={{backgroundColor:Color.blueColor,height:34,width:34,borderRadius:20,justifyContent:'center'}}>
                <Image style={{height:13,width:13,alignSelf:'center'}} resizeMode={"contain"} source={image}/>
            </View>

            <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:13,alignItems:'center',flex:1}}>
                <View >
                <Text style={{fontSize:13,fontFamily:Constants.fontFamilySemiBold,color:colors.blackAndWhite,}}>{title}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <FontAwesome5 size={15} name={"long-arrow-alt-right"} color={Color.redColor}/>
                <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:colors.greyToWhite,marginLeft:10}}>{task}</Text>
                    </View>
                </View>

            <View>
                <Text style={{fontSize:13,fontFamily:Constants.fontFamilySemiBold,color:colors.blackAndWhite,}}>{rate} SAR</Text>
                <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:colors.greyToWhite,}}>{time}</Text>
            </View>
            </View>

                <View style={{height:1,width:'100%',backgroundColor:colors.lightgreyToWhite,marginVertical:15,alignSelf:'flex-end'}}></View>

            </View>


        </View>
    )
}
