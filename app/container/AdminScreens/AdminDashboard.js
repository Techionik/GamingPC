import React, {useEffect, useState} from "react";
import {FlatList, Image, ProgressBarAndroid, ScrollView, Text, TouchableOpacity, View} from "react-native";
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
import {RowComponent} from "../HomeScreen/OrdersScreen";
import moment from "moment";
import {ShortOrderComponent} from "../Components/ShortOrderComponent";
import {ServiceComponent} from "../Components/ServiceComponent";

export const AdminDashboard = () => {
    const userInfo = useSelector(state => state?.user?.userInfo)
    const navigation = useNavigation()
    const [data,setData]=useState([])
    const [Loading,serLoading]=useState(false)
    const services = [{
        title: "Washing & Iron",
        image: require('../../images/washingMachine.png'),
        navigation: "PendingOrders",
    }, {title: "Ironing", image: require('../../images/iron.png'), navigation: "PendingOrders"}, {
        title: "Dry Cleaning",
        image: require('../../images/dry-cleaning.png'),
        navigation: "PendingOrders"
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
        <ScrollView contentContainerStyle={{flex:1}} style={{flex: 1, backgroundColor: Color.primary}}>
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
            <Text style={{fontFamily:Constants.fontFamilyBold,color:"#fff",marginLeft:20}}>Orders Status</Text>
            <View style={{height:100,flexDirection:"row",alignItems:"center",backgroundColor:"#fff",margin:10,borderRadius:20}}>
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
                paddingTop: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <Text style={{fontSize:16,marginLeft:20,includeFontPadding:false,padding:0,marginBottom:10,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Services</Text>

                <View>
                <FlatList showsHorizontalScrollIndicator={false} style={{marginLeft:20,}} horizontal={true} data={services} renderItem={({item,index})=>
                    <ServiceComponent item={item}/>
                }/>
                </View>
                <Text style={{fontSize:16,marginLeft:20,includeFontPadding:false,padding:0,marginVertical:10,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Today's Orders</Text>
                <FlatList style={{marginHorizontal:20}} contentContainerStyle={{paddingBottom:20}} refreshing={Loading} onRefresh={()=>{GetData()}} showsVerticalScrollIndicator={false} ListEmptyComponent={
                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#000"}}>You Have No
                            Orders Yet..!</Text>
                    </View>} sstyle={{marginHorizontal:10,flex:1}}  data={data} renderItem={({item,index})=>
                    item?.Details?.Date_Time===moment().format("DD-MMM-YYYY")?
                    <ShortOrderComponent item={item} onPress={()=>{navigation.navigate("PendingOrders")}} />:null
                }/>
            </View>
        </ScrollView>
    )
}