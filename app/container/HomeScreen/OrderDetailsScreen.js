import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {Color, Constants} from "../../common";
import {HeaderComponent} from "../Components/HeaderComponent";
import {CardField} from "../Components/CardField";
import CheckBox from "@react-native-community/checkbox";
import {ButtonComponent} from "../Components/ButtonComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {useNavigation} from "@react-navigation/native";


export const OrderDetailsScreen=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:Color.primary}}>
            <HeaderComponent title={"Check Out"} Children={<>
            <Image source={require('../../images/CartIcon.png')} style={{aspectRatio:1,width:"15%",height:undefined}}/>
            </>}/>
            <Image source={require('../../images/OrderDetailImage.png')} style={{aspectRatio:1.140,marginVertical:40,alignSelf:"center",height:undefined,width:"50%"}}/>
            <View style={{marginHorizontal:15}}>
            <ButtonArrowComponent onPress={()=>{navigation.navigate("CheckOutScreen")}}  heading={"Payment"} title={"Visa Card"}/>
            <ButtonArrowComponent heading={"Location"} title={"CB-136 Lalazar Punjab, Lahore,Punjab,Pakistan"}>
                <EvilIcons name={"location"} size={30} style={{marginRight:10}} />
            </ButtonArrowComponent>
                <View style={{marginVertical:5,}}>
                    <Text style={{fontFamily:Constants.fontFamilyMedium,fontSize:15,color:Color.theme}}>Order Summary</Text>
                    <View style={{backgroundColor:"rgba(128,128,128,0.2)",alignItems:"center",padding:20,borderRadius:15}}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:15,flex:1,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>Sub Total Product:</Text>
                            <Text style={{fontSize:15,fontFamily:Constants.fontFamilyBold,color:Color.theme}}>$125.50</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:15,flex:1,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>Shipping: </Text>
                            <Text style={{fontSize:15,fontFamily:Constants.fontFamilyBold,color:Color.theme}}>$20</Text>
                        </View>
                        <View style={{borderWidth:0.5,width:"100%",borderColor:Color.theme}}/>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Text style={{fontSize:15,flex:1,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>Total: </Text>
                            <Text style={{fontSize:15,fontFamily:Constants.fontFamilyBold,color:Color.theme}}>$140</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flex:1}}/>
            <ButtonComponent onPress={()=>{navigation.navigate("OrdersScreen")}} title={"Check Out"} Style={{width:"50%",marginBottom:20,borderRadius:10,alignSelf:"center"}}/>
        </View>
    )
}


const ButtonArrowComponent=({title,heading,onPress,children})=>{
    return(
        <View style={{marginVertical:5,}}>
            <Text style={{fontFamily:Constants.fontFamilyMedium,fontSize:15,color:Color.theme}}>{heading}</Text>
        <TouchableOpacity onPress={onPress} style={{backgroundColor:"rgba(128,128,128,0.2)",alignItems:"center",padding:20,flexDirection:"row",borderRadius:15}}>
            {children}
            <Text style={{fontSize:15,flex:1,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>{title}</Text>
            <AntDesign name={"right"} size={20} color={"#fff"}/>
        </TouchableOpacity>
        </View>
    )
}