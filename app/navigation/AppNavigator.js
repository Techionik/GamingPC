import React, {Component} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {isReadyRef, navigationRef} from "./RootNavigation";
import {createStackNavigator} from "@react-navigation/stack"
import {View} from "react-native";
import {compose} from "redux";
import {connect} from "react-redux";
import {languageSelector, themeSelector} from "../redux/app/selectors";
import SplashContainer from "../container/SplashContainer";
import {SocialSignupScreen} from "../container/AuthScreens/SocialSignupScreen";
import {OrderScreen} from "../container/HomeScreen/OrderScreen";
import {CartScreen} from "../container/CartScreens/CartScreen";
import {HomeScreen} from "../container/HomeScreen/HomeScreen";
import {AddDetailScreen} from "../container/HomeScreen/AddDetailScreen";



const Stack = createStackNavigator()

const AppStack = ({}) => {
    return (
        <Stack.Navigator initialRouteName={"SplashContainer"}>
            <Stack.Screen name={"SplashContainer"} component={SplashContainer} options={{headerShown: false}}/>
            <Stack.Screen name={"SocialSignupScreen"} component={SocialSignupScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"OrderScreen"} component={OrderScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"CartScreen"} component={CartScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"AddDetailScreen"} component={AddDetailScreen} options={{headerShown: false}}/>

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
