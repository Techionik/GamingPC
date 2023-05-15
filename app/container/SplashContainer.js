import React from 'react'
import {Text, StyleSheet, Image, View, ImageBackground} from 'react-native'
import Constants from '../common/Constants'
import withLanguage from "../config/withLanguage";
import {connect} from "react-redux";
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
            if (this.props?.userInfo?.Email===""||this.props?.userInfo===undefined) {
                this.props.navigation.replace('LoginScreen');
            } else {
                this.props.navigation.replace('HomeScreen')

            }
        }, 2000)
    }
    render() {
        const {value} = this.props;
        const {t, themeColor} = value;
        const {colors} = themeColor

        return (
            //backGround Image
            <ImageBackground source={require('../images/SplashLogo.png')} style={{
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: colors.screenBackgroundColor
            }}>
                <View style={{paddingHorizontal:30,justifyContent:"center"}}>
                <Image style={{
                    height: undefined,
                    width: "100%",
                    aspectRatio: 6.28,
                    alignSelf: 'center',
                }} source={require('../images/LoginLogo.png')}/>
                <Text style={{fontSize:14,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite,alignSelf:"center",}}>FROM EXCELLENCE TO INNOVATION</Text>
                </View>
            </ImageBackground>
        )
    }
}

export default withLanguage(SplashContainer)
