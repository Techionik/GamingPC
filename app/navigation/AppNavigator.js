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

import HomeScreen from "../container/HomeScreen/HomeScreen";
import EarningScreen from "../container/HomeScreen/EarningScreen";
import JobsScreen from "../container/HomeScreen/JobsScreen";
import ForgotPasswordScreen from "../container/AuthenticationScreens/ForgotPasswordScreen";
import VerificationScreen from "../container/AuthenticationScreens/VerifiactionScreen";
import RateAndReviewScreen from "../container/HomeScreen/RateAndReviewScreen";
import SettingScreen from "../container/HomeScreen/SettingScreen";
import SendComplain from "../container/HomeScreen/SendComplain";
import TermConditionScreen from "../container/HomeScreen/TermConditionScreen";
import ProfileScreen from "../container/HomeScreen/ProfileScreen";
import AgrementScreen from "../container/HomeScreen/AgrementScreen";


import AttendenceScreen from "../container/HomeScreen/AttendanceScreen";
import LeaveScreen from "../container/HomeScreen/LeaveScreen";
import BreakTimeScreen from "../container/HomeScreen/BreakTimeScreen";
import LeavesScreen from "../container/HomeScreen/AdminScreens/LeavesScreen";
import PendingScreen from "../container/HomeScreen/AdminScreens/PendingScreen";
import PayRoleScreen from "../container/HomeScreen/AdminScreens/PayRoleScreen";
import ViewCurrentLeave from "../container/HomeScreen/AdminScreens/ViewCurrentLeave";
import AddNewPassword from "../container/AuthenticationScreens/AddNewPassword";
import SendLeaveScreen from "../container/HomeScreen/SendLeaveScreen";
import UpdatePasswordScreen from "../container/HomeScreen/UpdatePasswordScreen";
import ComplainsScreen from "../container/HomeScreen/AdminScreens/ComplainsScreen";
import ViewCurrentComplain from "../container/HomeScreen/AdminScreens/ViewCurrentComplain";
import EmployComplainsScreen from "../container/HomeScreen/EmployComplainsScreen";
import AllUserScreen from "../container/HomeScreen/AdminScreens/AllUserScreen";
import ViewCurrentUser from "../container/HomeScreen/AdminScreens/ViewCurrentUser";
import EditProfileScreen from "../container/HomeScreen/AdminScreens/EditProfileScreen";
import PendingLeaves from "../container/HomeScreen/AdminScreens/PendingLeaves";
import AcceptedLeaves from "../container/HomeScreen/AdminScreens/AcceptedLeaves";
import RejectedLeaves from "../container/HomeScreen/AdminScreens/RejectedLeaves";






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
            <Stack.Screen name={"SendComplain"} component={SendComplain} options={{headerShown: false}}/>
            <Stack.Screen name={"TermConditionScreen"} component={TermConditionScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"AttendenceScreen"} component={AttendenceScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"LeaveScreen"} component={LeaveScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"BreakTimeScreen"} component={BreakTimeScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"LeavesScreen"} component={LeavesScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"PendingScreen"} component={PendingScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"PayRoleScreen"} component={PayRoleScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ViewCurrentLeave"} component={ViewCurrentLeave} options={{headerShown: false}}/>
            <Stack.Screen name={"AddNewPassword"} component={AddNewPassword} options={{headerShown: false}}/>
            <Stack.Screen name={"SendLeaveScreen"} component={SendLeaveScreen} options={{headerShown: false}}/>

            <Stack.Screen name={"UpdatePasswordScreen"} component={UpdatePasswordScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ComplainsScreen"} component={ComplainsScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ViewCurrentComplain"} component={ViewCurrentComplain} options={{headerShown: false}}/>
            <Stack.Screen name={"EmployComplainsScreen"} component={EmployComplainsScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"AllUserScreen"} component={AllUserScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ViewCurrentUser"} component={ViewCurrentUser} options={{headerShown: false}}/>
            <Stack.Screen name={"EditProfileScreen"} component={EditProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"PendingLeaves"} component={PendingLeaves} options={{headerShown: false}}/>
            <Stack.Screen name={"AcceptedLeaves"} component={AcceptedLeaves} options={{headerShown: false}}/>
            <Stack.Screen name={"RejectedLeaves"} component={RejectedLeaves} options={{headerShown: false}}/>
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
