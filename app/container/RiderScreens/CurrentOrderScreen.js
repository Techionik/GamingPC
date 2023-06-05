import React, {useEffect, useState} from "react";
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";

import firestore from "@react-native-firebase/firestore";
import {ShortOrderComponent} from "../Components/ShortOrderComponent";
import {OrderComponent} from "../HomeScreen/OrdersScreen";
import {RowComponent} from "../HomeScreen/ProfileScreen";
import {ButtonComponent} from "../Components/ButtonComponent";
import {toast} from "../../Omni";



export const CurrentOrderScreen = (props) => {
    const Details=props?.route?.params?.orderDetails
    const [CustomerDetails,SetCustomerDetails]=useState("")
    useEffect(()=>{
        firestore()
             .collection('Users')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot.id === Details.Details.UserId) {
                        SetCustomerDetails(documentSnapshot.data())
                    }
                });
            })
    },[])
    return (
        <ScrollView contentContainerStyle={{flex:1}} style={{ backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <View>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff"
                    }}>{`Orders Details`}</Text>
                </View>
            </View>

            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <Text style={{fontSize:18,marginVertical:10,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Order Details</Text>

                <OrderComponent item={Details}/>
                {Details?.PaymentStatus&&
                    <>
                    <Text style={{fontSize:18,marginVertical:10,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Payment Details</Text>
                    <View style={{backgroundColor: "#fff", borderRadius: 10, padding: 10}}>
                    <RowComponent title1={"Payment Type"} title2={Details?.PaymentType}/>
                    <RowComponent title1={"Status"} title2={Details?.PaymentStatus}/>
                </View></>}
                <Text style={{fontSize:18,marginVertical:10,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Customer Details</Text>
                <View style={{backgroundColor:"#fff",borderRadius:10,padding:10}}>
                    <RowComponent title1={"Name"} title2={CustomerDetails?.First_Name+" "+CustomerDetails?.Last_Name} />
                    <RowComponent title1={"Phone Number"} title2={CustomerDetails?.PhoneNumber} />
                    <RowComponent title1={"Address"} title2={CustomerDetails?.Address} />
                </View>
                <View style={{flex:1}}/>
                <ButtonComponent title={"Picked Up"} onPress={()=>{
                    firestore()
                        .collection('Orders')
                        .doc(Details?.Details?.Order_Id)
                        .update({Status:"Picked Up"})
                        .then(() => {
                            toast('Picked Up');
                        });
                }}/>
            </View>
        </ScrollView>
    )
}