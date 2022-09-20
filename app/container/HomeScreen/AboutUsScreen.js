import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderWihBackground from "../Components/HeaderWihBackground";



class AboutUsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>
                <HeaderWihBackground title={t("L:Aboutus")} Props={this.props.value}/>
                <Image source={require('../../images/SplashLogo.png')} style={{height:undefined,width:"40%",aspectRatio:1,alignSelf:"center",marginVertical:10}}/>
                <View style={{padding:20,}}>
                    <Text style={{fontSize:14,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite}}>{t("L:Aboutus")}</Text>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite}}>{t("L:aboutdoc")}</Text>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite}}>
                        {t("L:aboutUsLastLine")}</Text>

                </View>
                <View style={{flex:1}}/>
                <Text style={{fontSize:12,marginBottom:10,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite,textAlign:"center"}}>{t("L:Version")} 2.8.15</Text>
            </View>

        );
    }
}

export default withLanguage(AboutUsScreen)
