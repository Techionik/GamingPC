import React from 'react'
import {ImageBackground, Text, View} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import CheckBoxComponent from "../Components/CheckBoxComponent";
import HeaderWihBackground from "../Components/HeaderWihBackground";


class TermConditionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check:false,
        }
    }

    render() {
       const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground Location={false} title={t("L:AddToCart")} Drawer={true} Props={this.props.value} />
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
                        style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text}}>{t("L:Summary")}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{t("L:summaryText")}</Text>
                    <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text}}>
                        {t("L:legalterms")}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{t("L:legalTermText")}</Text>
                    <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text}}>{t("L:LocalLaws")}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{t("L:termGenerators")}</Text>
                    <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text}}>{t("L:Whatareusers")}?</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{t("L:individualText")}</Text>

                    <CheckBoxComponent style={{marginLeft:10}} title={t("L:agrementSucces")} colors={themeColor}/>
                    <CheckBoxComponent style={{marginLeft:10}} title={t("L:agrementSucces2")} colors={themeColor}/>

                </View>
            </View>

        );
    }
}

export default withLanguage(TermConditionScreen)

