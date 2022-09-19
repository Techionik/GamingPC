import React from 'react'
import {ImageBackground, Text, View} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import CheckBoxComponent from "../Components/CheckBoxComponent";


class TermConditionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check:false,
        }
    }

    render() {
        const summaryText = "A terms and conditions agreement outlines the website administrator’s rules regarding user behavior and provides information about the actions the website administrator can and will perform.\n" +
            "Essentially, your terms and conditions text is a contract between your website and its users. In the event of a legal dispute, arbitrators will look at it to determine whether each party acted within their rights."
        const legalTerm = "Legal terms are an agreement between you and your users. Legal terms establish the rights and responsibilities of both parties. Those rights and responsibilities include any rules that users must agree to when using your website or mobile app."
        const termGenerators =
            "Termly’s legal terms generator is designed to help you comply with contract laws. While our legal terms generator may help you comply with other similarly drafted laws, it is not specifically written to comply with the laws of any other country. We recommend consulting with a local attorney for any country not yet specifically included in our current offerings.\n"
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <ImageBackground source={require('../../images/BackgroundRound.png')}
                                 style={{height: undefined, width: "100%", aspectRatio: 2}}>
                    <HeaderComponent titleStyle={{color: "#fff"}} title={"Terms & conditions"} Drawer={true}
                                     Location={false} Props={this.props.value}/>
                </ImageBackground>
                <View style={{
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    marginHorizontal: 10,
                    borderRadius: 15,
                    backgroundColor: colors.BackgroundView,
                    zIndex: 2,
                    top: -40
                }}>
                    <Text
                        style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text}}>Summary</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{summaryText}</Text>
                    <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text}}>What are
                        legal
                        terms?</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{legalTerm}</Text>
                    <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text}}>Does Local
                        Renovators legal terms generator cover all contract and consumer protection laws?</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{termGenerators}</Text>
                    <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text}}>What are
                        users?</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{"Users are individuals that visit your website. They can be external or internal. "}</Text>

                    <CheckBoxComponent style={{marginLeft:10}} title={"I agree with the Terms & Conditions."} theme={themeColor}/>
                    <CheckBoxComponent style={{marginLeft:10}} title={"I agree with Local Renovators Privacy Policy."} theme={themeColor}/>

                </View>
            </View>

        );
    }
}

export default withLanguage(TermConditionScreen)

