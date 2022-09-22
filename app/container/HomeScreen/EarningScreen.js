import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
// import HeaderComponent from "../Components/HeaderComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderWihBackground from "../Components/HeaderWihBackground";


class EarningScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{font: "L", title: "Tina Khan", price: "SAR 695.05"}, {
                font: "L",
                title: "Talish Sim",
                price: "SAR 695.05"
            }, {font: "L", title: "Talish Sim", price: "SAR 695.05"}, {
                font: "L",
                title: "Talish Kahan",
                price: "SAR 695.05"
            }, {font: "L", title: "Talish Sim", price: "SAR 695.05"},
                {font: "L", title: "Talish Kahan", price: "SAR 695.05"},
            ]
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>

                <HeaderWihBackground isBack={true} title={"Earning"} colors={colors}  Props={this.props.value}/>

                <ScrollView contentContainerStyle={{flexGrow: 1,paddingHorizontal:15,marginBottom:20}}>

                    <View style={{backgroundColor:colors.dullGreenBackgroundColor,marginVertical:20,borderRadius:15,paddingVertical:35,alignItems:'center'}}>
                        <Text style={{color: "#fff", fontSize: 15, includeFontPadding:false,fontFamily: Constants.fontFamilyRegular}}>TOTAL EARNING</Text>
                        <Text style={{color: "#fff", fontSize: 26,includeFontPadding:false, fontFamily: Constants.fontFamilyBold}}>1,004 SAR</Text>
                    </View>
                    <View style={{
                        paddingVertical: 15,
                        paddingHorizontal:15,
                        backgroundColor: colors.whiteToDark,
                        borderRadius: 10,
                        elevation:2
                    }}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{
                                fontSize: 14,
                                flex: 1,
                                fontFamily: Constants.fontFamilyMedium,
                                color: colors.blackAndWhite
                            }}>Earnings</Text>
                            <View style={{backgroundColor:colors.lightGreenToGreen,borderRadius:30,padding:5,paddingHorizontal:8,flexDirection:'row',alignItems:'center'}}>
                                <Text style={{color:colors.greenBorder,fontSize:10,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyMedium}}>This Week</Text>
                                <AntDesign name={"down"} color={colors.greenBorder} size={11} style={{marginLeft:3}}/>

                            </View>

                        </View>
                        <FlatList style={{marginTop:20}} showsVerticalScrollIndicator={false} data={this.state.list} renderItem={({item, index}) =>
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
                                    color: colors.RedToTheme,
                                    marginLeft: 10
                                }}>{item.price}</Text>
                            </View>

                        }/>
                    </View>

                </ScrollView>

            </View>

        );
    }
}

export default withLanguage(EarningScreen)

