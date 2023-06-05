import React, {useEffect, useState} from "react";
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import ImageSliderComponent from "../Components/ImageSliderComponent";
import {useSelector} from "react-redux";
import moment from "moment/moment";
import {RowComponent} from "./OrdersScreen";
import firestore from "@react-native-firebase/firestore";
import {ShortOrderComponent} from "../Components/ShortOrderComponent";


export const DeliveryScreen = () => {
    const userInfo = useSelector(state => state?.user?.userInfo)
    const [Loading,serLoading]=useState(false)
    const [data,setData]=useState([])
    const navigation = useNavigation()

    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        serLoading(true)
        const dummy = []
        firestore()
            .collection('Orders')
            .where("Status","==","Ready to Dispatch")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(res => {
                    serLoading(false)
                    const data = res.data()
                    dummy.push(data)
                });
                setData(dummy)
            }).catch(err => {
            console.log(err)
            serLoading(false)
        })
    }


    return (
        <ScrollView contentContainerStyle={{flex:1}} style={{ backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <View>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff"
                    }}>{`Orders For Pick Up`}</Text>
                </View>
            </View>

            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>

                <FlatList data={data} refreshing={Loading} onRefresh={GetData}  renderItem={({item,index})=>
                    <ShortOrderComponent item={item} onPress={()=>{navigation.navigate("DeliverCurrentOrder",{orderDetails:item})}} />
                }/>
            </View>
        </ScrollView>
    )
}