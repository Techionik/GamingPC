import React from 'react'
import {Text, StyleSheet, Image, View, ImageBackground} from 'react-native'
import Constants from '../common/Constants'
import withLanguage from "../config/withLanguage";
import {connect} from "react-redux";
import {Color} from "../common";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo
});

@connect(
    mapStateToProps,
)
class SplashContainer extends React.Component {
    constructor(props) {
        super(props);
    }

//this component  check if user already login then the component will move the user on OrderScreen
    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.replace("AuthStack")
            if (this.props?.userInfo?.Role === "" || this.props?.userInfo === undefined) {
                this.props.navigation.replace('AuthStack');
            } else {
                    this.props.navigation.replace('AuthStack')


            }
        }, 2000)
    }

    render() {
        return (
            //backGround Image
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: Color.primary
            }}>
                <View style={{flex:1,paddingHorizontal: 30, justifyContent: "center"}}>
                    <Image style={{
                        height: undefined,
                        width: "50%",
                        aspectRatio: 2.81,
                        alignSelf: 'center',
                    }} source={require('../images/Logo.png')}/>
                </View>
            </View>
        )
    }
}

export default SplashContainer;
