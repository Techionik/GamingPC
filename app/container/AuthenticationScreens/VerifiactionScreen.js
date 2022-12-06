import React from 'react'
import {
    ImageBackground, Text,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import SkipButton from "../Components/SkipButton";
import {Color, Constants} from "../../common";
import ButtonComponent from "../Components/ButtonComponent";
import InputVerify from "../Components/input/InputVerify";
import InputCode from "../Components/input/InputCode";


class VerificationScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            code:"",
        }
    }
    render() {
        const {t,language,themeColor}=this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor, paddingTop: 30, paddingHorizontal: 15}}>
                <ImageBackground source={require('../../images/LoginImage.png')} resizeMode={"contain"}
                                 style={{aspectRatio: 1.5, width: "100%", height: undefined}}>
                </ImageBackground>
                <Text
                    style={{color: colors.blackAndWhite, fontFamily: Constants.fontFamilyBold, fontSize: 22}}>{t("L:Verification")}</Text>
                <Text style={{color: colors.greyToWhite, fontFamily: Constants.fontFamilyBold, fontSize: 12}}>{t("L:DummyText")}</Text>
                <View style={{marginTop: 20}}>
                    <View style={{marginHorizontal:30}}>
                    <InputCode
                        onFulfill={()=>{}}
                        onCodeChange={value => {
                            // setCode(value)
                            this.setState({code:value})
                            // verifyCode(value)
                        }}
                        // editable={!isLoading}
                    />
                    </View>
                <ButtonComponent onPress={()=>{this.props.navigation.replace("HomeScreen")}} title={t("Auth:Send")}/>
                </View>
            </View>

        );
    }
}
export default withLanguage(VerificationScreen)
