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

export const TermsConditionsScreen = (props) => {
    const userInfo = useSelector(state => state?.user?.userInfo)
    const navigation = useNavigation()
    const [data,setData]=useState([])

    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <View>
                    <Text style={{
                        fontSize: 24,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff"
                    }}>{`Terms & Conditions`}</Text>

                </View>
            </View>

            <View style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingTop: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>



        </View>
        </View>
    )
}
