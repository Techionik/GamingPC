import React, {Component} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "./RootNavigation";
import {createStackNavigator} from "@react-navigation/stack"
import { View } from "react-native";
import { compose } from "redux";
import { connect } from "react-redux";
import { languageSelector, themeSelector } from "../redux/app/selectors";
import SplashContainer from "../container/SplashContainer";
import LoginScreen from "../container/AuthenticationScreens/LoginScreen";
import SignupScreen from "../container/AuthenticationScreens/SignupScreeen";
import ForgotPasswordScreen from "../container/AuthenticationScreens/ForgotPasswordScreen";
import VerificationScreen from "../container/AuthenticationScreens/VerifiactionScreen";
import HomeScreen from "../container/HomeScreen/HomeScreen";
import MapScreen from "../container/MapScreen";
import GenderSelectionScreen from "../container/HomeScreen/GenderSelectionScreen";
import ServicesScreen from "../container/HomeScreen/ServicesScren";
import ServiceStoreScreen from "../container/HomeScreen/ServiceStoreScreen";
import DrawerScreen from "../container/DrawerScreen";
import MyBookingScreens from "../container/HomeScreen/MyBookingScreen";
import LocationScreen from "../container/HomeScreen/LocationScreen";
import MyWalletScreen from "../container/HomeScreen/MyWalletScreen";
import MyPaymentScreen from "../container/HomeScreen/MyPaymentScreen";
import ProfileScreen from "../container/HomeScreen/ProfileScreen";
import SettingScreen from "../container/HomeScreen/SettingScreen";
import ShareFriendsScreen from "../container/HomeScreen/ShareFriendsScreen";
import ContactUsScreen from "../container/HomeScreen/ContactUsScreen";
import TermConditionScreen from "../container/HomeScreen/TermConditionScreen";
import drawer from "./drawer_ref";
import NavigationDrawerContainer from "./NavigationDrawerContainer";

import ScalingDrawer from 'react-native-scaling-drawer';
const  AppDrawerNavigator = createStackNavigator();
function DrawerNavigator() {
    return (

        <AppDrawerNavigator.Navigator   initialRouteName='HomeDrawer'>
            <AppDrawerNavigator.Screen name="HomeDrawer" component={homeStack} options={{ headerShown: false, gesturesEnabled: false }} />
        </AppDrawerNavigator.Navigator>
    );
}
const mapStateToProps2 = ({app}) => ({
    lang:app?.language?.lang,
    rtl:app?.language?.rtl,

});

@connect(
    mapStateToProps2,
    {}
)

export  class AppDrawerNavigation extends Component {

    //TODO:- constructor
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ScalingDrawer
                frontStyle={{backgroundColor: "black"}}
                ref={drawer}
                position={this.props.rtl?"right":'left'}
                content={
                    <NavigationDrawerContainer      drawer={drawer} navigation={this.props.navigation}/>
                }
                {...defaultScalingDrawerConfig}>
                <DrawerNavigator
                    onStateChange={(state) => console.log('New state is', state)}
                />
            </ScalingDrawer>
        );
    }

}
let defaultScalingDrawerConfig = {
    scalingFactor: 0.65,

    minimizeFactor: 0.5,

    swipeOffset: 20
};

const Stack = createStackNavigator()
const AuthStack=()=>{
    return(
        <Stack.Navigator initialRouteName={"LoginScreen"}>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"SignupScreen"} component={SignupScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ForgotPasswordScreen"} component={ForgotPasswordScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"VerificationScreen"} component={VerificationScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

const homeStack=()=>{
    return(
        <Stack.Navigator initialRouteName={"ServicesScreen"}>
            <Stack.Screen name={"GenderSelectionScreen"} component={GenderSelectionScreen } options={{headerShown: false}}/>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ServicesScreen"} component={ServicesScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ServiceStoreScreen"} component={ServiceStoreScreen} options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}

const AppStack = ({props}) => {
    return (
        <Stack.Navigator initialRouteName={"SplashContainer"}>
            <Stack.Screen name={"SplashContainer"} component={SplashContainer} options={{headerShown: false}}/>
            <Stack.Screen name={"AuthStack"} component={AuthStack} options={{headerShown: false}}/>
            <Stack.Screen name={"homeStack"} component={AppDrawerNavigation} options={{headerShown: false}}/>
            <Stack.Screen name={"MapScreen"} component={MapScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"DrawerScreen"} component={DrawerScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"MyBookingScreens"} component={MyBookingScreens} options={{headerShown: false}}/>
            <Stack.Screen name={"LocationScreen"} component={LocationScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"MyWalletScreen"} component={MyWalletScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"MyPaymentScreen"} component={MyPaymentScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"SettingScreen"} component={SettingScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ShareFriendsScreen"} component={ShareFriendsScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ContactUsScreen"} component={ContactUsScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"TermConditionScreen"} component={TermConditionScreen} options={{headerShown: false}}/>

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
