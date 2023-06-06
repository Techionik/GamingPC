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

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Color} from "../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import {OrdersScreen} from "../container/HomeScreen/OrdersScreen";
import {SignUpScreen} from "../container/AuthScreens/SignUpScreen";
import {ProfileScreen} from "../container/HomeScreen/ProfileScreen";
import {LocationEditScreen} from "../container/HomeScreen/LocationEditScreen";
import {AdminDashboard} from "../container/AdminScreens/AdminDashboard";
import {ActiveOrders} from "../container/AdminScreens/OrderScreens/ActiveOrders";
import {PickedUpOrders} from "../container/AdminScreens/OrderScreens/PickedUpOrders";
import {ConfirmOrders} from "../container/AdminScreens/OrderScreens/ConfirmOrders";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {SettingScreen} from "../container/AdminScreens/SettingScreen";
import {OrderStatus} from "../container/AdminScreens/OrderStatus";
import {CustomersScreen} from "../container/AdminScreens/CustomersScreen";
import {CustomerOrders} from "../container/AdminScreens/CustomerOrders";
import {AddServicesScreen} from "../container/AdminScreens/AddServicesScreen";
import {TermsConditionsScreen} from "../container/AdminScreens/Terms&ConditionsScreen";
import {AboutUsScreen} from "../container/AdminScreens/AboutUsScreen";
import {RiderHomeScreen} from "../container/RiderScreens/RiderHomeScreen";
import {AddRiderScreen} from "../container/AdminScreens/AddRiderScreen";
import {CurrentOrderScreen} from "../container/RiderScreens/CurrentOrderScreen";
import {DeliveryScreen} from "../container/RiderScreens/DeliveryScreen";
import {DeliverCurrentOrder} from "../container/RiderScreens/DeliverCurrentOrder";
import {AddOrderScreen} from "../container/HomeScreen/AddOrderScreen";
import {PendingOrderScreen} from "../container/AdminScreens/OrderScreens/PendingOrderScreen";
import {DeliveredOrders} from "../container/AdminScreens/OrderScreens/DeliveredOrders";


const Tab = createBottomTabNavigator();

const CustomerTabs=()=> {
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
                style: {backgroundColor: 'green'},
                showLabel: false
            }}
        >
            <Tab.Screen

                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (<AntDesign name="home" color={color} size={size}/>),
                }}
            />
            <Tab.Screen

                name="OrdersScreen"
                component={OrdersScreen}
                options={{
                    tabBarLabel: 'OrdersScreen',
                    tabBarIcon: ({color, size}) => (<Entypo name="text-document-inverted" color={color} size={size}/>),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, size}) => (<FontAwesome name="user-o" color={color} size={size}/>),
                }}
            />

        </Tab.Navigator>
    );
}


const AdminTabs=()=> {
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
                style: {backgroundColor: 'green'},
                showLabel: false
            }}
        >
            <Tab.Screen name="AdminDashBoard" component={AdminDashboard} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (<AntDesign name="home" color={color} size={size}/>),
            }}
            />
            <Tab.Screen name="Settings" component={SettingScreen} options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({color, size}) => (<AntDesign name="setting" color={color} size={size}/>),
            }}
            />
        </Tab.Navigator>
    );
}

const Orders=(props)=> {
    return (
        <Tab.Navigator
            initialRouteName="PickedUpOrders"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Color.primary,
            }}
            tabBarOptions={{
                inactiveTintColor: 'rgb(241,85,85)',
                activeTintColor: '#fff',
                style: {backgroundColor: 'green'},
                showLabel: true
            }}
        >
            <Tab.Screen name="PickedUpOrders" component={PickedUpOrders} options={{
                tabBarLabel: 'Pending',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="clock-alert-outline" color={color} size={size}/>),
            }}
            />
            <Tab.Screen name="ActiveOrders" component={ActiveOrders} options={{
                tabBarLabel: 'Active',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="progress-clock" color={color} size={size}/>),
            }}
            />
            <Tab.Screen name="ConfirmOrders" component={ConfirmOrders} options={{
                tabBarLabel: 'Ready',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="clock-check-outline" color={color} size={size}/>),
            }}
            />
        </Tab.Navigator>
    );
}

