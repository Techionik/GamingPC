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


class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {t, language} = this.props.value
        return (
            <View style={{flex: 1, backgroundColor: "#fff", paddingTop: 30, paddingHorizontal: 15}}>
                <ImageBackground source={require('../../images/ForgetImage.png')} resizeMode={"contain"}
                                 style={{aspectRatio: 1.5, width: "100%", height: undefined}}>
                </ImageBackground>
                <Text
                    style={{
                        color: "#000",
                        fontFamily: Constants.fontFamilyBold,
                        fontSize: 22
                    }}>{t("Auth:ForgetPassword")}</Text>
                <Text style={{color: Color.gray, fontFamily: Constants.fontFamilyBold, fontSize: 12}}>Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                <View style={{marginTop: 20}}>
                    <FieldComponent Style={{paddingLeft: 0}} IconStyle={{marginRight: 0}}
                                    Placeholder={t("Auth:EmailField")}/>
                    <ButtonComponent onPress={()=>{this.props.navigation.navigate("VerificationScreen")}} title={t("Auth:Send")}/>

                </View>

            </View>

        );
    }
}

export default withLanguage(ForgotPasswordScreen)
