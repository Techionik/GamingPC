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
            }]

        }
    }

    render() {
        const {t, language} = this.props.value
        return (
            <View style={{flex: 1, backgroundColor: "#fff",}}>
                <View style={{
                    borderBottomRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    height: undefined,
                    width: "100%",
                    aspectRatio: 1.5
                }}>
                    <Image source={require('../../images/Background.png')} resizeMode={"cover"} style={{
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

                <View style={{}}>
                    <FlatList showsVerticalScrollIndicator={false} data={this.state.arr}
                              renderItem={({item, index}) =>
                        <ServiceComponent index={index} item={item} Props={this.props.value}/>
                    }/>
                </View>


            </View>

        );
    }
}

export default withLanguage(ServiceStoreScreen)

function ServiceComponent({Props, item, index}) {
    const {t, language} = Props
    return (
        <View style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderTopWidth: 0.5,
            borderColor: "989393"
        }}>
            <Image source={item.image} resizeMode={"contain"}
                   style={{height: 90, width: 90, borderRadius: 5}}/>
            <View style={{marginLeft: 10, marginVertical: 5,flex:1}}>
                <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyMedium, color: "#000"}}>Hair Color Balyage</Text>
                <Text style={{fontSize: 12, fontFamily: Constants.fontFamilyMedium, color: Color.gray,}}>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</Text>
               <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                   <Text style={{fontSize:12,fontFamily:Constants.fontFamilyMedium,color:"#E50027"}}>250 SAR</Text>
                <TouchableOpacity style={{
                    paddingVertical: 2,
                    paddingLeft: 5,
                    borderRadius: 5,
                    flexDirection:"row",
                    alignItems:"center",
                    backgroundColor:Color.primary,
                }}>
                    <Image source={require("../../images/CartImage.png")} resizeMode={"contain"} style={{height:undefined,width:"20%",aspectRatio:1}}/>
                    <Text style={{
                        fontSize: 12,
                        backgroundColor:"red",
                        fontFamily: Constants.fontFamilyMedium,
                        color: "#fff",
                        marginLeft:5,
                    }}>{t("L:AddtoCart")}</Text>
                </TouchableOpacity>
               </View>
            </View>


        </View>
    )
}