const AuthStack=()=>{
    return(
        <Stack.Navigator initialRouteName={"SocialSignupScreen"}>
            <Stack.Screen name={"SocialSignupScreen"} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"SignUpScreen"} component={SignUpScreen} options={{headerShown: false}}/>
        </Stack.Navigator>

    )
}

const CustomerStack=()=>{
    return(
        <Stack.Navigator initialRouteName={"CustomerTabs"}>
            <Stack.Screen name={"CustomerTabs"} component={CustomerTabs} options={{headerShown: false}}/>
            <Stack.Screen name={"PickedUpOrders"} component={Orders} options={{headerShown: false}}/>
            <Stack.Screen name={"CartScreen"} component={CartScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"LocationScreen"} component={DeliveryAddressSceen} options={{headerShown: false}}/>
            <Stack.Screen name={"AddToCartScreen"} component={AddToCartScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"AddOrderScreen"} component={AddOrderScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"LocationEditScreen"} component={LocationEditScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} options={{headerShown: false}}/>
        </Stack.Navigator>

    )
}

const AdminStack=()=>{
    return(
        <Stack.Navigator initialRouteName={"AdminDashboard"}>
            <Stack.Screen name={"AdminDashboard"} component={AdminTabs} options={{headerShown: false}}/>
            <Stack.Screen name={"PickedUpOrders"} component={Orders} options={{headerShown: false}}/>
            <Stack.Screen name={"AddRiderScreen"} component={AddRiderScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"PendingOrderScreen"} component={PendingOrderScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"DeliveredOrders"} component={DeliveredOrders} options={{headerShown: false}}/>
            <Stack.Screen name={"OrderStatus"} component={OrderStatus} options={{headerShown: false}}/>
            <Stack.Screen name={"CustomersScreen"} component={CustomersScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"CustomerOrders"} component={CustomerOrders} options={{headerShown: false}}/>
            <Stack.Screen name={"AddServicesScreen"} component={AddServicesScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} options={{headerShown: false}}/>
        </Stack.Navigator>

    )
}


function RiderBars(props) {
    return (
        <Tab.Navigator
            initialRouteName="RiderHomeScreen"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Color.primary,
            }}
            tabBarOptions={{
                inactiveTintColor: 'rgb(241,85,85)',
                activeTintColor: '#fff',
                style: {backgroundColor: 'green'},
                showLabel: false
            }}
        >
            <Tab.Screen name="RiderHomeScreen" component={RiderHomeScreen} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="clock-alert-outline" color={color} size={size}/>),
            }}
            />
            <Tab.Screen name="DeliveryScreen" component={DeliveryScreen} options={{
                tabBarLabel: 'Active',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="clock-check-outline" color={color} size={size}/>),
            }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, size}) => (<FontAwesome name="user-o" color={color} size={size}/>),
                }}
            />
        </Tab.Navigator>
    );
}
function RiderStack(props) {
    return (
        <Stack.Navigator initialRouteName={"RiderBars"}>
            <Stack.Screen name={"RiderBars"} component={RiderBars} options={{headerShown: false}}/>
            <Stack.Screen name={"CurrentOrderScreen"} component={CurrentOrderScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"DeliveryScreen"} component={DeliveryScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"DeliverCurrentOrder"} component={DeliverCurrentOrder} options={{headerShown: false}}/>
            <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}
function MainStack(props) {
    return (
        <Stack.Navigator initialRouteName={"SplashContainer"}>
            <Stack.Screen name={"SplashContainer"} component={SplashContainer} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}


const Stack = createStackNavigator()
const AppStack = ({}) => {
    return (
        <Stack.Navigator initialRouteName={"MainStack"}>
            <Stack.Screen name={"MainStack"} component={MainStack} options={{headerShown: false}}/>
            <Stack.Screen name={"AuthStack"} component={AuthStack} options={{headerShown: false}}/>
            <Stack.Screen name={"CustomerStack"} component={CustomerStack} options={{headerShown: false}}/>
            <Stack.Screen name={"AdminStack"} component={AdminStack} options={{headerShown: false}}/>
            <Stack.Screen name={"RiderStack"} component={RiderStack} options={{headerShown: false}}/>
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
