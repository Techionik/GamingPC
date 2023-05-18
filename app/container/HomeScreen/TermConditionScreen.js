import React from 'react'
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import CheckBoxComponent from "../Components/CheckBoxComponent";


class TermConditionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
        }
    }


    render() {
        const {t, language, themeColor} = this.props.value
        const {colors,key} = themeColor
        return (
            <ScrollView contentContainerStyle={{flex:1}} style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <View style={{
                    flex: 0.3,
                    backgroundColor: Color.primary,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30
                }}>
                    <HeaderComponent title={t("L:TermsandConditions")} Props={this.props.value}/>
                </View>
                <View style={{
                    flex:1,
                    zIndex: 2,
                    backgroundColor: colors.ScreenColorToDark,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingTop: 20,
                    top: -40,
                }}>

                    <View style={{
                        paddingTop: 30,
                        borderRadius: 15,
                        paddingHorizontal: 15,
                        paddingBottom:10,
                        backgroundColor: colors.fieldBackgroundColor,
                    }}>
                        <Image style={{
                            height: undefined,
                            width: "100%",
                            marginVertical:10,
                            aspectRatio: 6.28,
                            alignSelf: 'center',
                        }} source={key==="light"?require('../../images/LoginLogo.png'):require('../../images/DarkLogo.png')}/>
                        <Text style={{color:colors.whiteToDark,fontSize:14,fontFamily:Constants.fontFamilyBold}}>Summary</Text>
                        <Text style={{color:colors.whiteToDark,fontSize:12,fontFamily:Constants.fontFamilyRegular}}>Terms and Conditions are a set of rules and agreements that govern the relationship between a company or service provider and its customers or users. They are legally binding and serve to protect the interests of both the business and the consumers</Text>
                        <Text style={{color:colors.whiteToDark,fontSize:14,fontFamily:Constants.fontFamilyBold}}>Legal Terms</Text>
                        <Text style={{color:colors.whiteToDark,fontSize:12,fontFamily:Constants.fontFamilyRegular}}>Legal Terms refer to the specific language and vocabulary used in legal documents, such as contracts, agreements, or terms and conditions. They are used to ensure clarity, accuracy, and enforceability of the legal agreements.</Text>
                        <Text style={{color:colors.whiteToDark,fontSize:14,fontFamily:Constants.fontFamilyBold}}>Local Renovators Legal Term Generator</Text>
                        <Text style={{color:colors.whiteToDark,fontSize:12,fontFamily:Constants.fontFamilyRegular}}>Legal Term Generators can be useful tools for generating basic terms and conditions or contracts. However, they may not address the specific requirements and nuances of each jurisdiction. It's important to consult with a legal professional who specialize in contract law and consumer protection to ensure compliance with relevant laws and regulations.</Text>
                        <Text style={{color:colors.whiteToDark,fontSize:14,fontFamily:Constants.fontFamilyBold}}>What are users?</Text>
                        <Text style={{color:colors.whiteToDark,fontSize:12,fontFamily:Constants.fontFamilyRegular}}>Users are individuals who access or interact with your company.</Text>
                        <CheckBoxComponent style={{margin:10}} title={t("L:agrementSucces")} colors={colors}/>
                        <CheckBoxComponent style={{marginLeft:10,marginBottom:10}} title={t("L:agrementSucces2")} colors={colors}/>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

export default withLanguage(TermConditionScreen)

