import React, {Component, useEffect} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {isReadyRef, navigationRef} from "./RootNavigation";
import {createStackNavigator} from "@react-navigation/stack"
import {View} from "react-native";
import {compose} from "redux";
import {connect} from "react-redux";
import {languageSelector, themeSelector} from "../redux/app/selectors";
import SplashContainer from "../container/SplashContainer";
import {LoginScreen} from "../container/AuthScreens/LoginScreen";
import {CartScreen} from "../container/CartScreens/CartScreen";
import {HomeScreen} from "../container/HomeScreen/HomeScreen";
import {DeliveryAddressSceen} from "../container/HomeScreen/DeliveryAddressSceen";
import {AddToCartScreen} from "../container/HomeScreen/AddToCartScreen";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Color} from "../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import {OrdersScreen} from "../container/HomeScreen/OrdersScreen";
import {SignUpScreen} from "../container/AuthScreens/SignUpScreen";
import {ProfileScreen} from "../container/HomeScreen/ProfileScreen";
import {WashingIron} from "../container/HomeScreen/WahingIron";
import {Iron} from "../container/HomeScreen/Iron";
import {DryClean} from "../container/HomeScreen/DryClean";
import {LocationEditScreen} from "../container/HomeScreen/LocationEditScreen";
import {AdminDashboard} from "../container/AdminScreens/AdminDashboard";
import {ActiveOrders} from "../container/AdminScreens/OrderScreens/ActiveOrders";
import {PendingOrders} from "../container/AdminScreens/OrderScreens/PendingOrders";
import {ConfermOreders, ConfirmOrders} from "../container/AdminScreens/OrderScreens/ConfirmOrders";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {SettingScreen} from "../container/AdminScreens/SettingScreen";
import {OrderStatus} from "../container/AdminScreens/OrderStatus";
import {CustomersScreen} from "../container/AdminScreens/CustomersScreen";
import {CustomerOrders} from "../container/AdminScreens/CustomerOrders";
import {AddServicesScreen} from "../container/AdminScreens/AddServicesScreen";
import {TermsConditionsScreen} from "../container/AdminScreens/Terms&ConditionsScreen";
import {AboutUsScreen} from "../container/AdminScreens/AboutUsScreen";


const Tab = createBottomTabNavigator();

function CustomerTabs() {
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
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="user-o" color={color} size={size} />),}}
            />

        </Tab.Navigator>
    );
}


function AdminTabs() {
    return (
        <Tab.Navigator
            initialRouteName="AdminDashBoard"
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
            <Tab.Screen name="AdminDashBoard" component={AdminDashboard} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (<AntDesign name="home" color={color} size={size} />),}}
            />
            <Tab.Screen name="Settings" component={SettingScreen} options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (<AntDesign name="setting" color={color} size={size} />),}}
            />
        </Tab.Navigator>
    );
}
function Orders(props) {
    return (
        <Tab.Navigator
            initialRouteName="PendingOrders"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Color.primary,
            }}
            tabBarOptions={{
                inactiveTintColor: 'rgb(241,85,85)',
                activeTintColor: '#fff',
                style: { backgroundColor: 'green' },
                showLabel: true
            }}
        >
            <Tab.Screen name="PendingOrders" component={PendingOrders} options={{
                tabBarLabel: 'Pending',
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="clock-alert-outline" color={color} size={size} />),}}
            />
            <Tab.Screen name="ActiveOrders" component={ActiveOrders} options={{
                tabBarLabel: 'Active',
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="progress-clock" color={color} size={size} />),}}
            />
            <Tab.Screen name="ConfirmOrders" component={ConfirmOrders} options={{
                tabBarLabel: 'Ready',
                tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="clock-check-outline" color={color} size={size} />),}}
            />
        </Tab.Navigator>
    );
}
const Stack = createStackNavigator()

const AppStack = ({}) => {
    return (
        <Stack.Navigator initialRouteName={"SplashContainer"}>
            <Stack.Screen name={"SplashContainer"} component={SplashContainer} options={{headerShown: false}}/>
            <Stack.Screen name={"SocialSignupScreen"} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"HomeScreen"} component={CustomerTabs} options={{headerShown: false}}/>
            <Stack.Screen name={"AdminDashboard"} component={AdminTabs} options={{headerShown: false}}/>
            <Stack.Screen name={"PendingOrders"} component={Orders} options={{headerShown: false}}/>
            <Stack.Screen name={"CartScreen"} component={CartScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"LocationScreen"} component={DeliveryAddressSceen} options={{headerShown: false}}/>
            <Stack.Screen name={"AddToCartScreen"} component={AddToCartScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"SignUpScreen"} component={SignUpScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"WashingIron"} component={WashingIron} options={{headerShown: false}}/>
            <Stack.Screen name={"Iron"} component={Iron} options={{headerShown: false}}/>
            <Stack.Screen name={"DryClean"} component={DryClean} options={{headerShown: false}}/>
            <Stack.Screen name={"LocationEditScreen"} component={LocationEditScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"OrderStatus"} component={OrderStatus} options={{headerShown: false}}/>
            <Stack.Screen name={"CustomersScreen"} component={CustomersScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"CustomerOrders"} component={CustomerOrders} options={{headerShown: false}}/>
            <Stack.Screen name={"AddServicesScreen"} component={AddServicesScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"TermsConditionsScreen"} component={TermsConditionsScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"AboutUsScreen"} component={AboutUsScreen} options={{headerShown: false}}/>
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
