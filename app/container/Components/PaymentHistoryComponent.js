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
        }, Style]}>

            <View style={{backgroundColor:Color.blueColor,height:20,width:20,borderRadius:20,justifyContent:'center'}}>
                <Image style={{height:10,width:10}} resizeMode={"contain"} source={image}/>
            </View>

            <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,alignItems:'center'}}>
                <View>
                <Text style={{fontSize:15,fontFamily:Constants.fontFamilySemiBold,color:colors.blackAndWhite,}}>{title}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}></View>

                    <FontAwesome5 size={15} name={"long-arrow-alt-right"} color={Color.redColor}/>
                <Text style={{fontSize:13,fontFamily:Constants.fontFamilyRegular,color:colors.lightGreyToWhite,marginLeft:10}}>{task}</Text>
                </View>

            <View>
                <Text style={{fontSize:15,fontFamily:Constants.fontFamilySemiBold,color:colors.blackAndWhite,}}>{rate} SAR</Text>
                <Text style={{fontSize:13,fontFamily:Constants.fontFamilyRegular,color:colors.lightGreyToWhite,}}>{time}</Text>
            </View>
            </View>

                <View style={{borderWidth:1,width:'100%',backgroundColor:colors.lightGreyToWhite,marginVertical:15}}></View>

            </View>


        </View>
    )
}
