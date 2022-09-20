import React from 'react'
import {ImageBackground, ScrollView, Text, View} from 'react-native'
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
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    paddingHorizontal: 15,
                    paddingTop: 30,
                    flex:1,
                    marginHorizontal: 15,
                    borderRadius: 15,
                    backgroundColor: colors.BackgroundView,
                    zIndex: 2,
                    top: -40,

                }}>
                    <Text
                        style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text}}>{t("L:Summary")}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{t("L:summaryText")}</Text>
                    <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text,marginTop:10}}>
                        {t("L:legalterms")}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{t("L:legalTermText")}</Text>
                    <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.text,                        marginTop:10
                    }}>{t("L:LocalLaws")}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text,
                    }}>{t("L:termGenerators")}</Text>
                    <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold,marginTop:10, color: colors.text}}>{t("L:Whatareusers")}?</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.text
                    }}>{t("L:individualText")}</Text>

                    <CheckBoxComponent style={{marginLeft:10}} title={t("L:agrementSucces")} colors={colors}/>
                    <CheckBoxComponent style={{marginLeft:10}} title={t("L:agrementSucces2")} colors={colors}/>

                </ScrollView>
            </View>

        );
    }
}

export default withLanguage(TermConditionScreen)

