import React from 'react'
import {Text, StyleSheet, Image, View} from 'react-native'
import { scale } from '../ScalingUtils'
import Constants from '../common/Constants'
import withLanguage from "../config/withLanguage";


class SplashContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.replace('AuthStack');
        },1000)
    }

    render () {
    const {value} = this.props;
    const {t} = value;

    return (
            <View style={{ flex: 1 ,justifyContent:"center",alignItems:'center',backgroundColor:'#FFF'}}>
                <Image style={styles.gifStyle}  source={require('../images/SplashLogo.png')}/>
            </View>
    )
  }
}

const styles=StyleSheet.create({
    gifStyle:{
        width:"60%",
        height:undefined,
        aspectRatio:1
    }
})
export default withLanguage(SplashContainer)
