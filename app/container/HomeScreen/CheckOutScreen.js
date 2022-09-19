import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import Card from "../Components/Card";
import AntDesign from "react-native-vector-icons/AntDesign";


class CehckOutScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{time: "10:00 am", status: 'booked'}, {time: "10:30 am", status: 'available'}, {
                time: "11:00 am",
                status: 'available'
            }, {time: "11:30 am", status: 'available'}]
        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                <HeaderWihBackground title={"Checkout Screen"} Props={this.props.value}
                                     children={
                                         <Text style={{
                                             fontSize: 14,
                                             fontFamily: Constants.fontFamilyBold,
                                             color: "#fff",
                                             alignSelf: "center",
                                             marginTop: 20
                                         }}>BookSlot#1264843904</Text>
                                     }
                />
                <View style={{flex:1,padding:15}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>Date : 4/7/2022</Text>
                    <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>Date : 4/7/2022</Text>
                </View>
                    <StatusBar colors={colors} title1={"Menu"} title2={"Cart"} title3={"CheckOut"}/>
                    <FlatList contentContainerStyle={{flex:1,backgroundColor:"red",paddingBottom:50,}} data={this.state.list} renderItem={({item, index}) =>
                        <Card outerstyles={{flexDirection:"row",alignItems:"center"}}>
                            <Image source={require('../../images/S1.png')}
                                   style={{height: 70, width: 70,borderRadius:10}}/>
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
                            </View>
                            <View style={{alignSelf:"flex-start",margin:10}}>
                            <View style={{flexDirection:"row",alignItems:"center",}}>
                                <Text style={{fontSize:10,fontFamily:Constants.fontFamilyBold,color:colors.RedToWHite,includeFontPadding:false,padding:0,marginRight:5}}>Remove</Text>
                                <AntDesign name={"minuscircleo"} color={colors.RedToWHite} size={14}/>
                            </View>
                                <Text style={{marginTop:15,fontSize:16,fontFamily:Constants.fontFamilyMedium,color:"#40E0D0"}}>335 SAR</Text>
                            </View>

                        </Card>

                    }/>
                    </View>
                </View>

        );
    }
}

export default withLanguage(CehckOutScreen)
function StatusBar({title1,title2,title3,colors}){
    return(
        <View style={{flexDirection:"row",marginHorizontal:10,marginTop:10,alignItems:"center",backgroundColor:"#fff"}}>
            <View style={{alignItems:"center"}}>
                <View style={{height:30,width:30,borderRadius:15,alignItems:"center",justifyContent:"center",backgroundColor:colors.lightGreyToWhite}}>
                    <View style={{height:20,width:20,borderRadius:10,backgroundColor:Color.primary}}>
                    </View>
                </View>
                <Text style={{marginTop:5,color:colors.blackAndWhite,fontSize:8,fontFamily:Constants.fontFamilyRegular}}>{title1}</Text>
            </View>
            <View style={{flex:1,height:5,top:-8,marginHorizontal:-5,backgroundColor:colors.lightGreyToWhite}}/>
            <View style={{alignItems:"center"}}>
                <View style={{height:30,width:30,borderRadius:15,alignItems:"center",justifyContent:"center",backgroundColor:colors.lightGreyToWhite}}>
                    <View style={{height:20,width:20,borderRadius:10,backgroundColor:Color.primary}}>
                    </View>

                </View>
                <Text style={{marginTop:5,color:colors.blackAndWhite,fontSize:8,fontFamily:Constants.fontFamilyRegular}}>{title2}</Text>
            </View>
            <View style={{flex:1,top:-10,marginHorizontal:-5,height:5,backgroundColor:colors.lightGreyToWhite}}/>
            <View >
                <View style={{height:30,width:30,borderRadius:15,alignItems:"center",justifyContent:"center",backgroundColor:colors.lightGreyToWhite}}>
                    {/*<View style={{height:20,width:20,borderRadius:10,backgroundColor:Color.primary}}>*/}
                    {/*</View>*/}
                </View>
                <Text style={{marginTop:5,left:-5,color:colors.blackAndWhite,fontSize:8,fontFamily:Constants.fontFamilyRegular}}>{title3}</Text>
            </View>

        </View>

    )

}
