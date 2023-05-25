import React from "react";
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SocialButtonComponent} from "../Components/SocialButtonComponent";
import {Color, Constants} from "../../common";
import SliderComponent from "../Components/SliderComponent";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useNavigation} from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {TextFieldComponent} from "../Components/TextFieldComponent";
import {ButtonComponent} from "../Components/ButtonComponent";
import Ionicons from "react-native-vector-icons/Ionicons";


export const SocialSignupScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={{
            flex: 1,
            backgroundColor: Color.primary,
            height: undefined,
            width: "100%",
            aspectRatio: 0.479,
            alignSelf: "center"
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
                    <TextFieldComponent title={"Enter Phone Number..."}/>
                    <TextFieldComponent icon={<Ionicons name={"eye-off"} size={25} color={"#fff"}/>}
                                        title={"Enter Password..."}/>
                    <ButtonComponent onPress={()=>{navigation.navigate("HomeScreen")}}
                    Style={{alignSelf: "center", marginTop: 15, paddingHorizontal: 50}} title={"Sign In"}/>
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