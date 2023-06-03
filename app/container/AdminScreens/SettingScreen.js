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
import {AddRiderScreen} from "./AddRiderScreen";

export const SettingScreen = (props) => {
    const userInfo = useSelector(state => state?.user?.userInfo)
    const navigation = useNavigation()
    const [data,setData]=useState([])

    return (
        <ScrollView style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <View>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff"
                    }}>{`Settings`}</Text>

                </View>
            </View>

            <View style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingTop: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <View style={{alignItems:"center",justifyContent:"center",}}>
                    <Text style={{fontFamily:Constants.fontFamilyBold,color:"#000",fontSize:20}}>{userInfo?.First_Name}</Text>
                    <Text style={{fontFamily:Constants.fontFamilyRegular,color:"#000",fontSize:16}}>{userInfo?.PhoneNumber}</Text>
                    <Text style={{fontFamily:Constants.fontFamilyBold,includeFontPadding:false,padding:0,color:"#fff",borderRadius:30,paddingVertical:5,paddingHorizontal:20,backgroundColor:Color.primary,fontSize:16}}>{userInfo?.Role}</Text>
                </View>
                <View style={{marginTop:20}}>
                    <Title title={"Profile"}/>
                    <RowComponent onPress={()=>{navigation.navigate("ProfileScreen")}} title={"Profile"}/>
                    <Title title={"Manage Orders"}/>
                    <RowComponent onPress={()=>{navigation.navigate("OrderStatus")}} title={"Order Status"}/>
                    <RowComponent onPress={()=>{navigation.navigate("CustomersScreen")}} title={"Customers"}/>
                    <Title title={"Services"}/>
                    <RowComponent onPress={()=>{navigation.navigate("AddServicesScreen")}} title={"Services"}/>
                    <Title title={"Riders"}/>
                    <RowComponent onPress={()=>{navigation.navigate("AddRiderScreen")}} title={"Add Rider"}/>
                    <Title title={"Other Settings"}/>
                    <RowComponent onPress={()=>{navigation.navigate("TermsConditionsScreen")}} title={"Terms & Conditions"}/>
                    <RowComponent onPress={()=>{navigation.navigate("AboutUsScreen")}} title={"About Us"}/>

                </View>

        </View>
        </ScrollView>
    )
}


const Title=({title})=>{
    return(
        <View style={{backgroundColor:"#F5FAFE",paddingVertical:10,paddingLeft:30}}>
            <Text style={{fontSize:16,fontFamily:Constants.fontFamilyRegular,color:"#979797"}}>{title}</Text>
        </View>
    )
}

const RowComponent=({title,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{flexDirection:"row",paddingRight:10,alignItems:"center",backgroundColor:"#fff",paddingVertical:10,paddingLeft:30}}>
            <Text style={{fontSize:16,flex:1,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyRegular,color:Color.primary}}>{title}</Text>
            <AntDesign name={"right"} color={Color.primary} size={20}/>
        </TouchableOpacity>
    )
}