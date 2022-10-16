import React from 'react'
import {ImageBackground, ScrollView, Text, View} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import CheckBoxComponent from "../Components/CheckBoxComponent";


class TermConditionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <View style={{
                    flex: 0.3,
                    backgroundColor: Color.primary,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30
                }}>
                    <HeaderComponent title={t("L:TermsandConditions")} Props={this.props.value}/>
                </View>
                <View style={{

                    flex: 1,
                    zIndex: 2,
                    backgroundColor: colors.ScreenColorToDark,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingTop: 20,
                    top: -40,
                }}>

                    <ScrollView style={{
                        paddingTop: 30,
                        borderRadius: 15,
                        paddingHorizontal: 15,
                        backgroundColor: colors.BackgroundView,
                    }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontFamily: Constants.fontFamilyBold,
                                color: colors.text
                            }}>{t("L:Summary")}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.text
                        }}>{t("L:summaryText")}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyBold,
                            color: colors.text,
                            marginTop: 10
                        }}>
                            {t("L:legalterms")}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.text
                        }}>{t("L:legalTermText")}</Text>
                        <Text style={{
                            fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text, marginTop: 10
                        }}>{t("L:LocalLaws")}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.text,
                        }}>{t("L:termGenerators")}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyBold,
                            marginTop: 10,
                            color: colors.text
                        }}>{t("L:Whatareusers")}?</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.text
                        }}>{t("L:individualText")}</Text>

                        <CheckBoxComponent style={{marginLeft: 10}} title={t("L:agrementSucces")} colors={colors}/>
                        <CheckBoxComponent style={{marginLeft: 10}} title={t("L:agrementSucces2")} colors={colors}/>

                    </ScrollView>
                </View>
            </View>

        );
    }
}

export default withLanguage(TermConditionScreen)

