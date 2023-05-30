import React, {useEffect, useState} from "react";
import {Button, Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SocialButtonComponent} from "../Components/SocialButtonComponent";
import {Color, Constants} from "../../common";
import SliderComponent from "../Components/SliderComponent";
import {useNavigation} from "@react-navigation/native";
import {TextFieldComponent} from "../Components/TextFieldComponent";
import {ButtonComponent} from "../Components/ButtonComponent";
import firestore from '@react-native-firebase/firestore';
import {toast} from "../../Omni";
import {useDispatch} from "react-redux";
import * as actions from "../../redux/user/actions";
import auth from '@react-native-firebase/auth';


export const LoginScreen = () => {
    const navigation = useNavigation()
    const [Phone, setPhone] = useState("")
    const dispatch = useDispatch()

    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber,).then(res=>{
            toast("Sending Otp On Your Number")
            return res;

        }).catch(error =>{
            navigation.navigate("SignUpScreen")
            return error;
        });
        setConfirm(confirmation);

    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
            firestore()
                .collection('Users')
                .where("Phone","==",Phone)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        const data=documentSnapshot.data()
                        dispatch(actions.loginSuccess({...data,userId:documentSnapshot.id}))
                        navigation.navigate('HomeScreen')
                    });
                    toast("Verified")
                })
        } catch (error) {
            toast('Invalid code.');
        }
    }

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

                    {!confirm ?
                        <>
                            <TextFieldComponent Style={{marginHorizontal: 20}} value={Phone} onChangeText={(text) => {
                                setPhone(text)
                            }} title={"Enter Phone Number..."}/>
                            <ButtonComponent onPress={() => {
                                signInWithPhoneNumber(Phone)
                            }}
                                             Style={{alignSelf: "center", marginTop: 15, paddingHorizontal: 50}}
                                             title={"Sign In"}/>
                        </> :
                        <>
                            <TextFieldComponent Style={{marginHorizontal: 20}} value={code} onChangeText={(text) => {
                                setCode(text)
                            }} title={"Enter Pin Code..."}/>
                            <ButtonComponent onPress={() => {
                                confirmCode()
                            }} Style={{alignSelf: "center", marginTop: 15, paddingHorizontal: 50}} title={"Verify"}/>
                        </>
                    }
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


