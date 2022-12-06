import React, {Component} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {isReadyRef, navigationRef} from "./RootNavigation";
import {createStackNavigator} from "@react-navigation/stack"
import {View} from "react-native";
import {compose} from "redux";
import {connect} from "react-redux";
import {languageSelector, themeSelector} from "../redux/app/selectors";
import SplashContainer from "../container/SplashContainer";
import LoginScreen from "../container/AuthenticationScreens/LoginScreen";
import MapScreen from "../container/MapScreen";
import MyWalletScreen from "../container/HomeScreen/EarningScreen";
import HomeScreen from "../container/HomeScreen/HomeScreen";
import EarningScreen from "../container/HomeScreen/EarningScreen";
import SettingsScreen from "../container/HomeScreen/AgrementScreen";
import JobsScreen from "../container/HomeScreen/JobsScreen";
import ForgotPasswordScreen from "../container/AuthenticationScreens/ForgotPasswordScreen";
import VerificationScreen from "../container/AuthenticationScreens/VerifiactionScreen";
import RateAndReviewScreen from "../container/HomeScreen/RateAndReviewScreen";
import SettingScreen from "../container/HomeScreen/SettingScreen";
import ContactUsScreen from "../container/HomeScreen/ContactUsScreen";
import TermConditionScreen from "../container/HomeScreen/TermConditionScreen";
import ProfileScreen from "../container/HomeScreen/ProfileScreen";
import AgrementScreen from "../container/HomeScreen/AgrementScreen";

import SignupScreen from "../container/AuthenticationScreens/RegisterScreen";
import AttendenceScreen from "../container/HomeScreen/AttendanceScreen";

//
// const mapStateToProps2 = ({app}) => ({
//     lang: app?.language?.lang,
//     rtl: app?.language?.rtl,
//
// });
//
// @connect(
//     mapStateToProps2,
//     {}
// )

const Stack = createStackNavigator()

const AppStack = ({}) => {
    return (
        <Stack.Navigator initialRouteName={"SplashContainer"}>
            <Stack.Screen name={"SplashContainer"} component={SplashContainer} options={{headerShown: false}}/>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"MapScreen"} component={MapScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ForgotPasswordScreen"} component={ForgotPasswordScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"VerificationScreen"} component={VerificationScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"EarningScreen"} component={EarningScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"AgrementScreen"} component={AgrementScreen} options={{headerShown: false}}/>
                <Stack.Screen name={"JobsScreen"} component={JobsScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"RateAndReviewScreen"} component={RateAndReviewScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"SettingScreen"} component={SettingScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ContactUsScreen"} component={ContactUsScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"TermConditionScreen"} component={TermConditionScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"AttendenceScreen"} component={AttendenceScreen} options={{headerShown: false}}/>

            <Stack.Screen name={"SignupScreen"} component={SignupScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

class AppNavigator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            done: false,
            navigationDone: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({done: false})
        }, 1500)

    }


    render() {

        return (
            <View style={{flex: 1}}>
                <NavigationContainer ref={navigationRef}>
                    <AppStack/>
                </NavigationContainer>
            </View>

        )
    }
}

const mapStateToProps = state => {
    return {app: state.app, user: state.user, language: languageSelector(state), theme: themeSelector(state)}
}
export default compose(
    connect(mapStateToProps)
)(AppNavigator)
