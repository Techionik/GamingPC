import React, {useEffect} from "react";
import {Text, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Color, Constants} from "../../common";
import {ButtonComponent} from "../Components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";
import {HeaderComponent} from "../Components/HeaderComponent";
import {useSelector} from "react-redux";


export const LocationScreen=(props)=>{
    const navigation=useNavigation()
    const  Bill= props?.route?.params?.bill
    const  CurrentAddress= useSelector(state => state?.user?.currentAddress)
    const  DeliveryAddress= useSelector(state => state?.user?.deliveryAddress)

    return(
        <View style={{flex:1,backgroundColor:Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent  title={"Confirm Location"}/>
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
                    <Text style={{fontSize:14,fontFamily:Constants.fontFamilyRegular,color:"#000",width:"60%"}}>{CurrentAddress?CurrentAddress?.Address:""}</Text>
                       <View style={{flex:1}}/>
                        <AntDesign onPress={()=>{navigation.navigate("LocationEditScreen",{From:"Current"})}} name={"edit"} color={"#5DBB9B"} size={18}/>
                    </View>
                </View>
                <View style={{padding:10,marginTop:10,backgroundColor:"#fff",borderRadius:15}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:16,flex:1,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Delivery Address</Text>
                        <AntDesign  name={"check"} color={"#fff"} style={{padding:5,backgroundColor:"#5DBB9B",borderRadius:30}}/>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:14,fontFamily:Constants.fontFamilyRegular,color:"#000",width:"60%"}}>{DeliveryAddress?DeliveryAddress?.Address:""}</Text>
                        <View style={{flex:1}}/>
                        <AntDesign onPress={()=>{navigation.navigate("LocationEditScreen",{From:"Delivery"})}} name={"edit"} color={"#5DBB9B"} size={18}/>
                    </View>
                </View>
                <View style={{flex:1}}/>
                <ButtonComponent title={"Add To Cart"} onPress={()=>{navigation.navigate("AddToCartScreen",{Bill:Bill})}}/>
            </View>
        </View>
    )
}