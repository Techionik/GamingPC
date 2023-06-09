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
import {SearchHeaderComponent} from "../Components/SearchHeaderComponent";


export const ItemSelectionScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const Products = [{title: "Processor"}, {title: "Motherboard"}, {title: "Memory"}, {title: "Monitor"}, {title: "Keyboard"}, {title: "Mouse"}, {title: "Graphic Card"}]
    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <SearchHeaderComponent title={"PC Build!"}/>
            <View style={{flex:1}}>
                <FlatList showsVerticalScrollIndicator={false} style={{marginTop: 20,paddingBottom:50, marginHorizontal: 20}}
                          data={Products} renderItem={({item, index}) =>
                    <BuildComponent item={item}/>
                }/>
            </View>
        </View>
    )
}


const BuildComponent = ({item, image}) => {
    const [selected, setSelected] = useState(false)
    const navigation=useNavigation()
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate("ItemDetailsScreen")}} style={{
            backgroundColor: "rgba(177,184,185,0.2)",
            marginVertical: 15,
            borderRadius:10,
            padding: 10,
        }}>
          <View style={{ flexDirection: "row", alignItems: "center"}}>
                <Image source={require('../../images/Item.png')}
                       style={{aspectRatio: 1, height: undefined, width: "20%"}}/>
                <View style={{marginLeft: 10, flex: 1}}>
                    <Text style={{fontSize: 14, fontFamily: Constants.fontFamilySemiBold,includeFontPadding:false,padding:0, color: Color.theme}}>Asus TUF</Text>
                    <Text style={{fontSize: 12, width: "100%", fontFamily: Constants.fontFamilyRegular, color: "#fff"}}>visual
                        display unit, screen, display, video display, video display terminal.</Text>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: Color.theme}}>$
                            100</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:Color.theme}}>Brand</Text>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>Aoc</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:Color.theme}}>Model</Text>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>C24G1</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:Color.theme}}>Resolution</Text>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>1920 x 1080</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:Color.theme}}>Screen Size</Text>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>24”</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


