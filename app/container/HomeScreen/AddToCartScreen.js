import React, {useEffect} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Color, Constants} from "../../common";
import {ButtonComponent} from "../Components/ButtonComponent";
import {TextFieldComponent} from "../Components/TextFieldComponent";
import {CartFieldComponent} from "../Components/CartFieldComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import firestore from "@react-native-firebase/firestore";
import {toast} from "../../Omni";
import {useSelector} from "react-redux";


export const AddToCartScreen = (props) => {
    const Bill = props?.route?.params?.Bill
    const userInfo = useSelector(state => state?.user?.userInfo)
    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent title={"Payment Screen"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <View style={{padding: 10, backgroundColor: "#fff", borderRadius: 15}}>

                    {Bill.cartItems && Bill.cartItems.map((item, index) => (
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{
                                fontSize: 18,
                                flex: 1,
                                fontFamily: Constants.fontFamilyRegular,
                                color: Color.primary
                            }}>{item?.product}</Text>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: Constants.fontFamilyBold,
                                color: Color.primary
                            }}>{item?.price} PKR</Text>
                        </View>))}
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
                        }}>Delivery Fee</Text>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: Constants.fontFamilyBold,
                            color: Color.primary
                        }}>{"200"} PKR</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",

                    }}>
                        <Text style={{
                            fontSize: 18,
                            flex: 1,
                            fontFamily: Constants.fontFamilyRegular,
                            color: Color.primary
                        }}>Total</Text>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: Constants.fontFamilyBold,
                            color: Color.primary
                        }}>{Bill?.total + 200} PKR</Text>
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
                <ButtonComponent onPress={() => {

                    firestore()
                        .collection('Users')
                        .doc(userInfo?.userId)
                        .update({Items: Bill?.cartItems, Cart: Bill?.total})
                        .then(() => {
                            console.log('updated!');
                        });
                    firestore()
                        .collection('Orders')
                        .add({Items: Bill?.cartItems, Total: Bill?.total})
                        .then(() => {
                            toast('OrderPlace');
                        });
                }} title={"Add To Cart"}/>
            </View>
        </View>
    )
}