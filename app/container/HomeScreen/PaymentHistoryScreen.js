import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TextInput, TouchableOpacity,
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
import PaymentHistoryComponent from "../Components/PaymentHistoryComponent";



class PaymentHistoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todayList:[
                {

                    image:require("../../images/slonLogoImage.png"),
                    title:"The Big Tease Saloon",
                    task:"Beard and Cutting",
                    time:"07:36 AM",
                    rate:"- 75",

                },
                {

                    image:require("../../images/slonLogoImage.png"),
                    title:"The Hair Pantry",
                    task:"Hair Wash",
                    time:"09:39 AM",
                    rate:"- 62",

                },
                {

                    image:require("../../images/slonLogoImage.png"),
                    title:"Ilya Vasil",
                    task:"Ahla Wallet • 5318",
                    time:"09:39 AM",
                    rate:"+ 96",

                },
                {

                    image:require("../../images/slonLogoImage.png"),
                    title:"The Hair Pantry",
                    task:"Hair Wash",
                    time:"09:39 AM",
                    rate:"- 62",

                },
            ],
            mondayList:[
                {

                    image:require("../../images/slonLogoImage.png"),
                    title:"The Hair Pantry",
                    task:"Hair Wash",
                    time:"09:39 AM",
                    rate:"- 62",

                },
            ]
        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>
                <HeaderWihBackground Location={false}  title={"Payment History"} Drawer={true} Props={this.props.value} />

                <FieldComponent Icon={require('../../images/SearchIcon.png')} theme={colors} Style={{zIndex:2,top:-25,marginHorizontal:30}} Placeholder={"Search"} />

                <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow:1,}}>
                <Text style={{color:colors.greyToWhite,marginHorizontal:30,marginVertical:10,fontFamily:Constants.fontFamilyRegular,fontSize:15}}>TODAY</Text>

                <FlatList data={this.state.todayList} style={{paddingTop:20,paddingHorizontal:15,marginHorizontal:15,backgroundColor:colors.fieldBackgroundColor}}  renderItem={({item, index}) =>
                    <PaymentHistoryComponent image={item.image} colors={colors} title={item.title} time={item.time} rate={item.rate} task={item.task} />
                }/>

                <Text style={{color:colors.greyToWhite,marginHorizontal:30,marginVertical:10,fontFamily:Constants.fontFamilyRegular,fontSize:15}}>MONDAY</Text>

                <FlatList data={this.state.mondayList} style={{paddingTop:20,paddingHorizontal:15,marginHorizontal:15,backgroundColor:colors.fieldBackgroundColor}}  renderItem={({item, index}) =>
                    <PaymentHistoryComponent image={item.image} colors={colors} title={item.title} time={item.time} rate={item.rate} task={item.task} />
                }/>
                </ScrollView>
            </View>

        );
    }
}

export default withLanguage(PaymentHistoryScreen)
