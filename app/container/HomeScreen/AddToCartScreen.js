import React, {useEffect, useState} from "react";
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Color, Constants} from "../../common";
import {ButtonComponent} from "../Components/ButtonComponent";
import {TextFieldComponent} from "../Components/TextFieldComponent";
import {CartFieldComponent} from "../Components/CartFieldComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import firestore from "@react-native-firebase/firestore";
import {toast} from "../../Omni";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/user/actions";
import moment from "moment";
import {useNavigation} from "@react-navigation/native";
import {OrderComponent} from "./OrdersScreen";


export const AddToCartScreen = (props) => {
    const Bill = props?.route?.params?.bill
    const ServiceType = props?.route?.params?.bill?.ServiceType
    const DeliveryTime = props.route?.params?.DeliveryTime
    const userInfo = useSelector(state => state?.user?.userInfo)
    const CurrentAddress = useSelector(state => state?.user?.currentAddress)
    const DeliveryAddress = useSelector(state => state?.user?.deliveryAddress)
    const [cart, setCart] = useState([])
    const [uniqueId, setUniqueId] = useState([])
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        const timestamp = new Date().getTime(); // Get current timestamp in milliseconds
        const uniqueId = Math.random().toString(36).substring(2); // Generate a random string
        setUniqueId(uniqueId.slice(0,4) + timestamp.toString().slice(0,4))
        firestore()
            .collection('Users')
            .doc(userInfo?.userId)
            .get()
            .then(res => {
                const data = res.data()
                dispatch(actions.loginSuccess({...data, userId: res.id}))
                setCart(data?.Cart)
            })
    }, [])
    const Param = {
        Details: {
            Order_Id: uniqueId,
            UserId: userInfo?.userId,
            User_Name: userInfo?.First_Name,
            Date_Time: DeliveryTime,
            Pick_Up_Address: CurrentAddress,
            Delivery_Address: DeliveryAddress,
            Service_Type: ServiceType,
        },
        Status: "pending",
        Items: Bill?.cartItems, Total: Bill?.total
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent title={"Payment Screen"}/>
            </View>
            <View  style={{
                flex:1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <OrderComponent item={Param}/>
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
                        .collection('Orders')
                        .doc(uniqueId)
                        .set(Param)
                        .then(() => {
                            navigation.navigate("OrdersScreen")
                            toast('OrderPlace');
                        });
                }} title={"Add To Cart"}/>
            </View>
        </ScrollView>
    )
}