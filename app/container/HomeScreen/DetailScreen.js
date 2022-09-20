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
import Card from "../Components/Card";
import {Calendar} from "react-native-calendars/src/index";
import SettingsComponent from "../Components/SettingsComponent";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonComponent from "../Components/ButtonComponent";
import Entypo from "react-native-vector-icons/Entypo";


class DetailScreen extends React.Component {
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
                <HeaderComponent back={true} backColor={'#40E0D0'} titleStyle={{color: colors.blackAndWhite}}
                                 Location={false} title={t("L:Details")} Drawer={true} Props={this.props.value}/>

                <ScrollView style={{paddingHorizontal: 20,paddingTop:20,paddingBottom:200}}>

                    <Image source={require('../../images/detailScreen.png')}
                           style={{width: '100%', height: undefined, aspectRatio: 2, borderRadius: 10}}/>
                    <View style={{marginTop: 10}}>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={{
                                fontSize: 16,
                                flex: 1,
                                fontFamily: Constants.fontFamilySemiBold,
                                color: colors.blackAndWhite,
                                includeFontPadding: false,
                                padding: 0
                            }}>Hair Color Balyage</Text>
                            <Text style={{
                                fontSize: 18,

                                fontFamily: Constants.fontFamilyBold,
                                color: colors.RedToTheme,
                                includeFontPadding: false,
                                padding: 0
                            }}>250 SAR</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons color={'#F24E1E'} size={20} name={'md-star-sharp'}/>
                            <Ionicons color={'#F24E1E'} size={20} name={'md-star-sharp'}/>
                            <Ionicons color={'#F24E1E'} size={20} name={'md-star-sharp'}/>
                            <Ionicons color={'#F24E1E'} size={20} name={'md-star-sharp'}/>
                            <Ionicons color={'#C4C4C4'} size={20} name={'md-star-sharp'}/>

                        </View>


                        <View style={{marginTop: 10}}>
                            <Text style={{
                                fontSize: 14,
                                flex: 1,
                                fontFamily: Constants.fontFamilySemiBold,
                                color: colors.blackAndWhite,
                                includeFontPadding: false,
                                padding: 0
                            }}>{t("L:Description")}</Text>
                            <Text style={{
                                fontSize: 11,
                                marginTop: 10,
                                fontFamily: Constants.fontFamilyRegular,
                                color: colors.greyToWhite,
                                includeFontPadding: false,
                                padding: 0
                            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</Text>
                        </View>

                        <Text style={{
                            fontSize: 14,
                            flex: 1,
                            marginTop: 10,
                            fontFamily: Constants.fontFamilySemiBold,
                            color: colors.blackAndWhite,
                            includeFontPadding: false,
                            padding: 0
                        }}>{t("L:Required")}</Text>
                        <View style={{marginTop: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{
                                    backgroundColor: '#fff',
                                    borderColor: Color.grayIn,
                                    height: 20,
                                    width: 20,
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {true && <View style={{
                                        height: 10,
                                        width: 10,
                                        borderRadius: 10,
                                        backgroundColor: Color.primary
                                    }}/>}
                                </View>
                                <Text style={{
                                    color: colors.blackAndWhite,
                                    fontSize: 14,
                                    fontFamily: Constants.fontFamilyRegular,
                                    marginLeft: 10,
                                    includeFontPadding: false,
                                    padding: 0
                                }}>{t("L:Ihavemytools")}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                                <View style={{
                                    backgroundColor: '#fff',
                                    borderColor: Color.grayIn,
                                    height: 20,
                                    width: 20,
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {true && <View style={{
                                        height: 10,
                                        width: 10,
                                        borderRadius: 10,
                                        backgroundColor: Color.primary
                                    }}/>}
                                </View>
                                <Text style={{
                                    color: colors.blackAndWhite,
                                    fontSize: 14,
                                    fontFamily: Constants.fontFamilyRegular,
                                    marginLeft: 10,
                                    includeFontPadding: false,
                                    padding: 0
                                }}>
                                    {t("L:Ordertools")} + <Text style={{
                                    color: colors.RedToTheme,
                                    fontSize: 14,
                                    fontFamily: Constants.fontFamilySemiBold
                                }}>35 SAR</Text>
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                                <View style={{
                                    backgroundColor: '#fff',
                                    borderColor: Color.grayIn,
                                    height: 20,
                                    width: 20,
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {false && <View style={{
                                        height: 10,
                                        width: 10,
                                        borderRadius: 10,
                                        backgroundColor: Color.primary
                                    }}/>}
                                </View>
                                <Text style={{
                                    color: colors.blackAndWhite,
                                    fontSize: 14,
                                    fontFamily: Constants.fontFamilyRegular,
                                    marginLeft: 10,
                                    includeFontPadding: false,
                                    padding: 0
                                }}>
                                    {t("L:Color")}
                                </Text>
                            </View>

                        </View>

                        <View style={{marginTop: 10}}>
                            <Text style={{
                                fontSize: 14,
                                flex: 1,
                                fontFamily: Constants.fontFamilySemiBold,
                                color: colors.blackAndWhite,
                                includeFontPadding: false,
                                padding: 0
                            }}>{t("L:Comments")}</Text>

                            <TextInput numberOfLines={5} placeholder={t('L:Tellusaboutsomething')+ '................'}
                                       placeholderTextColor={colors.greyToWhite} style={{
                                borderColor: colors.greyToWhite,
                                borderWidth: 1,
                                borderRadius: 10,
                                marginTop: 10,
                                textAlignVertical: 'top',
                                padding: 10,
                                fontFamily: Constants.fontFamilyMediumItalic
                            }}>

                            </TextInput>
                        </View>

                    </View>

                </ScrollView>

                <View style={{backgroundColor: colors.whiteToDark,paddingVertical:10, flexDirection: 'row'}}>

                    <View style={{flexDirection:'row',marginLeft:10,alignItems:'center',flex:1}}>
                        <View style={{height:40,width:40,borderRadius:5,justifyContent:'center',backgroundColor:colors.lightgreyToDark}}>
                            <Entypo name={"minus"} style={{alignSelf:'center',}} color={colors.blackAndWhite} size={18}/>
                        </View>
                        <Text style={{fontSize:14,marginHorizontal:7,fontFamily:Constants.fontFamilySemiBold,color:colors.blackAndWhite,}}>1</Text>
                        <View style={{height:40,width:40,borderRadius:5,justifyContent:'center',backgroundColor:colors.lightgreyToDark}}>
                            <Entypo name={"plus"} style={{alignSelf:'center',}} color={colors.blackAndWhite} size={18}/>

                        </View>
                    </View>
                    <ButtonComponent Style={{flex: 1, marginLeft: 5,marginVertical:0}} title={t('L:BookNow')}/>
                </View>

            </View>

        );
    }
}

export default withLanguage(DetailScreen)
