import React from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Color, Constants} from "../../common";
import {ButtonComponent} from "../Components/ButtonComponent";
import {TextFieldComponent} from "../Components/TextFieldComponent";
import {CartFieldComponent} from "../Components/CartFieldComponent";


export const AddToCartScreen = () => {
    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <AntDesign name={"left"} size={30} color={"#fff"} style={{marginRight: 10}}/>
                <Text style={{
                    fontSize: 24,
                    fontFamily: Constants.fontFamilyBold,
                    color: "#fff",
                    includeFontPadding: false,
                    padding: 0,
                }}>{"Cart Screen"}</Text>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <View style={{padding: 10, backgroundColor: "#fff", borderRadius: 15}}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{
                            fontSize: 18,
                            flex: 1,
                            fontFamily: Constants.fontFamilyRegular,
                            color: Color.primary
                        }}>Sub Total</Text>
                        <Text style={{fontSize: 18, fontFamily: Constants.fontFamilyBold, color: Color.primary}}>PKR
                            200</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{
                            fontSize: 18,
                            flex: 1,
                            fontFamily: Constants.fontFamilyRegular,
                            color: Color.primary
                        }}>Deliver/Pick Up</Text>
                        <Text style={{fontSize: 18, fontFamily: Constants.fontFamilyBold, color: Color.primary}}>PKR
                            200</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 10,
                        paddingTop: 10,
                        borderTopWidth: 1,
                        borderColor: Color.primary
                    }}>
                        <Text style={{
                            fontSize: 18,
                            flex: 1,
                            fontFamily: Constants.fontFamilyRegular,
                            color: Color.primary
                        }}>Total</Text>
                        <Text style={{fontSize: 18, fontFamily: Constants.fontFamilyBold, color: Color.primary}}>PKR
                            200</Text>
                    </View>
                </View>
                <Text style={{
                    fontSize: 18,
                    fontFamily: Constants.fontFamilyBold,
                    color: Color.primary,
                    marginVertical: 10
                }}>Payment Method</Text>
                <View>
                    <FlatList
                        data={[{image: require('../../images/plus.png')}, {image: require('../../images/creditcard.png')}, {image: require('../../images/unnamed.png')}, {image: require('../../images/download.png')}]}
                        horizontal={true} renderItem={({item, index}) =>
                        <TouchableOpacity
                            style={{padding: 5, backgroundColor: "#fff", marginRight: 10, borderRadius: 10}}>
                            <Image source={item?.image} style={{height: 40, width: 40}}/>
                        </TouchableOpacity>
                    }/>
                </View>
                <CartFieldComponent title={"Name On Card"}/>
                <CartFieldComponent title={"Card Number"}/>
                <CartFieldComponent title={"Date"}/>
                <CartFieldComponent title={"CVC"}/>
                <View style={{flex: 1}}/>
                <ButtonComponent title={"Add To Cart"}/>
            </View>
        </View>
    )
}