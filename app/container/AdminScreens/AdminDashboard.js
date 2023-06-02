import React, {useEffect, useState} from "react";
import {FlatList, Image, ProgressBarAndroid, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import ImageSliderComponent from "../Components/ImageSliderComponent";
import {useDispatch, useSelector} from "react-redux";
import {SaveServiceProvider} from "../../redux/user/actions";
import * as actions from "../../redux/user/actions";
import * as Progress from 'react-native-progress';
import {PieChart} from "react-native-gifted-charts/src/PieChart";
import firestore from "@react-native-firebase/firestore";

export const AdminDashboard = () => {
    const userInfo = useSelector(state => state?.user?.userInfo)
    const navigation = useNavigation()
    const [data,setData]=useState([])
    const services = [{
        title: "Washing & Iron",
        image: require('../../images/washingMachine.png'),
        navigation: "PendingOrders",
    }, {title: "Iron", image: require('../../images/iron.png'), navigation: "PendingOrders"}, {
        title: "Dry Cleaning",
        image: require('../../images/dry-cleaning.png'),
        navigation: "PendingOrders"
    }]

    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        const dummy = []
        firestore()
            .collection('Orders')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(res => {
                    const data = res.data()
                        dummy.push(data)
                });
                setData(dummy)
            }).catch(err => {
            console.log(err)
        })
    }


    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
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
            <View style={{flex:0.2,flexDirection:"row",alignItems:"center",backgroundColor:"#fff",margin:20,borderRadius:20}}>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary
                    }}>{"Pending"}</Text>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary
                    }}>{data.filter(item=>item.Status==="pending").length}</Text>
                </View>
                <View style={{borderLeftWidth:0.5,height:"100%",justifyContent:"center",alignItems:"center",borderRightWidth:0.5,flex:1}}>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary
                    }}>{"Active"}</Text>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary
                    }}>{data.filter(item=>item.Status==="In Processing").length}</Text>
                </View>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary
                    }}>{"Ready"}</Text>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary
                    }}>{data.filter(item=>item.Status==="Ready to Dispatch").length}</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <ServiceComponent item={services[0]}/>
                    <ServiceComponent item={services[1]}/>
                </View>
                <ServiceComponent item={services[2]} Style={{marginTop: 10}}/>
            </View>
        </View>
    )
}
const ServiceComponent = ({item, Style}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <TouchableOpacity onPress={() => {
            dispatch(actions.SaveServiceProvider(item?.title))
            navigation.navigate(item.navigation)
        }} style={[{
            backgroundColor: "#fff",
            borderRadius: 10,
            justifyContent: "center",
            height: 170,
            width: 170,
            alignItems: "center",
        }, Style]}>
            <Image source={item.image} style={{height: 70, width: 70}}/>
            <Text style={{
                fontSize: 18,
                fontFamily: Constants.fontFamilyBold,
                color: Color.primary,
                marginTop: 5
            }}>{item.title}</Text>
        </TouchableOpacity>
    )
}