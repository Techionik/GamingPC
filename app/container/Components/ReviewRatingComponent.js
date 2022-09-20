import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";
import colors from "react-native/Libraries/NewAppScreen/components/Colors";
import ButtonComponent from "./ButtonComponent";


export default function ReviewRatingComponent({Props,Style,image,title,titleStyle,taskArray,colors,date,startTime,endTime,diffTime}) {
  const {t,language}=Props
    return (
            <View  style={[{
                borderRadius: 10,
                backgroundColor: colors.whiteToGrey,
                paddingVertical: 10,
                paddingHorizontal:15,
                marginVertical: 10,
                borderColor:Color.primary,
                borderWidth:0.4,


            }, Style]}>
                <Image resizeMode={"cover"} source={image} style={{height:70,width:"100%",}}/>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:10}}>
                <Text style={[{fontSize:14,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite,marginLeft:3},titleStyle]}>{title}</Text>
                <Text style={[{fontSize:11,fontFamily:Constants.fontFamilyBold,color:colors.blackAndWhite,backgroundColor:colors.lightGreenToGreen,paddingHorizontal:10,paddingVertical:3,borderRadius:5,},titleStyle]}>{t("L:completed")}</Text>
            </View>

                <View style={{height:1,width:"100%",backgroundColor:Color.borderGreyColor,alignSelf:'center',marginVertical:8}}></View>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

                <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:colors.fieldTextColor}}>{date}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}} >
                <Text style={[{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite},]}>{startTime}</Text>
                <Text style={[{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite},]}>-{endTime}</Text>
                <Text style={[{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:colors.fieldTextColor},]}> ({diffTime})</Text>
                </View>

                </View>
                <FlatList style={{marginTop:15,marginBottom:8,backgroundColor:Color.extraLightPrimary,borderRadius:10,paddingHorizontal:16,paddingVertical:7}} data={taskArray}  renderItem={({item, index}) =>

                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:5}}>

                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image resizeMode={"center"} source={item.image} style={{height:30,width:30}}/>
                            <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:"#000",marginLeft:3}}>{item.title}</Text>
                        </View>
                        <Text style={{fontSize:11,fontFamily:Constants.fontFamilyBold,color:Color.redColor}}>SAR {item.rate}</Text>
                    </View>


                }/>


            </View>
    )
}

