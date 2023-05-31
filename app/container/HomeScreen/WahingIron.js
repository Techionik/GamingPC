import React, {useEffect} from "react";
import {ButtonComponent} from "../Components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {Color, Constants} from "../../common";

import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {HeaderComponent} from "../Components/HeaderComponent";
import {toast} from "../../Omni";

export const WashingIron = () => {
    const navigation = useNavigation();
    const list = [
        {
            title: "Shalwar Kameez",
            Price: "100",
            image: require('../../images/kurta.png')
        },
        {
            title: "Shirt",
            Price: "100",
            image: require('../../images/shirt.png')
        },
        {
            title: "Bottom",
            Price: "100",
            image: require('../../images/jeans.png')
        },
        {
            title: "suite",
            Price: "100",
            image: require('../../images/blazer.png')
        }
    ];

    const [order, setOrder] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const totalBill = cartItems.reduce((total, item) => total + item.price, 0);

    const updateCartItems = (item, quantity) => {
        const existingItem = cartItems.find((cartItem) => cartItem.product === item.title);

        if (existingItem) {
            if (quantity === 0) {
                // Remove item from cart
                const updatedCartItems = cartItems.filter((cartItem) => cartItem.product !== item.title);
                setCartItems(updatedCartItems);
            } else {
                // Update quantity of existing item in cart
                const updatedCartItems = cartItems.map((cartItem) => {
                    if (cartItem.product === item.title) {
                        return {...cartItem, quantity};
                    }
                    return cartItem;
                });
                setCartItems(updatedCartItems);
            }
        } else {
            // Add new item to cart
            const newItem = {product: item.title, price: quantity * parseInt(item.Price), quantity};
            setCartItems([...cartItems, newItem]);
        }
    };
    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent title={"Washing & Iron"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                paddingTop: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <FlatList
                    data={list}
                    renderItem={({item}) => <DetailComponent item={item} setValueBack={updateCartItems}/>}
                />
            </View>
            <View style={{marginTop: 10}}>
                {cartItems.map((item, index) => (
                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Text style={{fontFamily: Constants.fontFamilyBold, color: "#fff"}}>{item?.product}</Text>
                        <Text style={{fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>{item?.price} PKR</Text>
                    </View>
                ))}
            </View>
            <View style={{
                flexDirection: "row",
                marginHorizontal: 10,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Text style={{fontFamily: Constants.fontFamilyBold, color: "#fff"}}>Total Bill:</Text>
                <Text style={{fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>{totalBill} PKR</Text>
            </View>
            <ButtonComponent
                onPress={() => {
                    if (cartItems.length > 0) {
                        navigation.navigate("LocationScreen", {bill: {total: totalBill, cartItems,ServiceType:"Washing & Iron"}});
                    } else {
                        toast("Select at least 1 item...")
                    }
                }}
                Style={{backgroundColor: Color.primary}}
                TitleStyle={{color: "#fff"}}
                title={"Done"}
            />
        </View>
    );
};

const DetailComponent = ({item, setValueBack}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cart, setcart] = useState(false)

    const handleAddToCart = () => {
        setcart(!cart)
        setValueBack(item, currentIndex);
    };

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                margin: 7,
                padding: 15,
                borderRadius: 15,
            }}
        >
            <Image
                source={item.image ? item.image : require('../../images/shirt.png')}
                style={{aspectRatio: 1, width: "10%", height: undefined}}
            />
            <View style={{flex: 1}}>
                <Text
                    style={{
                        fontSize: 16,
                        includeFontPadding: false,
                        padding: 0,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary,
                        marginLeft: 10,
                    }}
                >
                    {item?.title}
                </Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text
                        style={{
                            fontSize: 16,
                            includeFontPadding: false,
                            padding: 0,
                            fontFamily: Constants.fontFamilyBold,
                            color: "red",
                            marginLeft: 10,
                        }}
                    >
                        Price{" "}
                        <Text
                            style={{
                                fontFamily: Constants.fontFamilyRegular,
                                color: Color.primary,
                            }}>
                            {currentIndex * parseInt(item?.Price)} PKR
                        </Text>
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    width: "25%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <AntDesign
                    onPress={() => {
                        if (currentIndex > 0) {
                            setCurrentIndex(currentIndex - 1);
                        }
                    }}
                    name={"minus"}
                    color={"#fff"}
                    size={20}
                    style={{
                        padding: 5,
                        borderRadius: 30,
                        backgroundColor: Color.primary,
                    }}
                />
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: Constants.fontFamilyRegular,
                        color: Color.primary,
                    }}
                >
                    {currentIndex}
                </Text>
                <AntDesign
                    onPress={() => {
                        setCurrentIndex(currentIndex + 1);
                    }}
                    name={"plus"}
                    color={"#fff"}
                    size={20}
                    style={{
                        padding: 5,
                        borderRadius: 30,
                        backgroundColor: Color.primary,
                    }}
                />
            </View>
            <AntDesign onPress={handleAddToCart} name={"shoppingcart"} size={25} style={{marginLeft: 10}}
                       color={cart === true ? Color.primary : "red"}/>
        </View>
    );
};