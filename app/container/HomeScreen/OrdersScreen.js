import React, {useEffect, useState} from "react";
import {
    ActivityIndicator,
    Button,
    FlatList,
    Image,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {Color, Constants} from "../../common";

import {useNavigation} from "@react-navigation/native";

import {useDispatch} from "react-redux";
import Input from "../Components/input/Input";
import InputBasic from "../Components/input/InputBasic";
import {FieldComponent} from "../Components/FieldComponent";
import {ButtonComponent} from "../Components/ButtonComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {HeaderComponent} from "../Components/HeaderComponent";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export const OrdersScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const Products = [{title: "Processor"}, {title: "Motherboard"}, {title: "Memory"}, {title: "Monitor"}, {title: "Keyboard"}, {title: "Mouse"}, {title: "Graphic Card"}]
    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <HeaderComponent title={"Orders"}/>
            <View style={{flex:1}}>
                <FlatList showsVerticalScrollIndicator={false} style={{marginTop: 20, paddingBottom:50,marginHorizontal: 20}}
                          data={Products} renderItem={({item, index}) =>
                    <BuildComponent item={item}/>
                }/>
            </View>
        </View>
    )}
export const BuildComponent = ({item, image}) => {
    const [selected, setSelected] = useState(false)
    const navigation=useNavigation()
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate("IndividualOrderDetailScreen")}} style={{
            backgroundColor: "rgba(177,184,185,0.2)",
            marginVertical: 15,
            borderRadius:10,
            padding:10
        }}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{
                    fontSize: 14,
                    marginRight: 10,
                    fontFamily: Constants.fontFamilyBold,
                    color: Color.theme
                }}>Order ID:</Text>
                <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>#5676767</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{
                    fontSize: 14,
                    marginRight: 10,
                    fontFamily: Constants.fontFamilyBold,
                    color: Color.theme
                }}>Date:</Text>
                <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>05 June, 2023</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{
                    fontSize: 14,
                    marginRight: 10,
                    fontFamily: Constants.fontFamilyBold,
                    color: Color.theme
                }}>Delivery Address:</Text>
                <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>CB-136 Lalazar Lahore</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{
                    fontSize: 14,
                    marginRight: 10,
                    fontFamily: Constants.fontFamilyBold,
                    color: Color.theme
                }}>Payment Method:</Text>
                <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>Credit Card</Text>
            </View>
        </TouchableOpacity>
    )
}


