import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import ProfileFieldComponent from "../Components/ProfileFieldComponent";
import ButtonComponent from "../Components/ButtonComponent";



class ProfileScreen extends React.Component {
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
                <ImageBackground source={require('../../images/BackgroundLarge.png')}
                                 style={{height: undefined, width: "100%", aspectRatio: 1.3}}>
                    <HeaderComponent titleStyle={{color: "#fff"}} title={t("L:Profile")} Drawer={true}
                                     Location={false} Props={this.props.value}/>
                    <Image source={require('../../images/ProfileImage.png')} style={{marginTop:20,height:undefined,width:"17%",alignSelf:"center",aspectRatio:1}}/>
                    <Text style={{alignSelf:"center",marginTop:20,fontSize:14,fontFamily:Constants.Bold,color:"#fff"}}>Mitchels Galeria</Text>
                    <Text style={{alignSelf:"center",fontSize:14,fontFamily:Constants.Bold,color:"#fff",textDecorationLine:"underline"}}>Mitchelsgaleria@example.com</Text>
                </ImageBackground>

                <View style={{padding:20}}>
                    <Text style={{fontSize:14,marginBottom:10,fontFamily:Constants.fontFamilyMedium,color:colors.greyToWhite}}>{t("L:EditProfile")}</Text>
                    <ProfileFieldComponent profile={true} title={t("L:FistName")} placeholder={"Mitchels Galeria"} colors={colors}/>
                    <ProfileFieldComponent profile={true} title={t("L:LastName")} placeholder={"Galeria"} colors={colors}/>
                    <ProfileFieldComponent profile={true} title={t("L:Email")} placeholder={"MitchelsGaleria@example.com"} colors={colors}/>
                    <ProfileFieldComponent profile={true} title={t("Auth:Password")} placeholder={"*******"} colors={colors}/>
                    <ProfileFieldComponent profile={true} title={t("L:Contactus")} placeholder={"0335-88776-77676"} colors={colors}/>
                    <View style={{flex:1}}/>
                    <ButtonComponent title={t("L:Saved")} Style={{marginTop:20}}/>
                </View>

            </View>

        );
    }
}

export default withLanguage(ProfileScreen)
