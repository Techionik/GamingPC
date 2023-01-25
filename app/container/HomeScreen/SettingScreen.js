import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";

import SettingsComponent from "../Components/SettingsComponent";
import {logout} from "../../redux/user/operations";
import {changeLanguage, changeRtl, changeTheme} from "../../redux/app/actions";
import {connect} from "react-redux";
import RNRestart from "react-native-restart";


const mapStateToProps = ({user, app}) => ({
    app,
    user,
    languagee: user?.languagee
});

@connect(
    mapStateToProps,
    {logout, changeTheme, changeLanguage, changeRtl}
)

class SettingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.value.language == "en" ? false : true,

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
                    <HeaderComponent title={t("L:Settings")} Props={this.props.value}/>
                </View>
                <ScrollView contentContainerStyle={{flex:1}} style={{
                    flex: 1,
                    backgroundColor: colors.screenBackgroundColor,
                    zIndex: 2,
                    top: -25,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30
                }}>
                    <View style={{
                        paddingHorizontal: 20,
                        paddingVertical: 30,
                        marginHorizontal: 10,
                        borderRadius: 15,
                        marginVertical: 20,
                        backgroundColor: colors.BackgroundView,
                    }}>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyMedium,
                            color: colors.greyToTheme
                        }}>{t("L:AccountSettings")}</Text>
                        <SettingsComponent Props={this.props.value} style={{marginBottom: 10}}
                        onPress={()=>{this.props.navigation.navigate("ProfileScreen")}}        title={"Profile"} colors={colors}/>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyMedium,
                            color: colors.greyToTheme
                        }}>{t("L:OtherSettings")}</Text>

                        <SettingsComponent value={this.props.app?.theme == 'dark' ? true : false} onTogglePress={() => {
                            if (this.props.app?.theme == 'dark') {
                                this.props.changeTheme('light')
                            } else {
                                this.props.changeTheme('dark')
                            }
                        }} Props={this.props.value} style={{marginBottom: 10}} title={t("L:DarkMode")} toogle={true}
                                           colors={colors}/>
                        <SettingsComponent Props={this.props.value} onPress={() => {this.props.navigation.navigate("UpdatePasswordScreen")}}  style={{marginBottom: 10}} title={"Update Password"} colors={colors}/>
                        <SettingsComponent Props={this.props.value}  style={{marginBottom: 10}} title={t("L:PrivacyPolicy")} colors={colors}/>
                        <SettingsComponent Props={this.props.value}  style={{marginBottom: 10}} title={t("L:TermsandConditions")} colors={colors}/>
                        <SettingsComponent Props={this.props.value} onPress={() => {
                            this.props.navigation.navigate("ContactUsScreen")
                        }} style={{marginBottom: 10}} title={t("L:Contact")} colors={colors}/>

                        <SettingsComponent Props={this.props.value} style={{marginBottom: 10}} title={t("L:Aboutus")} colors={colors}/>
                        <SettingsComponent onPress={()=>{this.props.logout();this.props.navigation.replace("SplashContainer")}} Props={this.props.value} title={t("L:Logout")} colors={colors}/>

                    </View>
                    <View style={{flex:1}}/>

                        <Text style={{
                            fontSize: 12,
                            includeFontPadding: false,
                            padding: 0,alignSelf:"center",
                            fontFamily: Constants.fontFamilyBold,
                            color: Color.primary,
                            marginLeft: 5
                        }}>Powered by TECHIONIK</Text>
                </ScrollView>
            </View>


        );
    }
}

export default withLanguage(SettingScreen)
