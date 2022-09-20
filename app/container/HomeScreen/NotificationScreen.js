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
import NotificationComponent from "../Components/NotificationComponent";



class NotificationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todayList:[
                {
                    name:"Big Tease Salon",
                    notification:"SALE is LIVE now Have a look on it .",
                    time:"9:01am",
                    isPaid:false,
                },
                {
                    name:"Hair Pantry",
                    notification:"SALE is LIVE now Have a look on it .",
                    time:"9:01am",
                    isPaid:true,
                },
                {
                    name:"Big Tease Salon",
                    notification:"SALE is LIVE now Have a look on it .",
                    time:"9:01am",
                    isPaid:false,
                },

            ],
            yesterdayList:[
                {
                    name:"Big Tease Salon",
                    notification:"SALE is LIVE now Have a look on it .",
                    time:"9:01am",
                    isPaid:false,
                },
                {
                    name:"Hair Pantry",
                    notification:"SALE is LIVE now Have a look on it .",
                    time:"9:01am",
                    isPaid:true,
                },
                {
                    name:"Big Tease Salon",
                    notification:"SALE is LIVE now Have a look on it .",
                    time:"9:01am",
                    isPaid:false,
                },

            ]
        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
                <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>

                    <HeaderComponent Location={false} title={t("L:Notification")} Drawer={true} Props={this.props.value} />

                    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:15,marginVertical:20}}>
                    <Text style={{fontSize:14,fontFamily:Constants.fontFamilyBold,color:colors.greyToWhite,marginLeft:3}}>{t("L:Today")}</Text>

                        <FlatList data={this.state.todayList}  renderItem={({item, index}) =>
                            <NotificationComponent Props={this.props.value} notification={item.notification} name={item.name} time={item.time} isPaid={item.isPaid} colors={colors} />

                        }/>

                        <Text style={{fontSize:14,fontFamily:Constants.fontFamilyBold,color:colors.greyToWhite,marginLeft:3,marginTop:20,}}>{t("L:Yesterday")}</Text>

                        <FlatList data={this.state.yesterdayList} style={{marginBottom:20}}   renderItem={({item, index}) =>
                            <NotificationComponent Props={this.props.value} notification={item.notification} name={item.name} time={item.time} isPaid={item.isPaid} colors={colors} />
                        }/>


                    </ScrollView>
                </View>

        )
    }
}

export default withLanguage(NotificationScreen)
