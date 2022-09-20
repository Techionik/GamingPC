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
import Card from "../Components/Card";
import {Calendar} from "react-native-calendars/src/index";
import SettingsComponent from "../Components/SettingsComponent";


class AppointmentScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleValue: true,
            list: [{time: "10:00 am", status: 'booked'}, {time: "10:30 am", status: 'available'}, {
                time: "11:00 am",
                status: 'available'
            }, {time: "11:30 am", status: 'available'}, {time: "12:00 am", status: 'available'}, {
                time: "12:30 am",
                status: 'available'
            },]

        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderComponent back={true} backColor={'#40E0D0'} titleStyle={{color:colors.blackAndWhite}} Location={false} title={"Add To Cart"} Drawer={true} Props={this.props.value}/>

                <ScrollView style={{padding: 20}}>
                    <Card outerstyles={{  borderRadius:10}}>
                        <Calendar

                            theme={{
                                backgroundColor:'rgba(231,255,255,0.8)',
                                calendarBackground: 'rgba(231,255,255,0.0)',
                                textSectionTitleColor: '#000',
                                textSectionTitleDisabledColor: '#d9e1e8',
                                selectedDayBackgroundColor: '#40E0D0',
                                selectedDayTextColor: '#ffffff',
                                todayTextColor: '#00adf5',
                                dayTextColor: '#000',
                                textDisabledColor: '#d9e1e8',
                                dotColor: '#00adf5',
                                selectedDotColor: '#ffffff',
                                arrowColor: '#000',
                                disabledArrowColor: '#d9e1e8',
                                monthTextColor: '#000',
                                indicatorColor: 'blue',
                                textDayFontFamily: Constants.fontFamilyRegular,
                                textMonthFontFamily: Constants.fontFamilyBold,
                                textDayHeaderFontFamily: Constants.fontFamilyRegular,
                                textDayFontSize: 14,
                                textMonthFontSize: 14,
                                textDayHeaderFontSize: 12
                            }}
                            style={{backgroundColor: 'rgba(231,255,255,0.8)',borderRadius:10}}
                            // Initially visible month. Default = now
                            initialDate={'2022-09-20'}
                            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                            minDate={'2022-09-10'}
                            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                            maxDate={'2050-05-30'}
                            // Handler which gets executed on day press. Default = undefined
                            onDayPress={day => {
                                console.log('selected day', day);
                            }}
                            // Handler which gets executed on day long press. Default = undefined
                            onDayLongPress={day => {
                                console.log('selected day', day);
                            }}
                            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                            monthFormat={'yyyy MM'}
                            // Handler which gets executed when visible month changes in calendar. Default = undefined
                            onMonthChange={month => {
                                console.log('month changed', month);
                            }}
                            onPressArrowLeft={subtractMonth => subtractMonth()}
                            onPressArrowRight={addMonth => addMonth()}
                            disableAllTouchEventsForDisabledDays={true}
                            enableSwipeMonths={true}
                        />
                    </Card>
                    <Text style={{
                        fontSize: 14,
                        marginVertical: 10,
                        fontFamily: Constants.fontFamilyMedium,
                        color: colors.blackAndWhite,
                        includeFontPadding: false,
                        padding: 0
                    }}>Time Availability</Text>
                    <FlatList  data={this.state.list} style={{marginHorizontal: -5}} numColumns={2}
                              showsVerticalScrollIndicator={false} renderItem={({item, index}) =>
                        <TouchableOpacity disabled={item.status == 'booked'} onPress={() => {
                            let tempList = JSON.parse(JSON.stringify(this.state.list));
                            tempList[index].status = tempList[index].status == 'available' ? 'selected' : 'available';
                            this.setState({list: tempList})
                        }} style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: item.status == 'booked' ? 'rgba(231,255,255,0.8)' : colors.fieldBackgroundColor,
                            padding: 10,
                            borderRadius: 5,
                            flex: 0.5,
                            margin: 5
                        }}>
                            <Text style={{
                                color: colors.greyToWhite,
                                flex: 1,
                                fontFamily: Constants.fontFamilyRegular,
                                includeFontPadding: false,
                                padding: 0
                            }}>{item.time}</Text>
                            {item.status == 'booked' ? <Text style={{color: 'red', fontSize: 10}}>Booked</Text> :
                                <View style={{
                                    backgroundColor: '#fff',
                                    borderColor: Color.primary,
                                    height: 15,
                                    width: 15,
                                    borderWidth: 1,
                                    borderRadius: 7,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {item.status == 'selected' && <View style={{
                                        height: 7,
                                        width: 7,
                                        borderRadius: 7,
                                        backgroundColor: Color.primary
                                    }}/>}
                                </View>
                            }
                        </TouchableOpacity>
                    }/>

                    <SettingsComponent
                        style={{marginVertical:10}}
                        value={this.state.toggleValue}
                        onTogglePress={(toggleValue) => {
                            this.setState({toggleValue: toggleValue})
                        }}
                        leftTitle={<Text style={{fontSize: 10}}>on</Text>}
                        rightTitle={<Text style={{fontSize: 10}}>off</Text>}
                        trackBar={{
                            height: 20,
                            paddingRight: 5,
                            width: 50,
                            borderActiveColor: Color.primary,
                            borderInActiveColor: "#787676",
                            borderWidth: 3,
                            inActiveBackgroundColor: "#787676",
                            activeBackgroundColor: Color.primary
                        }}
                        activeStyle={{
                            height: 20,
                            width: 20,
                            inActiveBackgroundColor: "#fff",
                            activeBackgroundColor: "#fff"
                        }} colors={colors} title={"Choose Worker (Optional )"} toogle={true}/>
                    {this.state.toggleValue&&

                        <FlatList contentContainerStyle={{flex:1,paddingBottom:50,}} data={this.state.list} renderItem={({item, index}) =>
                        <TouchableOpacity
                            disabled={item.status == 'booked'} onPress={() => {
                            let tempList = JSON.parse(JSON.stringify(this.state.list));
                            tempList[index].status = tempList[index].status == 'available' ? 'selected' : 'available';
                            this.setState({list: tempList})
                        }}
                            style={{flexDirection: "row", alignItems: "center", paddingVertical: 5}}>
                            <Image source={require('../../images/ProfileImage.png')}
                                   style={{height: 70, width: 70, borderRadius: 35}}/>
                            <View style={{marginLeft: 10, marginVertical: 5, flex: 1}}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: Constants.fontFamilyMedium,
                                    color: colors.blackAndWhite,
                                    includeFontPadding: false,
                                    padding: 0
                                }}>Mina Julie</Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: Constants.fontFamilyRegular,
                                    color: colors.blackAndWhite,
                                    includeFontPadding: false,
                                    padding: 0
                                }}>Level : Senior Expert</Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: Constants.fontFamilyBold,
                                    color: item.status == 'booked' ? "red" : "#12DC3E",
                                    includeFontPadding: false,
                                    padding: 0
                                }}>{item.status}</Text>
                            </View>
                            <View style={{
                                backgroundColor: '#fff',
                                borderColor: Color.primary,
                                height: 15,
                                width: 15,
                                borderWidth: 1,
                                borderRadius: 7,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {item.status == 'selected' && <View style={{
                                    height: 7,
                                    width: 7,
                                    borderRadius: 7,
                                    backgroundColor: Color.primary
                                }}/>}
                            </View>

                        </TouchableOpacity>

                    }/>}


                </ScrollView>


            </View>

        );
    }
}

export default withLanguage(AppointmentScreen)
