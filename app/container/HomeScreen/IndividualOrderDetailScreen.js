import React, {useEffect, useState} from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {Color, Constants} from "../../common";

import {useNavigation} from "@react-navigation/native";

import {useDispatch} from "react-redux";
import Input from "../Components/input/Input";
import InputBasic from "../Components/input/InputBasic";
import {FieldComponent} from "../Components/FieldComponent";
import {ButtonComponent} from "../Components/ButtonComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {HeaderComponent} from "../Components/HeaderComponent";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {BuildComponent} from "./OrdersScreen";


export const IndividualOrderDetailScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const Products = [{title: "Processor"}, {title: "Motherboard"}, {title: "Memory"}, {title: "Monitor"}, {title: "Keyboard"}, {title: "Mouse"}, {title: "Graphic Card"}]
    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <HeaderComponent title={"Order Details"}/>
            <View style={{padding: 15}}>
                <BuildComponent/>
                <DetailComponent/>
                <DetailComponent/>
                <DetailComponent/>
                <View style={{width: "100%", borderWidth: 0.5, borderColor: Color.theme, marginVertical: 10}}/>
                <RowComponent title1={"Sub Total Product:"} title2={"$125.50"}/>
                <RowComponent title1={"Shipping: "} title2={"$20"}/>
                <View style={{width: "100%", borderWidth: 0.5, borderColor: Color.theme, marginVertical: 10}}/>
                <RowComponent title1={"Total :"} title2={"$140.50"}/>
            </View>
        </View>
    )
}

const DetailComponent = () => {
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 15, color: Color.theme, fontFamily: Constants.fontFamilyBold}}>Processor</Text>
                <Text style={{fontSize: 15, color: "#fff", fontFamily: Constants.fontFamilyRegular}}>Core, Xeon,
                    Pentium</Text>
            </View>
            <Text style={{fontSize: 15, color: Color.theme, fontFamily: Constants.fontFamilyBold}}>$120</Text>
        </View>
    )
}
const RowComponent = ({title1, title2}) => {
    return (
        <View style={{flexDirection: "row",justifyContent:"space-between", alignItems: "center"}}>
            <Text style={{fontSize: 15, color: "#fff", fontFamily: Constants.fontFamilyRegular}}>{title1}</Text>
            <Text style={{fontSize: 15, color: Color.theme, fontFamily: Constants.fontFamilyBold}}>{title2}</Text>
        </View>
    )
}


