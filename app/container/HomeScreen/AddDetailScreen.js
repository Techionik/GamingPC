import React, {useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {ButtonComponent} from "../Components/ButtonComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {RowComponent} from "./OrdersScreen";


export const AddDetailScreen = () => {

    const navigation = useNavigation()
    const list = [{
        title: "Shalwar Kameez",
        Price: "100",
        image: require('../../images/kurta.png')
    }, {
        title: "Shirt",
        Price: "100",
        image: require('../../images/shirt.png')
    }, {
        title: "Bottom",
        Price: "100",
        image: require('../../images/jeans.png')
    }, {
        title: "suite",
        Price: "100",
        image: require('../../images/blazer.png')
    }]

    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent title={"Add Details"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                paddingTop: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <FlatList data={list} style={{flex: 1}} renderItem={({item, index}) =>
                    <DetailComponent item={item} setValueBack={(c) => {
                        console.log(c*(parseInt(item.Price)))
                    }}/>
                }/>

            </View>
            <ButtonComponent onPress={() => {
                navigation.navigate("LocationScreen")
            }} Style={{backgroundColor: Color.primary}} TitleStyle={{color: "#fff"}} title={"Done"}/>
        </View>
    )
}
const DetailComponent = ({item, setValueBack}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            margin: 7,
            padding: 15,
            borderRadius: 15
        }}>
            <Image source={item.image ? item.image : require('../../images/shirt.png')}
                   style={{aspectRatio: 1, width: "10%", height: undefined}}/>
            <View style={{flex: 1}}>
                <Text style={{
                    fontSize: 16,
                    includeFontPadding: false,
                    padding: 0,
                    fontFamily: Constants.fontFamilyBold,
                    color: Color.primary,
                    marginLeft: 10
                }}>{item?.title}</Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{
                        fontSize: 16,
                        includeFontPadding: false,
                        padding: 0,
                        fontFamily: Constants.fontFamilyBold,
                        color: "red",
                        marginLeft: 10
                    }}>Price <Text
                        style={{fontFamily: Constants.fontFamilyRegular, color: Color.primary}}>{item?.Price} PKR</Text></Text>
                </View>
            </View>
            <View style={{flexDirection: "row", width: "30%", justifyContent: "space-between", alignItems: "center"}}>
                <AntDesign onPress={() => {
                    if (currentIndex > 0) {
                        setValueBack(currentIndex - 1)
                        setCurrentIndex(currentIndex - 1)
                    }
                }} name={"minus"} color={"#fff"} size={20}
                           style={{padding: 5, borderRadius: 30, backgroundColor: Color.primary}}/>
                <Text style={{
                    fontSize: 18,
                    fontFamily: Constants.fontFamilyRegular,
                    color: Color.primary,
                }}>{currentIndex}</Text>
                <AntDesign onPress={() => {
                    if (currentIndex > 0) {
                        setCurrentIndex(currentIndex + 1)
                        setValueBack(currentIndex + 1)
                    } else {
                        setValueBack(1)
                        setCurrentIndex(1)
                    }
                }} name={"plus"} color={"#fff"} size={20}
                           style={{padding: 5, borderRadius: 30, backgroundColor: Color.primary}}/>
            </View>
        </View>
    )
}