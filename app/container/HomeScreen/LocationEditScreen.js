import React, {useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {ButtonComponent} from "../Components/ButtonComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {RowComponent} from "./OrdersScreen";
import {CartFieldComponent} from "../Components/CartFieldComponent";
import {useDispatch} from "react-redux";
import {currentAddress, deliveryAddress} from "../../redux/user/actions";


export const LocationEditScreen = (props) => {
    const [address, setAddress] = useState("")
    const navigation = useNavigation()
    const dispatch=useDispatch()
    const back=props.route?.params?.From

        return(
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent title={"Edit Location"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#fff",
                paddingTop: 20,
                paddingHorizontal: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <Image source={require('../../images/PickLocation.jpg')}
                       style={{aspectRatio: 1.5, height: undefined, width: "100%"}}/>

                <CartFieldComponent value={address} onChangeText={(text) => {
                    setAddress(text)
                }} title={"Enter Your Complete Location here...."}/>


            </View>
            <ButtonComponent onPress={() => {
                if(back==="Current"){
                dispatch(currentAddress(address))
                    navigation.pop()
                }
                else {
                    dispatch(deliveryAddress(address))
                    navigation.pop()
                }

            }} Style={{backgroundColor: Color.primary}} TitleStyle={{color: "#fff"}} title={"Save"}/>
        </View>
    )
}
