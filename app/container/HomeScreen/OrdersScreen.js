import React from "react";
import {Text, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {ButtonComponent} from "../Components/ButtonComponent";
import {HeaderComponent} from "../Components/HeaderComponent";


export const OrdersScreen = () => {
    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
               <HeaderComponent back={false} title={"Orders"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>

                <View style={{padding: 10, backgroundColor: "#fff", borderRadius: 15}}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: Constants.fontFamilyBold,
                            color: Color.primary
                        }}>#12344</Text>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: Constants.fontFamilyRegular,
                            color: "red"
                        }}>Washing & Ironing</Text>
                    <RowComponent title1={"Date & Time"} title2={"11 Jan 2022 10:00pm"}/>
                    <RowComponent title1={"Status"} title2={"Confirmed"} color={"red"}/>
                    <RowComponent title1={"Pick Up"} title2={"11 Jan 2022 10:00pm"}/>
                    <RowComponent title1={"Pick Up Address"} title2={"Johar Town"}/>
                    <RowComponent title1={"Delivery Address"} title2={"Johar Town"}/>
                    <View style={{height:1,marginVertical:10,borderBottomWidth:1,borderColor:Color.primary,borderStyle:"dashed"}}/>
                    <RowComponent title1={"Total"} title2={"PKR 200"}/>
                    <RowComponent title1={"Delivery Charges"} title2={"PKR 100"}/>
                    <RowComponent title1={"Total"} color={"red"} title2={"PKR 300"}/>
                </View>

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