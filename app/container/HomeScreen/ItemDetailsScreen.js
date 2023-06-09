import React, {useEffect, useState} from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    ImageBackground, ScrollView,
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
import {SearchHeaderComponent} from "../Components/SearchHeaderComponent";


export const ItemDetailsScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const Products = [{title: "Processor"}, {title: "Motherboard"}, {title: "Memory"}, {title: "Monitor"}, {title: "Keyboard"}, {title: "Mouse"}, {title: "Graphic Card"}]
    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <View style={{
                height: 300,
                width: "100%",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                backgroundColor: Color.theme
            }}>
                <Image source={require('../../images/Banner.jpg')} resizeMode={"cover"}
                       style={{height: 300, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, width: "100%"}}/>
                <HeaderComponent theme={true} style={{backgroundColor: "transparent", position: "absolute",}}
                                 title={"Product Details"}/>
            </View>
            <ScrollView style={{paddingHorizontal: 10, flex: 1}}>
                <Text style={{
                    fontSize: 20,
                    fontFamily: Constants.fontFamilySemiBold,
                    includeFontPadding: false,
                    padding: 0,
                    color: Color.theme
                }}>Asus TUF</Text>
                <Text style={{fontSize: 14, width: "100%", fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>visual:
                    display unit, screen, display, video display, video display terminal.</Text>
                <Text style={{
                    fontSize: 20,
                    fontFamily: Constants.fontFamilySemiBold,
                    includeFontPadding: false,
                    padding: 0,
                    color: Color.theme
                }}>$100</Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{
                        fontSize: 14,
                        marginRight: 10,
                        fontFamily: Constants.fontFamilyRegular,
                        color: Color.theme
                    }}>Brand:</Text>
                    <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>Aoc</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{
                        fontSize: 14,
                        marginRight: 10,
                        fontFamily: Constants.fontFamilyRegular,
                        color: Color.theme
                    }}>Model:</Text>
                    <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>C24G1</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{
                        fontSize: 14,
                        marginRight: 10,
                        fontFamily: Constants.fontFamilyRegular,
                        color: Color.theme
                    }}>Resolution:</Text>
                    <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>1920 x
                        1080</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{
                        fontSize: 14,
                        marginRight: 10,
                        fontFamily: Constants.fontFamilyRegular,
                        color: Color.theme
                    }}>Screen Size:</Text>
                    <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>24”</Text>
                </View>


            </ScrollView>
            <View style={{flex: 1}}/>
            <ButtonComponent onPress={()=>{navigation.navigate("PcBuildScreen")}} Style={{width: "50%", marginBottom: 20, alignSelf: "center", borderRadius: 10}}
                             title={"Add To Build"}/>
        </View>
    )
}




