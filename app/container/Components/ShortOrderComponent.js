import {Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import {RowComponent} from "../HomeScreen/OrdersScreen";
import React from "react";

export const ShortOrderComponent=({item,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{marginTop: 10, backgroundColor: "#f5f5f5", borderRadius: 15}}>
            <View  style={{padding: 10, backgroundColor: "#fff", borderRadius: 15}}>
                <Text style={{
                    fontSize: 16,
                    fontFamily: Constants.fontFamilyBold,
                    color: Color.primary
                }}>Order Id: {item?.Details?.Order_Id}</Text>
                <Text style={{
                    fontSize: 14,
                    fontFamily: Constants.fontFamilyBold,
                    color: "red"
                }}>{item?.Details?.Service_Type}</Text>
                <RowComponent title1={"Date"} title2={item?.Details?.Date_Time}/>
                <RowComponent title1={"Status"} title2={item?.Status} color={"red"}/>
            </View>
        </TouchableOpacity>
    )
}