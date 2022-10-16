import React, {useState} from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Dropdown} from "react-native-material-dropdown";
import Card from "../Components/Card";

const analysisOption = [{value: "Earnings"}, {value: "Reviews"},{value: "Performance"}, {value: "Customers"}, {value: "Overview"}];


class AnalyseScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "Earnings"
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        const {selectedOption} = this.state
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <View style={{
                    flex: 0.3,
                    backgroundColor: Color.primary,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30
                }}>
                    <HeaderComponent title={t("L:Analysis")} Props={this.props.value}/>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: colors.ScreenColorToDark,
                    zIndex: 2,
                    top: -25,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingTop: 20

                }}>
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 20,}}>
                        <Text style={{
                            fontSize: 16,
                            flex: 1,
                            includeFontPadding: false,
                            padding: 0,
                            fontFamily: Constants.fontFamilyBold,
                            color: colors.blackAndWhite
                        }}>{selectedOption == "Earnings" ? t("L:TodaysActivity") : selectedOption == "Reviews" ? t("L:LatestReviews") : selectedOption == "Performance" ? t("L:Performance") : selectedOption == "Customers" ? t("L:CustomersInformation") : selectedOption == "Overview" ? t("L:AnalyticalOverview"):null}</Text>
                        <Dropdown
                            itemColor={colors.blackAndWhite}
                            itemTextStyle={{color: colors.blackAndWhite}}
                            lineWidth={0}
                            pickerStyle={{backgroundColor: colors.BackgroundView, borderRadius: 10}}
                            color={colors.blackAndWhite}
                            fontSize={13}
                            placeholder={this.state.selectedOption}
                            baseColor={colors.blackAndWhite}
                            customTickIcon={<AntDesign name={"caretdown"} color={"#fff"}/>}
                            value={this.state.selectedOption}
                            placeholderTextColor={"grey"}
                            dropdownOffset={{top: 10, right: -10, left: -17}}
                            rippleCentered={true}
                            onChangeText={(value) => {

                                this.setState({selectedOption: value})
                            }}
                            containerStyle={{
                                paddingLeft: 20,
                                marginTop: 5,
                                backgroundColor: colors.lightGreyToBackground,
                                borderRadius: 10,
                                width: "40%",


                            }}
                            data={analysisOption}
                        />
                    </View>
                    {selectedOption == "Earnings" ? <TodayActivity t={t} colors={colors}/> : null}
                    {selectedOption == "Reviews" ? <LatestReview t={t} colors={colors}/> : null}
                    {selectedOption == "Customers" ? <Coustomers t={t} colors={colors}/> : null}
                    {selectedOption == "Overview" ? <OverView t={t} colors={colors}/> : null}
                    {selectedOption == "Performance" ? <Performance t={t} colors={colors}/> : null}

                </View>
            </View>

        );
    }
}

export default withLanguage(AnalyseScreen)

