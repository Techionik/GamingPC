import {useNavigation} from "@react-navigation/native";
import {Image, Text, TouchableOpacity} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";
import {useDispatch} from "react-redux";
import {SaveServiceProvider} from "../../redux/user/actions";


export const ServiceComponent = ({item, Style}) => {
    const navigation = useNavigation()
    const dispatch=useDispatch()
    return (
        <TouchableOpacity onPress={() => {
            dispatch(SaveServiceProvider(item?.title))
            navigation.navigate(item.navigation)
        }} style={[{
            backgroundColor: "#fff",
            borderRadius: 10,
            justifyContent: "center",
            height: 150,
            width: 150,
            marginRight:10,
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