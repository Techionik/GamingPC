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
import AntDesign from "react-native-vector-icons/AntDesign";


class MyWalletScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{font: "L", title: "The Tease Beauty ", price: "SAR 695.05"}, {
                font: "L",
                title: "The Tease Beauty ",
                price: "SAR 695.05"
            }, {font: "L", title: "The Tease Beauty ", price: "SAR 695.05"}, {
                font: "L",
                title: "The Tease Beauty ",
                price: "SAR 695.05"
            }, {font: "L", title: "The Tease Beauty ", price: "SAR 695.05"},
                {font: "L", title: "The Tease Beauty ", price: "SAR 695.05"},
            ]
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <View style={{flex: 0.42, backgroundColor: Color.primary}}>
                    <HeaderComponent Props={this.props.value} Drawer={true} Location={false} title={"My Wallet"}/>
                    <Text style={{
                        fontSize: 14,
                        textAlign: "center",
                        fontFamily: Constants.fontFamilyBold,
                        color: colors.whiteToDark,
                        marginTop: 10
                    }}>TOTAL BALANCE</Text>
                    <Text style={{
                        fontSize: 26,
                        textAlign: "center",
                        fontFamily: Constants.fontFamilyBold,
                        color: colors.whiteToDark
                    }}>2,456 SAR</Text>
                </View>
                <View
                    style={{marginHorizontal: 10,zIndex:2,top:-40,elevation:2, padding: 10, borderRadius: 10, backgroundColor: colors.whiteToDark}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <TouchableOpacity style={{
                            borderRadius: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                            backgroundColor: colors.fieldBackgroundColor
                        }}>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: Constants.Bold,
                                color: colors.greenBorder,
                                marginRight: 5
                            }}>This week</Text>
                            <AntDesign name={"right"} color={colors.greenBorder} size={15}/>
                        </TouchableOpacity>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyBold, color: colors.greyToWhite}}>07
                            July - 14 July</Text>
                    </View>
                    <View style={{flexDirection: "row",justifyContent:"center", alignItems: "center", marginVertical: 10}}>
                        <WalletComponent colors={colors} style={{backgroundColor: "#5E0BB1"}} icon={"arrowdown"}/>
                        <WalletComponent colors={colors} style={{backgroundColor: "red", marginLeft: 15}}
                                         icon={"arrowup"}/>
                    </View>
                </View>
                <View style={{flex: 1,top:-40}}>
                    <View style={{
                        paddingVertical: 10,
                        paddingHorizontal:15,
                        marginTop: 40,
                        marginHorizontal: 10,
                        backgroundColor: colors.lightGreentoDark,
                        borderRadius: 10
                    }}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{
                                fontSize: 14,
                                flex: 1,
                                fontFamily: Constants.fontFamilyMedium,
                                color: colors.blackAndWhite
                            }}>Transaction</Text>
                            <Text style={{
                                fontSize: 14,
                                fontFamily: Constants.fontFamilyMedium,
                                color: colors.greyToWhite
                            }}> 14 July</Text>

                        </View>
                        <FlatList showsVerticalScrollIndicator={false} data={this.state.list} renderItem={({item, index}) =>
                            <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
                                <View style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 25,
                                    backgroundColor: Color.primary,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: Constants.Bold,
                                        color: "#fff"
                                    }}>{item.font}</Text>
                                </View>
                                <Text style={{
                                    fontSize: 14,
                                    flex: 1,
                                    fontFamily: Constants.fontFamilyRegular,
                                    color: colors.blackAndWhite,
                                    marginLeft: 10
                                }}>{item.title}</Text>
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: Constants.Bold,
                                    color: "red",
                                    marginLeft: 10
                                }}>{item.price}</Text>
                            </View>

                        }/>
                    </View>

                </View>

            </View>

        );
    }
}

export default withLanguage(MyWalletScreen)

function WalletComponent({style, icon, colors}) {
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <View style={[{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center"
            }, style]}>
                <AntDesign name={icon} size={25} color={"#fff"}/>
            </View>
            <View style={{marginLeft: 10}}>
                <Text style={{
                    includeFontPadding: false,
                    padding: 0,
                    fontFamily: Constants.fontFamilyBold,
                    fontSize: 12,
                    color: colors.lightGreyToWhite
                }}>Deposit</Text>
                <Text style={{
                    includeFontPadding: false,
                    padding: 0,
                    fontFamily: Constants.fontFamilyBold,
                    fontSize: 12,
                    color: colors.darKToWhite
                }}>SAR 487.12</Text>
            </View>
        </View>
    )
}
