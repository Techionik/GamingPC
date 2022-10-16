import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";


class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <View style={{
                    flex: 0.3,
                    backgroundColor: Color.primary,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30
                }}>
                    <HeaderComponent title={t("L:UserProfile")} Props={this.props.value}/>
                </View>
                <ScrollView style={{
                    flex: 1,
                    backgroundColor: colors.ScreenColorToDark,
                    zIndex: 2,
                    top: -25,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30
                }}>
                    <Image source={require('../../images/ProfileImage.png')}
                           style={{height: 90, alignSelf: "center", marginTop: 20, width: 90, borderRadius: 45,}}/>
                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginVertical: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 20,
                            fontFamily: Constants.fontFamilyMedium,
                            color: colors.blackAndWhite
                        }}>{t("L:TheHairStore")}</Text>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            alignSelf: "center",
                            backgroundColor: "#B9FEF7",
                            borderRadius: 10
                        }}>
                            <Image source={require('../../images/MarkerPin.png')}
                                   style={{height: undefined, width: "5%", aspectRatio: 0.84}}/>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 12,
                                includeFontPadding: false,
                                padding: 0,
                                marginLeft: 5,
                                fontFamily: Constants.fontFamilyMedium,
                                color: Color.primary
                            }}>1.8 km</Text>
                        </View>
                        <View style={{height: 1, marginVertical: 10, backgroundColor: colors.greyToWhite}}></View>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyMedium,
                            alignSelf: "center",
                            color: colors.greyToWhite
                        }}>1-2-3 Building, Jamsith Road, Tokyo</Text>
                    </View>
                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{
                                fontSize: 10,
                                flex: 1,
                                fontFamily: Constants.fontFamilyBold,
                                color: colors.greyToWhite
                            }}>{t("L:Description")}</Text>
                            <MaterialIcons name={"edit"} color={Color.primary} size={12}/>
                            <Text style={{
                                fontSize: 10,
                                marginLeft: 3,
                                fontFamily: Constants.fontFamilyBold,
                                color: Color.primary
                            }}>{t("L:Edit")}</Text>
                        </View>
                        <Text style={{
                            fontSize: 10,
                            marginTop: 5,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.blackAndWhite
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</Text>
                    </View>
                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <RowComponent colors={colors} title1={t("L:Contact")} title2Style={{color:Color.primary}} title2={"001-27349-839"}/>
                        <RowComponent colors={colors} title1={t("L:BusinessDays")} title2={t("L:Monday-Friday")}/>
                        <RowComponent colors={colors} title1={t("L:BusinessHours")} title2={"12 pm - 10 pm"}/>
                        <RowComponent colors={colors} title1={t("L:ServiceTypes")} title2={t("L:HomeService")}/>
                        <RowComponent colors={colors} title1={t("L:EmailAddress")} title2Style={{color:Color.primary}}  title2={"AhlaServieceProvider.com"}/>
                    </View>
                </ScrollView>


            </View>

        );
    }
}

export default withLanguage(ProfileScreen)

function RowComponent({colors, title1, title2Style, title2, title1Style}) {
    return (
        <View style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: colors.greyToWhite
        }}>
            <Text style={[{
                fontSize: 10,
                flex: 1,
                fontFamily: Constants.fontFamilyBold,
                color: colors.greyToWhite
            }, title1Style]}>{title1}</Text>
            <Text style={[{
                fontSize: 10,
                fontFamily: Constants.fontFamilyBold,
                color: colors.darKToWhite
            }, title2Style]}>{title2}</Text>
        </View>
    )
}