function TodayActivity({colors, t}) {
    return (
        <>
            <Image source={require('../../images/A2.png')} style={{
                alignSelf: "center",
                height: undefined,
                width: "110%",
                right: -10,
                marginTop: 20,
                aspectRatio: 1.88
            }}/>

            <View style={{flexDirection: "row", alignItems: "center", marginTop: 20,}}>
                <Text style={{
                    fontSize: 16,
                    marginRight: 5,
                    includeFontPadding: false,
                    padding: 0,
                    fontFamily: Constants.fontFamilyBold,
                    color: colors.blackAndWhite
                }}>{t("L:Last7days")}</Text>
                <AntDesign name={"caretdown"} color={colors.blackAndWhite}/>
            </View>
            <Image source={require('../../images/A1.png')}
                   style={{alignSelf: "center", height: undefined, width: "110%", right: -10, aspectRatio: 1.88}}/>
        </>
    )
}
function Performance({colors, t}) {
    return (
        <>
            <Text style={{fontSize:14,marginVertical:10,textAlign:"center",fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{t("L:CurrentVsLastMonth")}</Text>
            <Image source={require('../../images/Perofrmance.png')} style={{
                alignSelf: "center",
                height: undefined,
                width: "100%",
                aspectRatio: 0.9
            }}/>
            <View style={{flexDirection:"row",margin:10,alignItems:"center"}}>
                <View style={{height:20,width:20,backgroundColor:"#0D9C8E"}}>
                </View>
                <Text style={{fontSize:14,marginLeft:10,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{t("L:PerformanceofcurrentMonth")}</Text>
            </View>
            <View style={{flexDirection:"row",marginLeft:10,alignItems:"center"}}>
                <View style={{height:20,width:20,backgroundColor:"#00F1C6"}}>
                </View>
                <Text style={{fontSize:14,marginLeft:10,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{t("L:PerformanceofLastMonth")}</Text>
            </View>
        </>
    )
}

function LatestReview({colors, t}) {
    const data = [{}, {}, {}, {}]
    return (
        <View style={{flex: 1, marginTop: 20}}>
            <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({}) =>
                <View style={{
                    paddingBottom: 15,
                    borderBottomWidth: 0.5,
                    borderColor: colors.blackAndWhite,
                    marginTop: 10
                }}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={require('../../images/ProfileImage.png')}
                               style={{height: 50, width: 50, borderRadius: 50}}/>
                        <View style={{marginLeft: 10, flex: 1}}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: Constants.fontFamilyRegular,
                                color: colors.blackAndWhite,
                            }}>Klein Jerry</Text>
                            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <Image source={require('../../images/Star.png')}
                                       style={{height: undefined, width: "25%", aspectRatio: 3.8}}/>
                                <Text style={{
                                    fontSize: 10,
                                    fontFamily: Constants.fontFamilyMedium,
                                    color: colors.blackAndWhite,
                                }}>Tuesday</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{
                        marginHorizontal: 10,
                        marginTop: 5,
                        fontSize: 10,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.blackAndWhite,
                    }}>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.</Text>

                </View>

            }/>

        </View>
    )
}
function OverView({colors, t}) {
    const data = [{
        Number:"7865",
        Status:"Sales",
        dis:"10% Increase from Last Year",
        color:"rgba(11,164,136,0.09)"
    }, {
        Number:"95",
        Status:"Commissisons",
        dis:"After Cutting the Commissions",
        color:"rgba(11,164,136,0.09)"

    }, {
        Number:"7865",
        Status:"Balance",
        dis:"3% Increase from Last 6 Month",
        color:"rgba(242,76,30,0.09)"
    }, {
        Number:"541",
        Status:"Orders",
        dis:"16% Decrease from Last Month",
        color:"rgba(242,76,30,0.09)"
    }]
    return (
        <View style={{flex: 1, marginTop: 20}}>
            <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({item,index}) =>
              <View style={{padding:20,marginBottom:10,marginHorizontal:40,borderRadius:10,backgroundColor:item.color,alignItems:"center",justifyContent:"center"}}>
             <Text style={{fontSize:34,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyBold,color:colors.blackAndWhite}}>{item.Number}</Text>
             <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{item.Status}</Text>
             <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:"#9D9FB1"}}>{item.dis}</Text>
              </View>

            }/>

        </View>
    )
}

function Coustomers({colors, t}) {
    const data = [{
        name: "Ramu Rao",
        Location: "Srikakulam",
        sales: "200 SAR"
    }, {
        name: "Ramu Rao",
        Location: "Srikakulam",
        sales: "200 SAR"
    }, {
        name: "Ramu Rao",
        Location: "Srikakulam",
        sales: "200 SAR"
    }, {
        name: "Ramu Rao",
        Location: "Srikakulam",
        sales: "200 SAR"
    },
        {
            name: "Ramu Rao",
            Location: "Srikakulam",
            sales: "200 SAR"
        },
        {
            name: "Ramu Rao",
            Location: "Srikakulam",
            sales: "200 SAR"
        }]
    return (
        <View style={{flex: 1, marginTop: 20}}>


            <Card outerstyles={{borderRadius: 10,backgroundColor:colors.BackgroundView}}>
                <View style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: Color.primary,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    paddingHorizontal: 15,
                    paddingVertical: 10
                }}>
                    <Text
                        style={{fontSize: 14, fontFamily: Constants.fontFamilyBold, color: "#fff"}}>{t("L:Name")}</Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff"
                    }}>{t("L:Location")}</Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff"
                    }}>{t("L:Sales")}</Text>
                </View>
                <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={({item, index}) =>
                    <View style={{
                        justifyContent: "space-between",
                        padding: 10,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.blackAndWhite
                        }}>{item.name}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.blackAndWhite
                        }}>{item.Location}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyBold,
                            color: "#0D9C8E"
                        }}>{item.sales}</Text>
                    </View>

                }/>
            </Card>


        </View>
    )
}





