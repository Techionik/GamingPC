import React, {useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import * as actions from "../../redux/user/actions";
import {toast} from "../../Omni";


export const OrderScreen = () => {
    const [total,setTotal]=useState(1)
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation=useNavigation()
    const items = [{image: require('../../images/shirt.png'),
        Price:"100",
        title:"Shirt"
    }, {
        image: require('../../images/kurta.png'),
        Price:"200",
        title:"Shalwar Kamez"
    }, {
        image: require('../../images/blazer.png'),
        Price:"500",
        title:"Suite"
    }]; // Example list of items


    return (
        <View style={{flex: 1, backgroundColor: "#C5E6FF"}}>
            <View style={{flex: 0.6, backgroundColor: Color.Lightprimary}}>
                <View style={{paddingHorizontal: 20, marginTop: 30, flexDirection: "row", alignItems: "center"}}>
                    <View style={{flex: 1}}>
                        <Text style={{
                            fontSize: 24,
                            fontFamily: Constants.fontFamilyBold,
                            color: "#fff"
                        }}>{"Hi There!"}</Text>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: Constants.fontFamilyRegular,
                            color: "#fff"
                        }}>{"Hope You Are Doing Well"}</Text>
                    </View>
                    <AntDesign onPress={()=>{navigation.navigate("CartScreen")}} name={"shoppingcart"} size={40}/>
                </View>
                <View style={{
                    backgroundColor: "#fff",
                    zIndex: 2,
                    bottom: -100,
                    paddingTop: 20,
                    paddingHorizontal: 10,
                    marginHorizontal: 50,
                    alignItems: "center",
                    borderRadius: 20
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
                        <AntDesign onPress={moveBack} name={"left"} color={Color.primary} size={20}/>
                        <Image source={items[currentIndex].image}
                               style={{height: undefined, width: "80%", marginHorizontal: 10, aspectRatio: 1}}/>
                        <AntDesign onPress={moveNext} name={"right"} color={Color.primary} size={20}/>
                    </View>
                    <Text style={{color: Color.primary, fontSize: 15,marginTop:10,includeFontPadding:false,padding:0, fontFamily: Constants.fontFamilyBold}}>{items[currentIndex].title}</Text>
                </View>
            </View>
            <View style={{flex: 0.25}}/>
            <View style={{padding: 20}}>
                <PriceComponent title={"Price"} price={`PKR ${items[currentIndex].Price}`}/>
                <PriceComponent title={"Delivery"} price={"PKR 100"}/>
                <PriceComponent title={"Total"} price={`PKR ${total*(parseInt(items[currentIndex].Price)+100)}`}/>
                <CalCulateComponent SendBack={(q)=>{setTotal(q)}}/>
                <View style={{flexDirection: "row", marginTop: 15, justifyContent: "flex-end"}}>
                    <TouchableOpacity style={{padding: 10, borderRadius: 7., backgroundColor: Color.primary}}>
                        <Text style={{color: "#fff", fontSize: 15, fontFamily: Constants.fontFamilyBold}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
const PriceComponent = ({title, price}) => {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
            <Text style={{color: Color.primary, fontSize: 20, fontFamily: Constants.fontFamilyBold}}>{title}</Text>
            <Text style={{color: Color.primary, fontSize: 20, fontFamily: Constants.fontFamilyRegular}}>{price}</Text>
        </View>
    )
}
const CalCulateComponent = ({SendBack}) => {
    const [Q, sQ] = useState(1)
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
            <Text style={{color: Color.primary, fontSize: 20, fontFamily: Constants.fontFamilyBold}}>Quantity</Text>
            <View style={{
                padding: 5,
                width: "30%",
                justifyContent: "space-between",
                backgroundColor: Color.primary,
                borderRadius: 7,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <AntDesign onPress={() => {
                    if (Q > 1) {
                        sQ(Q - 1)
                        SendBack(Q)
                    }

                }} name={"minus"} color={"#fff"} size={22} style={{marginRight: 10}}/>
                <Text style={{
                    color: "#fff",
                    fontSize: 20,
                    includeFontPadding: false,
                    padding: 0,
                    fontFamily: Constants.fontFamilyBold
                }}>{Q}</Text>
                <AntDesign onPress={() => {
                    sQ(Q + 1)
                    SendBack(Q)
                }} name={"plus"} color={"#fff"} size={22} style={{marginLeft: 10}}/>
            </View>
        </View>
    )
}