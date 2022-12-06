import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";

import ButtonComponent from "../Components/ButtonComponent";
import ProfileFieldComponent from "../Components/ProfileFieldComponent";



class ContactUsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <Text style={{fontSize:16,marginVertical:20,fontFamily:Constants.Bold,alignSelf:"center",color:colors.blackAndWhite}}>{t("L:Contactus")}</Text>

                <Image source={require('../../images/ContactusImage.png')} style={{
                    height: undefined,
                    width: "50%",
                    marginVertical: 10,
                    alignSelf: "center",
                    aspectRatio: 1
                }}/>

                <View style={{flexGrow:1}}>
                <View style={{borderRadius:30,marginTop:30,backgroundColor:colors.BackgroundView,marginHorizontal:20,paddingHorizontal:10,paddingBottom:40}}>
                    <View style={{backgroundColor:Color.primary,borderRadius:10,paddingVertical:10,marginHorizontal:20,zIndex:2,elevation:2,top:-30,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:colors.blackAndWhite,fontSize:16,fontFamily:Constants.fontFamilyMedium}}>{t("L:SendusaMessage")}</Text>
                        <Text style={{color:colors.blackAndWhite,fontSize:12,fontFamily:Constants.fontFamilyMedium}}>{t("L:HelpText")}</Text>
                    </View>
                    <View style={{paddingHorizontal:20}}>
                  <ProfileFieldComponent title={t("L:Name")} placeholder={"Mudassir"} colors={colors}/>
                  <ProfileFieldComponent title={t("L:Email")} placeholder={"Mudassir@gmail.com"} colors={colors}/>
                  <ProfileFieldComponent title={t("L:Message")} placeholder={"Hey I just wanted to say that I’m new on Ahla and I’m just loving your services."} colors={colors}/>
                    </View>
                </View>
                </View>
                <ButtonComponent Style={{marginBottom:20}} title={t("L:Submit")}/>
            </View>

        );
    }
}

export default withLanguage(ContactUsScreen)
