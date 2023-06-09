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


export const PcBuildScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const Products = [{title: "Processor"}, {title: "Motherboard"}, {title: "Memory"}, {title: "Monitor"}, {title: "Keyboard"}, {title: "Mouse"}, {title: "Graphic Card"}]
    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <HeaderComponent title={"PC Build!"} Children={<>
                <AntDesign onPress={() => {
                    navigation.navigate("SettingScreen")
                }} size={35} name={"setting"} color={"#000"}/>
            </>}
            />
            <View style={{flex: 1}}>
                <FlatList showsVerticalScrollIndicator={false}
                          style={{marginTop: 20, paddingBottom: 50, marginHorizontal: 20}}
                          data={Products} renderItem={({item, index}) =>
                    <BuildComponent item={item}/>
                }/>
            </View>
            <ButtonComponent onPress={() => {
                navigation.navigate("OrderDetailsScreen")
            }} Style={{borderRadius: 0}} title={"Check Out"}/>
        </View>
    )
}


const BuildComponent = ({item, image}) => {
    const [selected, setSelected] = useState(false)
    const navigation = useNavigation()
    return (
        <View style={{
            backgroundColor: "rgba(177,184,185,0.2)",
            marginVertical: 15,
            borderRadius: 10,
        }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate("ItemSelectionScreen")
                // setSelected(!selected)
            }} style={{
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 10,
                borderRadius: 10,
                borderWidth: 1.5,
                borderColor: Color.theme
            }}>
                <View/>
                <Text
                    style={{
                        fontSize: 20,
                        color: Color.theme,
                        fontFamily: Constants.fontFamilyMedium
                    }}>{item?.title}</Text>
                <AntDesign name={"plus"} color={"#000"}
                           style={{padding: 5, backgroundColor: Color.theme, alignSelf: "center"}}/>
            </TouchableOpacity>
            {selected && <View style={{padding: 10, flexDirection: "row", alignItems: "center"}}>
                <Image source={require('../../images/Item.png')}
                       style={{aspectRatio: 1, height: undefined, width: "20%"}}/>
                <View style={{marginLeft: 10, flex: 1}}>
                    <Text style={{fontSize: 14, fontFamily: Constants.fontFamilySemiBold, color: Color.theme}}>Asus
                        TUF</Text>
                    <Text style={{fontSize: 12, width: "100%", fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>visual
                        display unit, screen, display, video display, video display terminal.</Text>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: Color.theme}}>$
                            100</Text>
                        <TouchableOpacity style={{
                            borderWidth: 1,
                            paddingVertical: 3,
                            paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            borderColor: "red",
                            borderRadius: 5
                        }}>
                            <MaterialIcons name={"delete"} color={"red"} size={20}/>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: Constants.fontFamilyRegular,
                                includeFontPadding: false,
                                padding: 0,
                                color: "#fff"
                            }}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>}
        </View>
    )
}


