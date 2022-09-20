import React, {useState} from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import Card from "../Components/Card";
import AntDesign from "react-native-vector-icons/AntDesign";
import SettingsComponent from "../Components/SettingsComponent";
import ButtonComponent from "../Components/ButtonComponent";
import {Modalize} from "react-native-modalize";


class CehckOutScreen extends React.Component {
    constructor(props) {
        super(props);
        this.PaymentModel = React.createRef();
        this.state = {
            list: [{time: "10:00 am", status: 'booked'}, {time: "10:30 am", status: 'available'}, {
                time: "11:00 am",
                status: 'available'
            }, {time: "11:30 am", status: 'available'}]
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground title={t("L:CheckoutScreen")} Props={this.props.value}
                                     children={
                                         <Text style={{
                                             fontSize: 14,
                                             fontFamily: Constants.fontFamilyBold,
                                             color: "#fff",
                                             alignSelf: "center",
                                             marginTop: 20
                                         }}>{t("L:BookSlot")}#1264843904</Text>
                                     }
                />
                <ScrollView contentContainerStyle={{paddingBottom:20}} style={{flex: 1, padding: 15}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{
                            fontSize: 10,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.blackAndWhite
                        }}>{t("L:Date")} : 4/7/2022</Text>
                        <Text style={{
                            fontSize: 10,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.blackAndWhite
                        }}>{t("L:Date")} : 4/7/2022</Text>
                    </View>
                    <StatusBar colors={colors} title1={t("L:Menu")} title2={t("L:Cart")} title3={t("L:CheckOut")}/>
                    <FlatList contentContainerStyle={{flex: 1, paddingBottom: 20,}} data={this.state.list}
                              renderItem={({item, index}) =>

                                  <CheckOutComponent Props={this.props.value} colors={colors}/>
                              }/>
                    <Text style={{fontSize:12,fontFamily:Constants.fontFamilyBold,color:colors.blackAndWhite,marginVertical:10}}>{t("L:PaymentMethod")}</Text>
                       <TouchableOpacity style={{backgroundColor:colors.lightGreentoDark,padding:10,borderRadius:5}}>
                           <SettingsComponent colors={colors} title={t("L:CashonVisit")} titleStyle={{fontFamily:Constants.fontFamilyBold,color:colors.blackAndWhite}}/>
                       </TouchableOpacity>
                    <Text style={{fontSize:12,fontFamily:Constants.fontFamilyBold,color:colors.blackAndWhite,marginVertical:10}}>{t("L:Address")}</Text>
                    <TouchableOpacity style={{backgroundColor:colors.lightGreentoDark,padding:10,borderRadius:5}}>
                        <View style={{flexDirection:"row",alignItems:"flex-start"}}>
                            <Image source={require('../../images/MarkerPin.png')} style={{height:undefined,width:"5%",tintColor:"#989393",aspectRatio:0.83}}/>
                            <Text style={{fontFamily:Constants.fontFamilyMedium,fontSize:12,color:"#000",marginLeft:5,marginRight:20}}>St-15. Main City Plaza Road, near Al-Safeer Tower, Riyadh</Text>
                        </View>
                        <Text style={{fontSize:14,fontFamily:Constants.fontFamilyBold,color:"red",alignSelf:"flex-end"}}>{t("L:Change")}</Text>
                    </TouchableOpacity>

                    <Card outerstyles={{borderRadius:5,padding:10,backgroundColor:colors.whiteToDark,marginTop:10}}>
                        <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{t("L:OrderSummary")}</Text>
                        <View style={{flex:1,height:1,backgroundColor:"#000",marginVertical:10}}/>
                        <RowComponent colors={colors} title1={t("L:Servicecharges")} title2={"SAR 990"}/>
                        <RowComponent colors={colors}  title1={t("L:Discount")} title2={"SAR  24 (SAR 10)"}/>
                        <RowComponent colors={colors} title1={t("L:HomeVisitCharges")} title2={"SAR  24 (SAR 10)"}/>
                        <RowComponent colors={colors} style={{marginTop:10}} title1={t("L:Total")} title2={"SAR 1,025"}/>
                    </Card>
                   <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                       <ButtonComponent title={t("L:Cancel")} Style={{backgroundColor:"red",width:"35%"}} />
                       <ButtonComponent onPress={()=>{this.PaymentModel.current.open()}} title={t("L:Proceed")} Style={{backgroundColor:Color.primary,width:"35%"}} />

                   </View>

                </ScrollView>
                <Modalize
                    handleStyle={{ height: 0 }}
                    closeOnOverlayTap={true}
                    modalStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
                    rootStyle={{ backgroundColor: "rgba(0,0,0,0)" }}

                    overlayStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                    panGestureComponentEnabled adjustToContentHeight={true}
                    ref={this.PaymentModel}>
                    <View style={{borderTopLeftRadius:30,borderTopRightRadius:30,backgroundColor:colors.screenBackgroundColor,paddingTop:15,paddingHorizontal:10}}>
                      <Text style={{fontSize:12,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite,alignSelf:"center"}}>Select the Payment Method</Text>
                      <View style={{backgroundColor:colors.lightGreentoDark,marginHorizontal:10,paddingVertical:10,paddingHorizontal:15,borderRadius:5,marginTop:10}}>
                          <PaymentComponent colors={colors} image={require('../../images/ApplePay.png')} title={"Apple pay"}/>
                          <PaymentComponent colors={colors} image={require('../../images/Visa.png')} title={"**** **** **** 1234"}/>
                          <PaymentComponent colors={colors} image={require('../../images/Wllet.png')} title={"**** **** **** 1234"}/>
                          <PaymentComponent colors={colors} image={require('../../images/CashOnVisit.png')} title={"Cash on Visit"}/>
                      </View>
                        <ButtonComponent onPress={()=>{this.PaymentModel.current.close()}} title={"Select"} Style={{marginHorizontal:30}}/>
                    </View>
                </Modalize>
            </View>

        );
    }
}

