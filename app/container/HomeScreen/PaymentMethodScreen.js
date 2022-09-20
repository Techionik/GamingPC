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
                <HeaderWihBackground Location={false} title={"Add To Cart"} Drawer={true} Props={this.props.value} />
                <Image source={require('../../images/PaymentCard.png')} style={{height:undefined,width:"95%",marginVertical:10,alignSelf:"center",aspectRatio:1.9}}/>
            </View>

        );
    }
}

export default withLanguage(PaymentMethodScreen)
