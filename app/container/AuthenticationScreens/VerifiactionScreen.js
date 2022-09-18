import React from 'react'
import {
    ImageBackground, Text,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import SkipButton from "../Components/SkipButton";
import {Color, Constants} from "../../common";
import ButtonComponent from "../Components/ButtonComponent";


class VerificationScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            code:"",
        }
    }
    render() {
        const {t,language}=this.props.value
        return (
            <View style={{flex: 1, backgroundColor: "#fff", paddingTop: 30, paddingHorizontal: 15}}>
                <ImageBackground source={require('../../images/LoginImage.png')} resizeMode={"contain"}
                                 style={{aspectRatio: 1.5, width: "100%", height: undefined}}>
                </ImageBackground>
                <Text
                    style={{color: "#000", fontFamily: Constants.fontFamilyBold, fontSize: 22}}>{t("Auth:Verification")}</Text>
                <Text style={{color: Color.gray, fontFamily: Constants.fontFamilyBold, fontSize: 12}}>Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                <View style={{marginTop: 20}}>
                <ButtonComponent onPress={()=>{this.props.navigation.replace("homeStack")}} title={t("Auth:Send")}/>
                </View>
            </View>

        );
    }
}
export default withLanguage(VerificationScreen)
