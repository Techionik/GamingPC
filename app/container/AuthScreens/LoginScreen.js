import React, {useEffect, useState} from "react";
import {ActivityIndicator, Button, Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
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
import InputMobile from "../Components/input/InputMobile";
import InputPhoneNumber from "../Components/input/InputPhoneNumber";
import InputCode from "../Components/input/InputCode";
import {RiderHomeScreen} from "../RiderScreens/RiderHomeScreen";


export const LoginScreen = (props) => {
    const navigation = useNavigation()
    const [Phone, setPhone] = useState("")
    const [countryCode, setcountryCode] = useState("+92")
    const [loading,setLoading]=useState(false)
    const dispatch = useDispatch()

    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    // verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');

    async function signInWithPhoneNumber(phoneNumber) {
        setLoading(true)
        const userSnapshot = await firestore()
            .collection('Users')
            .where("PhoneNumber", "==", phoneNumber)
            .get();
        if (userSnapshot.empty) {
            // Phone number doesn't exist, navigate to SignUpScreen
            setLoading(false)
            navigation.navigate("SignUpScreen",{PhoneNumber:countryCode+Phone});
        } else {
            // Phone number exists, send OTP
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber, true).then(res => {
                toast("Sending OTP to your number");
                setLoading(false)
                return res;
            }).catch(error => {
                return error;
                setLoading(false)
            });
            setConfirm(confirmation);
        }
    }

    async function confirmCode() {
        try {
            setLoading(true)
            await confirm.confirm(code);
            const CP=countryCode+Phone
            firestore()
                .collection('Users')
                .where("PhoneNumber", "==", CP)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        const data = documentSnapshot.data();
                        dispatch(actions.loginSuccess({...data, userId: documentSnapshot.id}));
                        if (data?.Role === "Customer") {
                            setLoading(false)
                            navigation.replace('CustomerStack');
                        } else if(data?.Role === "Rider"){
                            setLoading(false)
                            navigation.navigate("RiderStack")
                        }else if(data?.Role === "Admin") {
                            setLoading(false)
                            navigation.replace("AdminStack")
                        }
                        setLoading(false)
                        toast("Verified");
                    });

                }).catch(err => {

                navigation.navigate("SignUpScreen",{PhoneNumber:countryCode+Phone});
            });
        } catch (error) {
            setLoading(false)
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

                            <InputPhoneNumber onCountryCodeChange={(countryCode) => {
                                setcountryCode(countryCode)
                            }} viewLabelStyle={{marginTop: 20}}
                                              value={Phone}
                                              label={"Phone Number"}
                                              onChangeText={value => {
                                                  setPhone(value)
                                              }}
                            />

                            {loading===true?<ActivityIndicator size={"large"} color={"#fff"} style={{alignSelf:"center"}}/>:<ButtonComponent onPress={() => {

                                if(Phone===""){
                                    setLoading(false)
                                    toast("Enter Number First")
                                }else {
                                const data = countryCode + Phone;
                                signInWithPhoneNumber(data)}
                            }} Style={{alignSelf: "center", marginTop: 15, paddingHorizontal: 50}} title={"Sign In"}/>}
                        </> :
                        <View style={{marginHorizontal: 10}}>
                            <InputCode
                                onFulfill={() => {
                                    confirmCode()
                                }}
                                onCodeChange={value => {
                                    setCode(value)
                                    // verifyCode(value)
                                }}
                                // editable={!isLoading}
                            />
                            {loading&&<ActivityIndicator size={"large"} color={"#fff"} style={{alignSelf:"center"}}/>}
                        </View>
                    }
                </View>
                <View style={{flex: 1}}/>

                <Text
                    style={{color: "#fff", textAlign: "center", fontFamily: Constants.fontFamilyRegular, fontSize: 12}}>Powered
                    by TECHIONIK</Text>
            </View>

        </View>
    )
}


