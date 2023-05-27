import React from "react";
import {Text, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {ButtonComponent} from "../Components/ButtonComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/user/actions";
import {useNavigation} from "@react-navigation/native";


export const ProfileScreen = () => {
    const userInfo = useSelector(state => state?.user?.userInfo)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent back={false} title={"Profile"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>

                <View style={{padding: 10, backgroundColor: "#fff", borderRadius: 15}}>
                    <RowComponent title1={"First Name"} title2={userInfo?.First_Name}/>
                    <RowComponent title1={"Last Name"} title2={userInfo?.Last_Name}/>
                    <RowComponent title1={"Phone Number"} title2={userInfo?.PhoneNumber}/>
                </View>
                <View style={{flex: 1}}/>
                <ButtonComponent onPress={() => {
                    dispatch(actions.loginSuccess(undefined))
                    navigation.replace("SplashContainer")
                }} title={"Log Out"}/>
            </View>
        </View>
    )
}
export const RowComponent = ({title1, title2, color}) => {
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={{
                fontSize: 18,
                fontFamily: Constants.fontFamilyBold,
                color: "#000",
            }}>{title1}</Text>
            <View style={{flex: 1}}/>
            <Text style={{
                fontSize: 18,
                fontFamily: Constants.fontFamilyRegular,
                color: color ? color : "#000",
            }}>{title2}</Text>
        </View>
    )
}