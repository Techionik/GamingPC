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
        const {t, language,themeColor} = this.props?.value
        const {colors}=themeColor


        return (
            <View style={{flex: 1, backgroundColor:colors.screenBackgroundColor , paddingTop: 30, paddingHorizontal: 15}}>
                <ImageBackground  source={require('../../images/LoginImage.png')} resizeMode={"contain"}
                                 style={{aspectRatio: 1.5, width: "100%", height: undefined}}>
                    <SkipButton  Props={this.props?.value}/>
                </ImageBackground>
                <Text
                    style={{color:  colors?.blackAndWhite, fontFamily: Constants.fontFamilyBold, fontSize: 22}}>{t("Auth:Login")}</Text>
                <Text style={{color: colors?.fieldTextColor, fontFamily: Constants.fontFamilyBold, fontSize: 12}}>Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                <View style={{marginTop: 20}}>
                    <FieldComponent theme={colors}  Icon={require('../../images/MailIcon.png')} Placeholder={t("Auth:EmailField")}/>
                    <FieldComponent theme={colors} secureTextEntry={true} Icon={require('../../images/PasswordIcon.png')}
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
                    <SocialButton Icon={require('../../images/AppleIcon.png')}  IconStyle={{left: -1,tintColor:colors?.blackAndWhite}}/>
                </View>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 14,
                    fontFamily: Constants.fontFamilyRegular,
                    color: colors?.blackAndWhite,
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
    const {t, language,themeColor} = Props

    return (
        <View style={{justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <View style={{height: 0.5, width: 70, backgroundColor:themeColor?.colors?.fieldTextColor}}/>
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


