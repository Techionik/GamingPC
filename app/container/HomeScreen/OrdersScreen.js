import React, {useEffect, useState} from "react";
import {FlatList, Text, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {ButtonComponent} from "../Components/ButtonComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import firestore from "@react-native-firebase/firestore";
import {useSelector} from "react-redux";


export const OrdersScreen = () => {
        const userInfo = useSelector(state => state?.user?.userInfo)
    const [data,setData]=useState([])
        useEffect(() => {
            const dummy=[]
            firestore()
                .collection('Orders')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(res => {
                        const data = res.data()
                        dummy.push(data)
                        setData(dummy)

                    });
                })
        }, [])
        return (
            <View style={{flex: 1, backgroundColor: Color.primary}}>
                <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                    <HeaderComponent back={false} title={"Orders"}/>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: "#dfdfdf",
                    paddingHorizontal:20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                }}>
                    <FlatList data={data} contentContainerStyle={{paddingTop:10,paddingBottom:20}} renderItem={({item,index})=>
                        <View style={{padding: 10,marginTop:10, backgroundColor: "#fff", borderRadius: 15}}>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: Constants.fontFamilyBold,
                                color: Color.primary
                            }}>Order Id: {item?.Details?.OrderID}</Text>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: Constants.fontFamilyRegular,
                                color: "red"
                            }}>{item?.Details?.Service_Type}</Text>
                            <RowComponent title1={"Date & Time"} title2={item?.Details?.Date_Time}/>
                            <RowComponent title1={"Status"} title2={item?.Details?.Status} color={"red"}/>
                            <RowComponent title1={"Pick Up Address"} title2={item?.Details?.PickUP}/>
                            <RowComponent title1={"Delivery Address"} title2={item?.Details?.Delivery}/>
                            <View style={{
                                height: 1,
                                marginVertical: 10,
                                borderBottomWidth: 1,
                                borderColor: Color.primary,
                                borderStyle: "dashed"
                            }}/>
                            <RowComponent title1={"Total"} title2={item?.Total}/>
                            <RowComponent title1={"Delivery Charges"} title2={"PKR 100"}/>
                            <RowComponent title1={"Total"} color={"red"} title2={item?.Total+100}/>
                        </View>
                    }/>


                </View>
            </View>
        )
    }
export const RowComponent = ({title1, title2,color}) => {
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={{
                fontSize: 14,
                fontFamily: Constants.fontFamilyRegular,
                color: "#000",
            }}>{title1}</Text>
            <View style={{flex: 1}}/>
            <Text style={{
                fontSize: 14,
                fontFamily: Constants.fontFamilyBold,
                color:color?color: "#000",
            }}>{title2}</Text>
        </View>
    )
}