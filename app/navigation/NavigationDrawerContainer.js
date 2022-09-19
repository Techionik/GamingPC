'use strict';

import React, {Component} from 'react';
import {
    Dimensions,
    Modal,
    Platform,
    SafeAreaView, ScrollView,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import {connect} from "react-redux";

import Constants from "../common/Constants";
import Color from "../common/Color";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextWithIcon from "./TextWithIcon";
import drawer from "./drawer_ref";
import I18n from "react-native-i18n";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RNRestart from "react-native-restart";
import {logout} from "../redux/user/operations";
import withLanguage from "../config/withLanguage";
import ToggleButton from "react-native-toggle-element";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import {changeTheme} from "../redux/app/actions";

var Screenwidth = Dimensions.get('window').width; //full width
var Screenheight = Dimensions.get('window').height;
const mapStateToProps = ({user, app}) => ({
    app,
    user
});

@connect(
    mapStateToProps,
    {logout,changeTheme}
)

class NavigationDrawerContainer extends Component<Props> {

    constructor(props) {
        super(props);


        this.state = {


            loading: false,
            modalvisible: false,
            shareModal: false,
            rateModal: false,
            toggleValue:false,
            language:"er"


        };

    }
    render() {
        const {navigation, value} = this.props;
        const {t, language,themeColor} = value;
        const {colors}=themeColor
        return (

            <SafeAreaView style={{flex: 1, backgroundColor: colors?.drawerBackgroundColor}}>


                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>





                    <View style={{flexDirection: 'row',justifyContent:'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: '10%'}}>

                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity onPress={() => {
                            drawer.current.close()
                        }} style={{borderRadius: 5, backgroundColor: colors?.fieldBackgroundColor, padding: 10}}>
                            <MaterialIcons name={"sort"} size={25} color={colors?.fieldTextColor}/>
                        </TouchableOpacity>

                            <View style={{marginLeft:10}}>
                        <Text style={{
                            fontSize: 17,
                            includeFontPadding: false,
                            fontFamily: Constants.fontFamilySemiBold,
                            color: '#fff'
                        }}>{t("Hi Galleria")}</Text>

                                <Text style={{
                                    backgroundColor:Color.orange,
                                    padding:7,
                                    borderRadius:5,
                                    fontSize: 10,
                                    marginTop:5,
                                    includeFontPadding: false,
                                    fontFamily: Constants.fontFamilySemiBold,
                                    color: '#fff'
                                }}>{t("Wallet : 2,456 SAR")}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{
                            fontSize: 13,
                            includeFontPadding: false,
                            fontFamily: Constants.fontFamilySemiBold,
                            color: '#fff',
                            marginHorizontal:10
                        }}>{t("Dark Mode")}</Text>
                            <ToggleButton
                                value={this.props.app?.theme=='dark'}
                                onPress={(newState) => {

                                    this.props.changeTheme(newState ? 'dark' : 'light')
                                }

                            }

                                leftComponent = {(this.props.app?.theme!='dark')?null:<Ionicons name={"sunny"} size={20} color={Color.backgroundColorBlue}/>}

                                rightComponent={this.props.app?.theme=='dark'?null:<Ionicons name={"sunny"} size={20} color={Color.primary}/>}
                                thumbButton={{

                                    width: 22,
                                    height: 22,
                                    radius: 30,
                                    activeBackgroundColor:'#fff',
                                    inActiveBackgroundColor:"#fff",
                                }}
                                trackBarStyle={{backgroundColor:"#e3e3e3"}}
                                trackBar={{
                                    width: 60,
                                    height: 28,
                                    radius: 25,
                                    activeBackgroundColor: "#e3e3e3",
                                    inActiveBackgroundColor: "#3c4145",

                                }}
                            />
                        </View>

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: Color.primaryLight,
                        borderRadius: 20,
                        marginTop:30,
                        marginHorizontal:30,
                        width:"35%"
                    }}>

                        <TouchableOpacity onPress={() => {
                            this.setState({ language: "er" })
                        }} style={{
                            padding: 9,
                            backgroundColor:this.state.language=="er"?colors.fieldBackgroundColor:Color.primaryLight ,
                            paddingHorizontal: 15,
                            borderRadius: 20,
                        }}>
                            <Text style={{
                                color: this.state.language=="er" ? colors.languageTextColor : colors.InactivelanguageTextColor,
                                fontSize: 12,
                                fontFamily: Constants.fontFamilyRegular,
                            }}>English</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setState({ language: "ur" })
                        }} style={{
                            padding: 9,
                            backgroundColor:this.state.language=="ur"?colors.fieldBackgroundColor:Color.primaryLight ,
                            paddingHorizontal: 18,
                            borderRadius: 20,
                        }}>
                            <Text style={{
                                color: this.state.language=="ur" ? colors.languageTextColor : colors.InactivelanguageTextColor,
                                fontSize: 12,
                                fontFamily: Constants.fontFamilyRegular,
                            }}>عربى</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={{flexDirection: 'row', flex: 1, width: '100%',}}>
                        <View style={{width: '8%',}}/>

                        <View style={{width: '55%'}}>

                            <View style={{height: '75%',}}>

                                <View style={{flex: 1, marginBottom: '20%'}}>
                                    <TextWithIcon onPress={() => {
                                        navigation.navigate('HomeDrawer')
                                        drawer.current?.close()
                                    }} title={t("Home")}>
                                    </TextWithIcon>
                                    <TextWithIcon onPress={() => {
                                        navigation.navigate('OutletsSceen')
                                        drawer.current?.close()
                                    }} title={t("Outlets")}>
                                    </TextWithIcon>

                                    <TextWithIcon onPress={() => {
                                        navigation.navigate('BookMarkScreen')
                                        drawer.current?.close()
                                    }} title={t("Bookmarks")}>
                                    </TextWithIcon>
                                    <TextWithIcon onPress={() => {
                                        navigation.navigate('HomeDrawer')
                                        drawer.current?.close()

                                        navigation.navigate('NotificationsScreen')
                                    }} title={t("Notification")}>
                                    </TextWithIcon>
                                    <TextWithIcon
                                        onPress={() => {
                                            navigation.navigate('SettingScreen')
                                            drawer.current?.close()
                                        }}
                                        title={t("Settings")}>
                                    </TextWithIcon>
                                    <TextWithIcon
                                        onPress={() => {
                                            this.props.navigation.navigate('ContactUsScreen')
                                            drawer.current?.close()
                                        }}
                                        title={t("Contact Us")}>
                                    </TextWithIcon>
                                    <TextWithIcon
                                        onPress={() => {
                                            this.setState({shareModal: true})
                                            drawer.current?.close()
                                        }}
                                        title={t("Share")}>
                                    </TextWithIcon>
                                    <TextWithIcon
                                        onPress={() => {
                                            this.setState({rateModal: true})
                                            drawer.current?.close()
                                        }}
                                        title={t("Rate")}>
                                    </TextWithIcon>
                                    <TextWithIcon exterViewStyle={{marginTop: 60}}
                                        onPress={() => {
                                            this.props.logout()
                                            //
                                            setTimeout(() => {
                                                RNRestart.Restart()
                                            }, 1000)
                                            drawer.current?.close()
                                        }}
                                        title={t("Logout")}>
                                    </TextWithIcon>
                                </View>


                            </View>
                            <View style={{height: '15%'}}/>
                        </View>
                        <View style={{width: '30%',}}/>

                    </View>

                </ScrollView>


            </SafeAreaView>


        );
    }
}

const styles = {
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    tabContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#1676d1',
        borderColor: '#FFFFFF',
        borderTopWidth: 0,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    mainHeaderViewStyle: {
        width: parseInt(Screenwidth),
        height: Platform.OS == "android" ? 55 : 65,
        flexDirection: "row",
        alignItems: "center"
    },
    mainHeaderViewStyleCopy: {
        //flex:.10,
        width: parseInt(Screenwidth),
        height: (Platform.OS == 'android' ? 55 : 65),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    headerImage: {
        resizeMode: 'stretch',
        width: parseInt(Screenwidth),
        height: 55,
    },

    iconImageStyle: {
        height: 34,
        width: 34,
        resizeMode: 'stretch'
    },
    dividerStyle: {
        width: '100%',
        height: 1,
        resizeMode: 'stretch'
    },


}
export default withLanguage(NavigationDrawerContainer);
