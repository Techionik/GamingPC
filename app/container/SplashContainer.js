import React from 'react'
import {Text, StyleSheet, Image, View} from 'react-native'
import {scale} from '../ScalingUtils'
import Constants from '../common/Constants'
import withLanguage from "../config/withLanguage";
import {connect} from "react-redux";
import {getData, login} from "../redux/user/operations";
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

    componentDidMount() {

        setTimeout(() => {
            if (this.props?.userInfo?.Email===""||this.props?.userInfo===undefined) {
                this.props.navigation.replace('LoginScreen');
            } else {
                this.props.navigation.replace('HomeScreen')

            }
        }, 1000)
    }

    render() {
        const {value} = this.props;
        const {t, themeColor} = value;
        const {colors} = themeColor

        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: colors.screenBackgroundColor
            }}>
                <Image style={styles.gifStyle} source={require('../images/SplashLogo.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gifStyle: {
        width: "60%",
        height: undefined,
        aspectRatio: 0.92
    }
})
export default withLanguage(SplashContainer)
