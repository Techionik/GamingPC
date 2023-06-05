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
import {ServiceComponent} from "../Components/ServiceComponent";


export const HomeScreen = () => {
    const userInfo = useSelector(state => state?.user?.userInfo)
    const [Loading,serLoading]=useState(false)
    const [data,setData]=useState([])
    const navigation = useNavigation()
    const services = [{
        title: "Washing & Iron",
        image: require('../../images/washingMachine.png'),
        navigation: "AddOrderScreen"
    }, {title: "Ironing", image: require('../../images/iron.png'), navigation: "AddOrderScreen"}, {
        title: "Dry Cleaning",
        image: require('../../images/dry-cleaning.png'),
        navigation: "AddOrderScreen"
    }]
    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        serLoading(true)
        const dummy = []
        firestore()
            .collection('Orders')
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
                    }}>{`Hi ${userInfo?.First_Name}!`}</Text>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: Constants.fontFamilyRegular,
                        color: "#fff"
                    }}>{"Hope You Are Doing Well"}</Text>
                </View>
            </View>
            <View style={{margin: 10,}}>
                <View style={{flex:0.2}}>
                <ImageSliderComponent/>
                </View>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                paddingTop: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <Text style={{fontSize:16,marginLeft:20,marginBottom:10,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Services</Text>

                <View>
                    <FlatList showsHorizontalScrollIndicator={false} style={{marginLeft:20,}} horizontal={true} data={services} renderItem={({item,index})=>
                        <ServiceComponent item={item}/>
                    }/>
                </View>
                <Text style={{fontSize:16,marginLeft:20,includeFontPadding:false,padding:0,marginVertical:10,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Today's Orders</Text>
                <FlatList style={{flex:1}} contentContainerStyle={{paddingBottom:20,marginHorizontal:20}} refreshing={Loading} onRefresh={()=>{GetData()}} showsVerticalScrollIndicator={false} ListEmptyComponent={
                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#000"}}>You Have No
                            Orders Yet..!</Text>
                    </View>} sstyle={{marginHorizontal:10,flex:1}}  data={data} renderItem={({item,index})=>
                    item?.Details?.Date_Time===moment().format("DD-MMM-YYYY")?
                        <ShortOrderComponent onPress={()=>{navigation.navigate("OrdersScreen")}} item={item}/>
                       :null
                }/>
            </View>
        </ScrollView>
    )
}

