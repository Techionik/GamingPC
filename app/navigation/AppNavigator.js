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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SignUpScreen} from "../container/AuthScreens/SignUpScreen";
import {DashboardScreen} from "../container/HomeScreen/DashboardScreen";
import {PcBuildScreen} from "../container/HomeScreen/PcBuildScreen";


const Tab = createBottomTabNavigator();




// const Orders=(props)=> {
//     return (
//         <Tab.Navigator
//             initialRouteName="PickedUpOrders"
//             screenOptions={{
//                 headerShown: false,
//                 tabBarActiveTintColor: Color.primary,
//             }}
//             tabBarOptions={{
//                 inactiveTintColor: 'rgb(241,85,85)',
//                 activeTintColor: '#fff',
//                 style: {backgroundColor: 'green'},
//                 showLabel: true
//             }}
//         >
//             <Tab.Screen name="PickedUpOrders" component={PickedUpOrders} options={{
//                 tabBarLabel: 'Pending',
//                 tabBarIcon: ({color, size}) => (
//                     <MaterialCommunityIcons name="clock-alert-outline" color={color} size={size}/>),
//             }}
//             />
//             <Tab.Screen name="ActiveOrders" component={ActiveOrders} options={{
//                 tabBarLabel: 'Active',
//                 tabBarIcon: ({color, size}) => (
//                     <MaterialCommunityIcons name="progress-clock" color={color} size={size}/>),
//             }}
//             />
//             <Tab.Screen name="ConfirmOrders" component={ConfirmOrders} options={{
//                 tabBarLabel: 'Ready',
//                 tabBarIcon: ({color, size}) => (
//                     <MaterialCommunityIcons name="clock-check-outline" color={color} size={size}/>),
//             }}
//             />
//         </Tab.Navigator>
//     );
// }

const AuthStack=()=>{
    return(
        <Stack.Navigator initialRouteName={"LoginScreen"}>
            <Stack.Screen name={"LoginScreen"} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"SignUpScreen"} component={SignUpScreen} options={{headerShown: false}}/>
        </Stack.Navigator>

    )
}


function HomeStack(props) {
    return (
        <Stack.Navigator initialRouteName={"DashboardScreen"}>
            <Stack.Screen name={"DashboardScreen"} component={DashboardScreen} options={{headerShown: false}}/>
            <Stack.Screen name={"PcBuildScreen"} component={PcBuildScreen} options={{headerShown: false}}/>
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
            <Stack.Screen name={"HomeStack"} component={HomeStack} options={{headerShown: false}}/>

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
