import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import MyBookingsComponent from "../Components/MyBookingsComponent";
import AddToCartComponent from "../Components/AddToCartComponent";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import {Banner} from "./HomeScreen";
import BannerComponent from "../Components/BannerComponent";



class OffersScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList:[
                {
                    image:require("../../images/B1.png"),
                    title:"Hair Wash ",
                    off:"40",
                    color:"#F28F8F",

                },
                {
                    image:require("../../images/B2.png"),
                    off:"25",
                    color:"#40E080",

                },
                {
                    image:require("../../images/B3.png"),
                    off:"14",
                    color:"#8FABF2",

                }, {
                    image:require("../../images/B4.png"),
                   off:"10",
                    color:"#FFD15C",


                }


            ]
        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
                <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>
                    <HeaderWihBackground Location={false} title={"Add To Cart"} Drawer={true} Props={this.props.value} />


                    <FlatList showsVerticalScrollIndicator={false}  style={{marginHorizontal:15,marginVertical:20}} data={this.state.itemList}  renderItem={({item, index}) =>
                       <BannerComponent titleStyle={{color:item.color}} off={item.off} style={{backgroundColor:item.color,marginBottom:10}} image={item.image} Props={this.props.value}/>
                    }/>
                </View>

        );
    }
}
export default withLanguage(OffersScreen)
