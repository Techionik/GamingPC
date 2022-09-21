import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import SkipButton from "../Components/SkipButton";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";


class ServiceStoreScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [{image: require('../../images/S1.png'), title: "Nail Polish"}, {
                image: require('../../images/S2.png'),
                title: "Nail Polish"
            }, {image: require('../../images/S1.png'), title: "Nail Polish"}, {
                image: require('../../images/S2.png'),
                title: "Nail Polish"
            }],
            cat:[{title:"Hair"},{title:"Facial"},{title:"Spa"},{title:"Beauty"},{title:"Nails"},],
            select:"",

        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor,}}>
                <View style={{
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    height: undefined,
                    width: "100%",
                    aspectRatio: 1.5
                }}>
                    <Image source={require('../../images/IemBackground.png')} resizeMode={"cover"} style={{
                        borderBottomRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        zIndex: -2,
                        position: "absolute",
                        height: undefined,
                        width: "100%",
                        aspectRatio: 1.5
                    }}/>
                    <HeaderComponent Drawer={true} color={"#fff"} Props={this.props.value}/>
                    <View style={{flex: 1, paddingBottom: 15, paddingHorizontal: 15, justifyContent: "flex-end"}}>
                        <Text style={{
                            fontFamily: Constants.fontFamilyBold,
                            color: "#fff",
                            fontSize: 20
                        }}>{"TB - The Big Tease \nSalon"}</Text>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: 30,
                            paddingVertical: 2,
                            backgroundColor: "#F24E1E",
                            paddingHorizontal: 5,
                            alignSelf: "flex-start"
                        }}>
                            <Image source={require('../../images/StarICon.png')} resizeMode={"contain"}
                                   style={{height: undefined, width: "4%",top:-10 ,aspectRatio: 1}}/>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: Constants.fontFamilyBold,
                                color: "#fff",
                                marginLeft: 5
                            }}>4.9</Text>
                        </View>
                            <View style={{flex:1}}/>
                            <Image source={require("../../images/HeartIcon.png")} resizeMode={"contain"} style={{height:undefined,width:"8%",aspectRatio:1}}/>
                        </View>
                    </View>
                </View>
                <View >
                    <View style={{flexDirection:"row",marginBottom:10,alignSelf:"center",alignItems:"center",backgroundColor:"#BFFFF9",borderBottomLeftRadius:10,borderBottomRightRadius:10,padding:10}}>
                        <Image source={require('../../images/MarkerPin.png')} resizeMode={"contain"}
                               style={{height: undefined, width: "5%", aspectRatio: 1, tintColor: Color.grayIn}}/>
                        <Text  style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyRegular,
                            includeFontPadding:false,
                            padding:0,
                            color: "#000",
                            marginLeft: 5,
                        }}>St-14, Newcity Mall  , London.</Text>
                    </View>

                <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={this.state.cat} style={{marginHorizontal:10,paddingVertical:10,marginVertical:10,borderBottomWidth:0.5,borderTopWidth:0.5,borderColor:colors.greenBorder}} renderItem={({item,index})=>
                  <TouchableOpacity onPress={()=>{this.setState({select:index})}} style={{marginHorizontal:5,flex:0.5,alignSelf:"flex-start",paddingVertical:3,paddingHorizontal:13,borderRadius:30,backgroundColor:this.state.select==index?Color.primary:null}}>
                  <Text style={{fontSize:14,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyRegular,color:colors.greyToWhite}}>{item.title}</Text>
                  </TouchableOpacity>
                }/>
                </View>

                <View style={{flex:1}}>
                    <FlatList contentContainerStyle={{paddingBottom:40}} showsVerticalScrollIndicator={false} data={this.state.arr}
                              renderItem={({item, index}) =>
                        <ServiceComponent onPress={()=>{this.props.navigation.navigate("DetailScreen")}} onPressAddCart={()=>{this.props.navigation.navigate("AddToCartScreen")}} index={index} item={item} Props={this.props.value}/>
                    }/>
                </View>


            </View>

        );
    }
}

export default withLanguage(ServiceStoreScreen)

function ServiceComponent({Props, item,onPress, index,onPressAddCart}) {
    const {t, language,themeColor} = Props
    const {colors}=themeColor
    return (
        <TouchableOpacity onPress={onPress} style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 5,
        }}>

            <Image source={item.image} resizeMode={"contain"}
                   style={{height: 100, width: 100,aspectRatio:1, borderRadius: 5}}/>
            <View style={{marginLeft: 10, marginVertical: 5,flex:1,justifyContent:'space-between'}}>
               <View>
                <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyMedium, color: colors.blackAndWhite}}>Hair Color Balyage</Text>
                <Text numberOfLines={2} style={{fontSize: 12, fontFamily: Constants.fontFamilyMedium, color: colors.greyToWhite,}}>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</Text>
               </View>
               <View style={{flex:1,flexDirection:"row",alignItems:"center",marginTop:5}}>
                   <Text style={{fontSize:12,fontFamily:Constants.fontFamilyMedium,color:colors.RedToTheme,flex:1}}>250 SAR</Text>
                <TouchableOpacity onPress={onPressAddCart} style={{
                    paddingVertical: 2,
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    flexDirection:"row",
                    alignItems:"center",
                    backgroundColor:Color.primary,
                }}>
                    <Image source={require("../../images/CartImage.png")} resizeMode={"cover"} style={{height:20,width:20}}/>
                    <Text style={{
                        fontSize: 10,
includeFontPadding:false,
                        marginRight:5,
                        padding:0,
                        fontFamily: Constants.fontFamilyMedium,
                        color: "#fff",
                        marginLeft:5,
                    }}>{t("L:AddtoCart")}</Text>
                </TouchableOpacity>
               </View>
            </View>


        </TouchableOpacity>
    )
}

