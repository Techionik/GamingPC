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
import MyBookingsComponent from "../Components/MyBookingsComponent";
import AddToCartComponent from "../Components/AddToCartComponent";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import CurveButtonComponent from "../Components/CurveButtonComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import FieldComponent from "../Components/FieldComponent";
import CheckBoxComponent from "../Components/CheckBoxComponent";
import BannerComponent from "../Components/BannerComponent";
import ButtonComponent from "../Components/ButtonComponent";



class PaymentMethodScreen extends React.Component {
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
                <HeaderWihBackground Location={false} title={t("L:PaymentMethod")} Drawer={true} Props={this.props.value} />
                <Image source={require('../../images/PaymentCard.png')} style={{height:undefined,width:"95%",marginVertical:10,alignSelf:"center",aspectRatio:1.9}}/>
               <View style={{paddingHorizontal:10,flex:1}}>
                <FieldComponent FieldStyle={{left:-20}} theme={colors}   Placeholder={t("L:AccountNumber")}/>
                <FieldComponent FieldStyle={{left:-20}} theme={colors}   Placeholder={t("L:AccountName")}/>
                <FieldComponent FieldStyle={{left:-20}} theme={colors}   Placeholder={"CCV"}/>
                   <CheckBoxComponent style={{alignSelf:"center",marginVertical:10}} title={t("L:SaveInfo")} colors={colors}/>
                   <View style={{flex:1}}/>
                   <ButtonComponent title={t("L:Payment")} Style={{backgroundColor:"#989393",marginVertical:0}} />
                   <ButtonComponent title={t("L:Cancel")} titleStyle={{color:colors.greyToWhite}} Style={{backgroundColor:"transparent",marginBottom:10,borderWidth:1,borderColor:"#E6E4E0"}} />
               </View>

            </View>

        );
    }
}

export default withLanguage(PaymentMethodScreen)
