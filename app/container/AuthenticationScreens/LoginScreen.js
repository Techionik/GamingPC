import React from 'react'
import {
    Image,
    ImageBackground, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import FieldComponent from "../Components/FieldComponent";
import ButtonComponent from "../Components/ButtonComponent";
import SocialButton from "../Components/SocialButton";
import SkipButton from "../Components/SkipButton";


class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {t, language} = this.props?.value
        return (
            <View style={{flex: 1, backgroundColor: "#fff", paddingTop: 30, paddingHorizontal: 15}}>
                <ImageBackground source={require('../../images/LoginImage.png')} resizeMode={"contain"}
                                 style={{aspectRatio: 1.5, width: "100%", height: undefined}}>
                    <SkipButton Props={this.props?.value}/>
                </ImageBackground>
                <Text
                    style={{color: "#000", fontFamily: Constants.fontFamilyBold, fontSize: 22}}>{t("Auth:Login")}</Text>
                <Text style={{color: Color.gray, fontFamily: Constants.fontFamilyBold, fontSize: 12}}>Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                <View style={{marginTop: 20}}>
                    <FieldComponent Icon={require('../../images/MailIcon.png')} Placeholder={t("Auth:EmailField")}/>
                    <FieldComponent secureTextEntry={true} Icon={require('../../images/PasswordIcon.png')}
                                    IconStyle={{bottom: -4}} Placeholder={t("Auth:Password")}/>
                    <Text onPress={()=>{this.props.navigation.navigate("ForgotPasswordScreen")}} style={{
                        fontSize: 14,
                        marginTop: 5,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary,
                        alignSelf: "flex-end"
                    }}>{t("Auth:ForgetPassword")}</Text>
                    <ButtonComponent onPress={()=>{this.props.navigation.navigate("MapScreen")}} title={t("Auth:Login")}/>
                </View>
                <View style={{flex: 1}}/>
                <OrLoginWith Props={this.props.value}/>
                <View
                    style={{flexDirection: "row", paddingVertical: 20, justifyContent: "center", alignItems: "center"}}>
                    <SocialButton Icon={require('../../images/GoogleIcon.png')}/>
                    <SocialButton Icon={require('../../images/FacebookIcon.png')} Style={{marginHorizontal: 20}}/>
                    <SocialButton Icon={require('../../images/AppleIcon.png')} IconStyle={{left: -1}}/>
                </View>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 14,
                    fontFamily: Constants.fontFamilyRegular,
                    color: "#000",
                    alignSelf: "center"
                }}>{t("Auth:AnotherAccount")}<Text onPress={()=>{this.props.navigation.navigate("SignupScreen")}} style={{
                    fontSize: 16,
                    fontFamily: Constants.fontFamilyBold,
                    color: Color.primary
                }}>{" " + t("Auth:SignUp")}</Text></Text>
            </View>

        );
    }

}

export default withLanguage(LoginScreen)

function OrLoginWith( {
    Props
}

)
{
    const {t, language} = Props
    return (
        <View style={{justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <View style={{height: 0.5, width: 70, backgroundColor: "#787676"}}/>
            <Text style={{
                fontSize: 12,
                fontFamily: Constants.fontFamilyMedium,
                color: "#787676",
                marginHorizontal: 10
            }}>{t("Auth:Continuewith")}</Text>
            <View style={{height: 0.5, width: 70, backgroundColor: "#787676"}}/>
        </View>
    )
}


