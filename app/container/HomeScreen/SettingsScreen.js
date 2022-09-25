import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import ToggleSwitch from "toggle-switch-react-native";
import {connect} from "react-redux";
import RNRestart from "react-native-restart";
import {logout} from "../../redux/user/operations";
import {changeLanguage, changeTheme} from "../../redux/app/actions";
const mapStateToProps=({user,app})=>({
    user,
    app,
    languagee:user?.languagee

})
@connect(
    mapStateToProps,
    {logout,changeTheme,changeLanguage}
)


class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           lighttodark:this.props.app?.theme=='light'?false:true,
            englishtoarabic:this.props.value.language=='en'?false:true
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={t("L:Settings")} colors={colors}  Props={this.props.value}/>
                <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',margin:15,padding:15,borderRadius:10,backgroundColor:colors.fieldBackgroundColor,elevation:2}}>
                    <Text style={{fontSize:16,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{t("L:LightToDark")}</Text>
                    <ToggleSwitch
                        isOn={this.state.lighttodark}
                        onColor={colors.drawerBackgroundColor}
                        offColor="#D6D6D6"
                        value={this.props.app?.theme}
                        onToggle={(newState) => {
                            this.setState({lighttodark:!this.state.lighttodark})
                            this.props.changeTheme(newState ? 'dark' : 'light')
                        }
                        }

                    />
                </View>
                <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',margin:10,padding:15,borderRadius:10,backgroundColor:colors.fieldBackgroundColor,elevation:2}}>
                    <Text style={{fontSize:16,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{t("L:EnglishToArabic")}</Text>
                    <ToggleSwitch
                        isOn={this.state.englishtoarabic}
                        onColor={colors.drawerBackgroundColor}
                        offColor="#D6D6D6"
                        onToggle={() => {
                            this.setState({englishtoarabic: !this.state.englishtoarabic})
                            if(this.props.value.language=='en'){
                                this.props.changeLanguage("ur")
                            }else{
                                this.props.changeLanguage("en")
                            }
                        setTimeout(()=>{   RNRestart.Restart()},200)

                    }}
                    />
                </View>

            </View>

        );
    }
}

export default withLanguage(SettingsScreen)

