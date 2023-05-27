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
import {LocationScreen} from "../container/HomeScreen/LocationScreen";
import {AddToCartScreen} from "../container/HomeScreen/AddToCartScreen";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BlurView} from "@react-native-community/blur";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Color} from "../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import {OrdersScreen} from "../container/HomeScreen/OrdersScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Color.primary,
            }}
            tabBarOptions={{
                inactiveTintColor: '#dfdfdf',
                activeTintColor: '#fff',
                style: { backgroundColor: 'green' },
                showLabel: false
            }}
        >
            <Tab.Screen

                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (<AntDesign name="home" color={color} size={size} />),}}
            />
            <Tab.Screen
                name="OrdersScreen"
                component={OrdersScreen}
                options={{
                    tabBarLabel: 'OrdersScreen',
                    tabBarIcon: ({ color, size }) => (<Entypo name="text-document-inverted" color={color} size={size} />),}}
            />
            <Tab.Screen
                name="Profile"
                component={OrderScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="user-o" color={color} size={size} />),}}
            />


        </Tab.Navigator>
    );
}
const Stack = createStackNavigator()

const AppStack = ({}) => {
    return (
        <Stack.Navigator initialRouteName={"SplashContainer"}>
            <Stack.Screen name={"SplashContainer"} component={SplashContainer} options={{headerShown: false}}/>
            <Stack.Screen name={"SocialSignupScreen"} component={SocialSignupScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"HomeScreen"} component={MyTabs} options={{headerShown: false}}/>

            <Stack.Screen name={"CartScreen"} component={CartScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"AddDetailScreen"} component={AddDetailScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"LocationScreen"} component={LocationScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"AddToCartScreen"} component={AddToCartScreen} options={{headerShown: false}}/>
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
