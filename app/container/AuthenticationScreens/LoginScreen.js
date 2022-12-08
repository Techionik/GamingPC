import React from 'react'
import {
    Image,
    ImageBackground, ScrollView, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import FieldComponent from "../Components/FieldComponent";
import ButtonComponent from "../Components/ButtonComponent";
import SocialButton from "../Components/SocialButton";
import SkipButton from "../Components/SkipButton";
import {BottomSocialButtons} from "./RegisterScreen";


class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {t, language, themeColor} = this.props?.value
        const {colors} = themeColor


        return (
            <View
                style={{flex: 1, backgroundColor: colors.screenBackgroundColor, paddingTop: 30, paddingHorizontal: 15}}>

                <View style={{flex: 0.5, justifyContent: 'center'}}>
                    <Image style={{
                        height: undefined,
                        width: "100%",
                        aspectRatio: 2,
                        alignSelf: 'center',
                    }} source={require('../../images/LoginLogo.png')}/>
                </View>

                <ScrollView contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}
                            style={{marginHorizontal: 5, flex: 1}}>
                    <Text
                        style={{
                            color: colors?.blackAndWhite,
                            fontFamily: Constants.fontFamilyBold,
                            fontSize: 22
                        }}>{t("Auth:Login")}</Text>
                    <View style={{marginTop: 20}}>
                        <FieldComponent theme={colors} Icon={require('../../images/MailIcon.png')}
                                        Placeholder={t("Auth:EmailField")}/>
                        <FieldComponent theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/PasswordIcon.png')}
                                        IconStyle={{bottom: -4}} Placeholder={t("Auth:Password")}/>
                        <Text onPress={() => {
                            this.props.navigation.navigate("ForgotPasswordScreen")
                        }} style={{
                            fontSize: 14,
                            marginTop: 5,
                            fontFamily: Constants.fontFamilyBold,
                            color: Color.primary,
                            alignSelf: "flex-end"
                        }}>{t("Auth:ForgetPassword")}</Text>
                        <ButtonComponent onPress={() => {
                            this.props.navigation.navigate("HomeScreen")
                        }} title={t("Auth:Login")}/>
                    </View>
                    <View style={{flex: 1}}/>

                    <Text style={{
                        marginBottom: 10,
                        fontSize: 14,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors?.blackAndWhite,
                        alignSelf: "center"
                    }}>{t("Auth:AnotherAccount")}<Text onPress={() => {
                        this.props.navigation.navigate("SignupScreen")
                    }} style={{
                        fontSize: 16,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary
                    }}>{" " + t("Auth:SignUp")}</Text></Text>

                </ScrollView>
            </View>

        );
    }

}

export default withLanguage(LoginScreen)

export function OrLoginWith({
                                Props
                            }
) {
    const {t, language, themeColor} = Props

    return (
        <View style={{justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <View style={{height: 0.5, width: 70, backgroundColor: themeColor?.colors?.fieldTextColor}}/>
            <Text style={{
                fontSize: 12,
                fontFamily: Constants.fontFamilyMedium,
                color: themeColor?.colors?.fieldTextColor,
                marginHorizontal: 10
            }}>{t("Auth:Continuewith")}</Text>
            <View style={{height: 0.5, width: 70, backgroundColor: themeColor?.colors?.fieldTextColor}}/>
        </View>
    )
}


