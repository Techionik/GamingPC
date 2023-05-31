import React from "react";
import {Text, TextInput, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {ButtonComponent} from "../Components/ButtonComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/user/actions";
import {useNavigation} from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import {toast} from "../../Omni";


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
                backgroundColor: "#f5f5f5",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>

                <View style={{padding: 10,}}>
                    <ProfileFieldComponent title={"First Name"} placeholder={userInfo?.First_Name}/>
                    <ProfileFieldComponent title={"Last Name"} placeholder={userInfo?.Last_Name}/>
                    <ProfileFieldComponent title={"Phone Number"} placeholder={userInfo?.Phone}/>
                    <ProfileFieldComponent title={"Address"} placeholder={userInfo?.Address}/>
                </View>
                <View style={{flex: 1}}/>

                <ButtonComponent onPress={() => {
                    dispatch(actions.logoutUser(undefined))
                    navigation.replace("SplashContainer")
                }} title={"Log Out"}/>
                <ButtonComponent Style={{backgroundColor:"rgba(253,2,2,0.68)"}} TitleStyle={{color:"#fff"}}  onPress={() => {
                   alert(JSON.stringify(userInfo.userId))
                    return
                    firestore()
                        .collection('Users')
                        .doc(userInfo?.userId)
                        .delete()
                        .then(() => {
                            toast('User deleted!');
                            dispatch(actions.logoutUser(undefined))
                            navigation.replace("SplashContainer")
                        });
                }} title={"Delete Account"}/>
            </View>
        </View>
    )
}

const ProfileFieldComponent=({title,value,onChangeText,placeholder,disable})=>{
    return(
        <View  style={{marginTop:15}}>
            <Text style={{fontSize:16,fontFamily:Constants?.fontFamilyRegular,color:"#000"}}>{title}</Text>
            <TextInput editable={false} style={{padding:0,paddingVertical:7,paddingLeft:20,backgroundColor:"#fff",borderRadius:10,color:"#000"}} placeholderTextColor={"#000"} placeholder={placeholder} value={value} onChangeText={onChangeText}/>
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