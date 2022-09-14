import React from 'react'
import {Text, StyleSheet, Image, View} from 'react-native'
import { scale } from '../ScalingUtils'
import Constants from '../common/Constants'
import withLanguage from "../config/withLanguage";

class SplashContainer extends React.Component {


  render () {
    const {value} = this.props;
    const {t} = value;

    return (
            <View style={{ flex: 1 ,justifyContent:"center",alignItems:'center',backgroundColor:'#FFF'}}>
              <Text>{t('inBus:amout_paid')}</Text>
                <Image style={styles.gifStyle}  source={require('../images/Mesii.jpg')}/>
            </View>
    )
  }
}

const styles=StyleSheet.create({
    gifStyle:{
        width:"100%",
        height:undefined,
        aspectRatio:1
    }
})
export default withLanguage(SplashContainer)
