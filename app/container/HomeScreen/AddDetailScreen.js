import React, {useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {ButtonComponent} from "../Components/ButtonComponent";


export const AddDetailScreen = () => {

    const navigation = useNavigation()
    const list = [{
        title: "Shirt",
        Price: "100",
        image: require('../../images/shirt.png')
    }, {
        title: "Outer Wear",
        Price: "100",
        image: require('../../images/clothes.png')
    }, {
        title: "Bottom",
        Price: "100",
        image: require('../../images/jeans.png')
    }, {
        title: "Dresses",
        Price: "100",
        image: require('../../images/wedding-dress.png')
    }, {
        title: "Suite",
        Price: "100",
        image: require('../../images/blazer.png')
    }, {
        title: "Shlwar-Kameez",
        Price: "100",
        image: require('../../images/kurta.png')
    }, {
        title: "Others",
        Price: "100",
        image: require('../../images/hanger.png')
    },]


    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <AntDesign name={"left"} size={30} color={"#fff"} style={{marginRight: 10}}/>
                <Text style={{
                    fontSize: 24,
                    fontFamily: Constants.fontFamilyBold,
                    color: "#fff",
                    includeFontPadding: false,
                    padding: 0,
                }}>{"Add Detail "}</Text>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>

                <FlatList data={list} style={{flex: 1}} renderItem={({item, index}) =>
                    <DetailComponent item={item}/>
                }/>
                <ButtonComponent title={"Done"}/>
            </View>
        </View>
    )
}
const DetailComponent = ({item}) => {
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
                    }}>Price <Text style={{fontFamily: Constants.fontFamilyRegular, color: Color.primary}}>{item?.Price} PKR</Text></Text>
                </View>
            </View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <AntDesign onPress={() => {
                    if (currentIndex > 0) {
                        setCurrentIndex(currentIndex - 1)
                    }
                }} name={"minus"} color={"#fff"} size={20}
                           style={{padding: 5, borderRadius: 30, backgroundColor: Color.primary}}/>
                <Text style={{
                    fontSize: 18,
                    marginHorizontal: 10,
                    fontFamily: Constants.fontFamilyRegular,
                    color: Color.primary,
                    marginLeft: 10
                }}>{currentIndex}</Text>
                <AntDesign onPress={() => {
                    setCurrentIndex(currentIndex + 1)
                }} name={"plus"} color={"#fff"} size={20}
                           style={{padding: 5, borderRadius: 30, backgroundColor: Color.primary}}/>
            </View>
        </View>
    )
}