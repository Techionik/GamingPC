import React from 'react'
import {
    ImageBackground, Text,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import SkipButton from "../Components/SkipButton";
import {Color, Constants} from "../../common";
import FieldComponent from "../Components/FieldComponent";
import ButtonComponent from "../Components/ButtonComponent";


class SignupScreen extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {t,language}=this.props.value
        return (
            <View style={{flex: 1, backgroundColor: "#fff", paddingTop: 30, paddingHorizontal: 15}}>
                <ImageBackground source={require('../../images/SignUpImage.png')} resizeMode={"contain"}
                                 style={{aspectRatio: 1.5, width: "100%", height: undefined}}>
                    <SkipButton Props={this.props?.value}/>
                </ImageBackground>
                <Text
                    style={{color: "#000", fontFamily: Constants.fontFamilyBold, fontSize: 22}}>{t("Auth:SignUp")}</Text>
                <Text style={{color: Color.gray, fontFamily: Constants.fontFamilyBold, fontSize: 12}}>Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                <View style={{marginTop: 20}}>
                    <FieldComponent Icon={require('../../images/ProfileIcon.png')} Placeholder={t("Auth:FirstName")}/>
                    <FieldComponent Icon={require('../../images/MailIcon.png')} Placeholder={t("Auth:EmailField")}/>
                    <FieldComponent Icon={require('../../images/PhoneIcon.png')} Placeholder={t("Auth:PhoneNumber")}/>
                    <FieldComponent secureTextEntry={true} Icon={require('../../images/PasswordIcon.png')}
                                    IconStyle={{bottom: -4}} Placeholder={t("Auth:Password")}/>
                    <FieldComponent secureTextEntry={true} Icon={require('../../images/PasswordIcon.png')}
                                    IconStyle={{bottom: -4}} Placeholder={t("Auth:ConfirmPassword")}/>
                    <ButtonComponent title={t("Auth:SignUp")}/>
                    <View style={{flex:1}}/>
                    <Text style={{
                        marginBottom: 10,
                        fontSize: 14,
                        fontFamily: Constants.fontFamilyRegular,
                        color: "#000",
                        alignSelf: "center"
                    }}>{t("Auth:AnotherAccount")}<Text onPress={()=>{this.props.navigation.navigate("LoginScreen")}} style={{
                        fontSize: 16,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary
                    }}>{" " + t("Auth:Login")}</Text></Text>
                </View>

            </View>

        );
    }
}
export default withLanguage(SignupScreen)
