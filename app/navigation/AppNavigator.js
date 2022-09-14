import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "./RootNavigation";
import {createStackNavigator} from "@react-navigation/stack"
import { View } from "react-native";
import { compose } from "redux";
import { connect } from "react-redux";
import { languageSelector, themeSelector } from "../redux/app/selectors";
import SplashContainer from "../container/SplashContainer";




const Stack = createStackNavigator()
const AppStack = ({props}) => {
    return (
        <Stack.Navigator>

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
                <NavigationContainer
                    // linking={linking}
                    ref={navigationRef}
                    onReady={() => {
                        isReadyRef.current = true
                    }}>

                    {this.state.done
                        ? <AppStack props={this.props}/>
                        : <SplashContainer/>
                    }
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
