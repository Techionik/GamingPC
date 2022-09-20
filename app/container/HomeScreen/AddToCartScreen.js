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



class AddToCartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList:[
                {
                    image:require("../../images/S2.png"),
                    title:"Hair Wash ",
                    numberofPerson:"4",
                    price:"434",
                    quantity:"4",

                },
                {
                    image:require("../../images/S1.png"),
                    title:"Hair Balyage",
                    numberofPerson:"2",
                    price:"234",
                    quantity:"2",

                },
                {
                    image:require("../../images/S2.png"),
                    title:"Nails Art",
                    numberofPerson:"1",
                    price:"434",
                    quantity:"1",

                },


            ]
        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
                <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>
                    <HeaderWihBackground Location={false} title={t("L:AddToCart")} Drawer={true} Props={this.props.value} />


                    <FlatList showsVerticalScrollIndicator={false}  style={{marginHorizontal:15,marginBottom:20}} data={this.state.itemList}  renderItem={({item, index}) =>
                       <AddToCartComponent image={item.image} quantity={item.quantity} price={item.price} numberofPerson={item.numberofPerson} title={item.title} colors={colors}/>
                    }/>
                    <CurveButtonComponent children={<AntDesign name={"arrowright"} color={"#fff"} size={30} style={{marginLeft:10}}/>} title={"Process to Checkout"}/>

                </View>

        );
    }
}

export default withLanguage(AddToCartScreen)
