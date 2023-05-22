import React from 'react'
import {Text, StyleSheet, Image, View, ImageBackground} from 'react-native'
import Constants from '../common/Constants'
import withLanguage from "../config/withLanguage";
import {connect} from "react-redux";
import {Color} from "../common";
const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo:user?.userInfo
});

@connect(
    mapStateToProps,
)
class SplashContainer extends React.Component {
    constructor(props) {
        super(props);
    }
//this component  check if user already login then the component will move the user on HomeScreen
    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate("SocialSignupScreen")
            // if (this.props?.userInfo?.Email===""||this.props?.userInfo===undefined) {
            //     // this.props.navigation.replace('LoginScreen');
            // } else {
            //     // this.props.navigation.replace('HomeScreen')
            //
            // }
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
                <View style={{paddingHorizontal:30,justifyContent:"center"}}>
                    <Image style={{
                        height: undefined,
                        width: "50%",
                        aspectRatio: 0.88,
                        alignSelf: 'center',
                    }} source={require('../images/Logo.png')}/>
                <Text style={{fontSize:26,fontFamily:Constants.fontFamilyBold,color:"#fff",alignSelf:"center",}}>Enhancer</Text>
                </View>
            </View>
        )
    }
}

export default SplashContainer;
