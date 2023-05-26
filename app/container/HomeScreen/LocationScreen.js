import React from "react";
import {Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Color, Constants} from "../../common";
import {ButtonComponent} from "../Components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";


export const LocationScreen=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <AntDesign name={"left"} size={30} color={"#fff"} style={{marginRight: 10}}/>
                <Text style={{
                    fontSize: 24,
                    fontFamily: Constants.fontFamilyBold,
                    color: "#fff",
                    includeFontPadding: false,
                    padding: 0,
                }}>{"Confirm Location "}</Text>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <View style={{padding:10,backgroundColor:"#fff",borderRadius:15}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:16,flex:1,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Pick Up Address</Text>
                        <AntDesign name={"check"} color={"#fff"} style={{padding:5,backgroundColor:"#5DBB9B",borderRadius:30}}/>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:14,fontFamily:Constants.fontFamilyRegular,color:"#000",width:"60%"}}>plot 10 shaewal main johar town lahore</Text>
                       <View style={{flex:1}}/>
                        <AntDesign name={"edit"} color={"#5DBB9B"} size={18}/>
                        <AntDesign name={"delete"} color={"red"} size={18} style={{marginLeft:10}}/>
                    </View>
                </View>
                <View style={{padding:10,marginTop:10,backgroundColor:"#fff",borderRadius:15}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:16,flex:1,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Delivery Address</Text>
                        <AntDesign name={"check"} color={"#fff"} style={{padding:5,backgroundColor:"#5DBB9B",borderRadius:30}}/>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:14,fontFamily:Constants.fontFamilyRegular,color:"#000",width:"60%"}}>plot 10 shaewal main johar town lahore</Text>
                        <View style={{flex:1}}/>
                        <AntDesign name={"edit"} color={"#5DBB9B"} size={18}/>
                        <AntDesign name={"delete"} color={"red"} size={18} style={{marginLeft:10}}/>
                    </View>
                </View>

                <View style={{flex:1}}/>
                <ButtonComponent title={"Add To Cart"} onPress={()=>{navigation.navigate("AddToCartScreen")}}/>
            </View>
        </View>
    )
}