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
        const aboutus="An Ahla agreement outlines the website administrator’s rules regarding user behavior and provides information about the actions the website administrator can and will perform.\n" +
            "Essentially, your terms and conditions text is a contract between your website and its users. In the event of a legal dispute, arbitrators will look at it to determine whether each party acted within their rights.\n" +
            "\n" +
            "Legal terms are an agreement between you and your users. Legal terms establish the rights and responsibilities of both parties. Those rights and responsibilities include any rules that users must agree to when using your website or mobile.\n" +
            "\n" +
            "Termly’s legal terms generator is designed to help you comply with contract laws. While our legal terms generator may help you comply with other similarly drafted laws, it is not specifically written to comply with the laws of any other country. We recommend consulting with a local attorney for any country not yet specifically included in our current offerings.\n"
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>
                <HeaderWihBackground title={"About us"} Props={this.props.value}/>
                <Image source={require('../../images/SplashLogo.png')} style={{height:undefined,width:"40%",aspectRatio:1,alignSelf:"center",marginVertical:10}}/>
                <View style={{padding:20,}}>
                    <Text style={{fontSize:14,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite}}>About Us</Text>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite}}>{aboutus}</Text>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite}}>
                        Users are individuals that visit your website. They can be external or internal. </Text>

                </View>
                <View style={{flex:1}}/>
                <Text style={{fontSize:12,marginBottom:10,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite,textAlign:"center"}}>Version 2.8.15</Text>
            </View>

        );
    }
}

export default withLanguage(AboutUsScreen)
