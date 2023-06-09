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
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";


export const PrivacyPolicyScreen = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
        }}>
            <HeaderComponent title={"Privacy Policy"}/>
            <View style={{padding: 20}}>
                <Text style={{fontSize:12,textAlign:"left",fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Text style={{fontSize:12,textAlign:"left",fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>

        </View>
    )
}




