import React, {useEffect, useState} from "react";
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SocialButtonComponent} from "../Components/SocialButtonComponent";
import {Color, Constants} from "../../common";
import SliderComponent from "../Components/SliderComponent";
import {useNavigation} from "@react-navigation/native";
import {TextFieldComponent} from "../Components/TextFieldComponent";
import {ButtonComponent} from "../Components/ButtonComponent";
import Ionicons from "react-native-vector-icons/Ionicons";
import firestore from '@react-native-firebase/firestore';
import {toast} from "../../Omni";
import {useDispatch} from "react-redux";
import * as actions from "../../redux/user/actions";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const LoginScreen = () => {
    const navigation = useNavigation()
    const [Phone, setPhone] = useState("")
    const [Password, setPassword] = useState("")
    const dispatch=useDispatch()
    useEffect(() => {

    }, [])

    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,

        }}>
            <SliderComponent/>
            <View style={{
                backgroundColor: Color.primary,
                zIndex: 2,
                top: -20,
                flex: 0.5,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                justifyContent: "flex-end"
            }}>
                <Image style={{
                    height: undefined,
                    width: "50%",
                    aspectRatio: 8,
                    marginVertical: 20,
                    alignSelf: 'center',
                }} source={require('../../images/Logo.png')}/>
                <View style={{flex: 1}}/>
                <View style={{marginHorizontal: 15}}>
                    <TextFieldComponent Style={{marginHorizontal:20}} value={Phone} onChangeText={(text) => {
                        setPhone(text)
                    }} title={"Enter Phone Number..."}/>
                    <ButtonComponent onPress={() => {
                        firestore()
                            .collection('Users')
                            .get()
                            .then(querySnapshot => {
                                querySnapshot.forEach(documentSnapshot => {
                                    if (documentSnapshot.data().PhoneNumber===Phone){
                                        toast("Logged In")
                                        dispatch(actions.loginSuccess(documentSnapshot.data()))
                                       navigation.replace("HomeScreen")
                                    }else {
                                        navigation.navigate("SignUpScreen")
                                        toast("User Not Exist")
                                    }
                                });
                            });}}
                                     Style={{alignSelf: "center", marginTop: 15, paddingHorizontal: 50}}
                                     title={"Sign In"}/>
                </View>
                <View style={{flex: 1}}/>
                <View style={{marginHorizontal: 20}}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10
                    }}>
                        <SocialButtonComponent onPress={() => {
                            navigation.navigate("HomeScreen")
                        }} image={require('../../images/Google.png')}/>
                        <SocialButtonComponent onPress={() => {
                            navigation.navigate("HomeScreen")
                        }} image={require('../../images/FacebookCircled.png')}/>
                    </View>
                </View>
                <Text
                    style={{color: "#fff", textAlign: "center", fontFamily: Constants.fontFamilyRegular, fontSize: 12}}>Powered
                    by TECHIONIK</Text>
            </View>

        </View>
    )
}