export default withLanguage(CehckOutScreen)


function PaymentComponent({title,image,colors}){
    const [select,setSelect]=useState(false)

    return(
        <TouchableOpacity onPress={()=>{setSelect(!select)}} style={{flexDirection:"row",alignItems:"center",marginVertical:7}}>
            <Image source={image} style={{height:undefined,width:"20%",aspectRatio:1.55}}/>
            <Text style={{fontSize:14,marginLeft:10,flex:1,fontFamily:Constants.fontFamilyBold,color:colors.blackAndWhite,alignSelf:"center"}}>{title}</Text>
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
                {select == true && <View style={{
                    height: 7,
                    width: 7,
                    borderRadius: 7,
                    backgroundColor: Color.primary
                }}/>}</View>
                    </TouchableOpacity>
    )
}
function RowComponent({title1,title2,style,colors,title2Style}){
    return(
        <View style={[{flexDirection:"row",alignItems:"center",marginBottom:5},style]}>
            <Text style={{fontSize:12,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyRegular,color:"#000",flex:1}}>{title1}</Text>
            <Text style={[{fontSize:14,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyMedium,color:colors.RedToTheme},title2Style]}>{title2}</Text>
        </View>
    )
}
function CheckOutComponent({colors,Props}) {
    const {t,language}=Props
    return (
        <Card outerstyles={{flexDirection: "row", alignItems: "center", padding: 5, borderRadius: 5,backgroundColor:colors.whiteToDark}}>
            <Image source={require('../../images/S1.png')}
                   style={{height: 65, width: 65, borderRadius: 10}}/>
            <View style={{marginLeft: 10, marginVertical: 5, flex: 1}}>
                <Text style={{
                    fontSize: 14,
                    fontFamily: Constants.fontFamilyMedium,
                    color: colors.blackAndWhite,
                    includeFontPadding: false,
                    padding: 0
                }}>Mina Julie</Text>
                <Text style={{
                    fontSize: 10,
                    fontFamily: Constants.fontFamilyRegular,
                    color: colors.greyToWhite,
                    includeFontPadding: false,
                    padding: 0
                }}>{t("L:Persons")} : 2</Text>
            </View>
            <View style={{alignSelf: "flex-start", margin: 10}}>
                <View style={{flexDirection: "row", alignItems: "center",}}>
                    <Text style={{
                        fontSize: 10,
                        fontFamily: Constants.fontFamilyBold,
                        color: colors.RedToWHite,
                        includeFontPadding: false,
                        padding: 0,
                        marginRight: 5
                    }}>{t("L:Remove")}</Text>
                    <AntDesign name={"minuscircleo"} color={colors.RedToWHite} size={14}/>
                </View>
                <Text style={{marginTop: 10, fontSize: 16, fontFamily: Constants.fontFamilyMedium, color: "#40E0D0"}}>335
                    SAR</Text>
            </View>

        </Card>
    )
}

function StatusBar({title1, title2, title3, colors}) {
    return (
        <View style={{
            flexDirection: "row",
            marginHorizontal: 10,
            marginTop: 10,
            alignItems: "center",
        }}>
            <View style={{alignItems: "center"}}>
                <View style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.lightGreyToWhite
                }}>
                    <View style={{height: 20, width: 20, borderRadius: 10, backgroundColor: Color.primary}}>
                    </View>
                </View>
                <Text style={{
                    marginTop: 5,
                    color: colors.blackAndWhite,
                    fontSize: 8,
                    fontFamily: Constants.fontFamilyRegular
                }}>{title1}</Text>
            </View>
            <View
                style={{flex: 1, height: 5, top: -8, marginHorizontal: -5, backgroundColor: colors.lightGreyToWhite}}/>
            <View style={{alignItems: "center"}}>
                <View style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.lightGreyToWhite
                }}>
                    <View style={{height: 20, width: 20, borderRadius: 10, backgroundColor: Color.primary}}>
                    </View>

                </View>
                <Text style={{
                    marginTop: 5,
                    color: colors.blackAndWhite,
                    fontSize: 8,
                    fontFamily: Constants.fontFamilyRegular
                }}>{title2}</Text>
            </View>
            <View
                style={{flex: 1, top: -10, marginHorizontal: -5, height: 5, backgroundColor: colors.lightGreyToWhite}}/>
            <View>
                <View style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.lightGreyToWhite
                }}>
                    {/*<View style={{height:20,width:20,borderRadius:10,backgroundColor:Color.primary}}>*/}
                    {/*</View>*/}
                </View>
                <Text style={{
                    marginTop: 5,
                    left: -5,
                    color: colors.blackAndWhite,
                    fontSize: 8,
                    fontFamily: Constants.fontFamilyRegular
                }}>{title3}</Text>
            </View>

        </View>

    )

}
