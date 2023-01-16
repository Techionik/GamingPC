import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
// import HeaderComponent from "../Components/HeaderComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import PayRoleComponent from "../Components/PayRoleComponent";
import Card from "../Components/Card";
import ButtonComponent from "../Components/ButtonComponent";


class RateAndReviewScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option:"initial"
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        const {option}=this.state
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={t("L:Jobs")} colors={colors} Props={this.props.value}/>
                <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 20,}}>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: Constants.fontFamilySemiBold,
                        color: "#0D9C8E",
                        marginLeft: 10
                    }}>{t("L:JobInformation")} :</Text>

                    <Card
                        outerstyles={{borderRadius: 10}}
                        children={
                            <View>
                                <RowComponent title1={t("L:Job")} title2={"Hydra Facial Spa"} colors={colors}/>
                                <RowComponent image={require("../../images/B3.png")} title1={t("L:Receivedby")}
                                              title2={"DimaClaudia"} colors={colors}/>
                                <RowComponent title1={t("L:Location")} title2={"St-17, Al Jadeed Road"} colors={colors}/>
                                <RowComponent title1={t("L:Time")} title2={"30 mins Ago"} colors={colors}/>
                                <RowComponent title1={t("L:Date")} title2={"10/10/2022"} colors={colors}/>
                            </View>
                        }
                    />

                    <View style={{margin:10,flexDirection:"row",alignItems:"center"}}>
                        <AntDesign name={"infocirlceo"} size={15} color={Color.primary} />
                        <Text style={{fontSize:10,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite,marginLeft:10,padding:0,includeFontPadding:false}}>Once you Complete your job , marked the complete button. </Text>
                    </View>
                    {this.state.option=="Completed"?<RatingView colors={colors} t={t}/>:null}
                    <View style={{flex:1}}/>
                    {this.state.option=="Completed"?

                        <ButtonComponent onPress={()=>{this.props.navigation.navigate("JobsScreen")}} title={t("L:Submit")}/>
                        :this.state.option=="initial"?
                        <ButtonComponent onPress={() => {
                            this.setState({option: "StartJob"})
                        }} title={t("L:StartService")}  Style={{

                            borderRadius: 5,

                            backgroundColor:Color.primary
                        }}/>:
                            this.state.option=="StartJob"?
                        <ButtonComponent onPress={() => {
                            this.setState({option: "Completed"})
                        }} title={t("L:Completed")}  Style={{
                            borderRadius: 5,
                            backgroundColor: Color.primary
                        }}/>:null
                    }
                </View>

            </View>

        );
    }
}

export default withLanguage(RateAndReviewScreen)
function RatingView({t,colors}){
    return(
        <>
        <Text style={{
            fontSize: 14,
            fontFamily: Constants.fontFamilySemiBold,
            color: "#0D9C8E",
            margin: 10,

        }}>{t("L:RateAndReview")} :</Text>
    <Card
        outerstyles={{borderRadius: 10,padding:10,}}
        children={
            <View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={{
                        fontSize: 14,
                        flex: 1,
                        includeFontPadding: false,
                        padding: 0,
                        fontFamily: Constants.fontFamilySemiBold,
                        color: "#0D9C8E",
                        marginVertical: 10
                    }}>{t("L:Customer’sRating")} :</Text>
                    <Image source={require('../../images/Rate.png')}
                           style={{height: undefined, width: "35%", aspectRatio: 5}}/>
                </View>
                <Text style={{
                    fontSize: 14,
                    includeFontPadding: false,
                    padding: 0,
                    fontFamily: Constants.fontFamilySemiBold,
                    color: "#0D9C8E",
                    marginVertical: 10
                }}>{t("L:Review")} :</Text>
                <TextInput placeholder={t("L:Additional")} placeholderTextColor={colors.greyToWhite} style={{paddingLeft:10,textAlignVertical:"top",height:100,borderRadius:10,borderWidth:0.5,borderColor:colors.greyToWhite}}/>
            </View>
        }
    />
        </>
    )
}

function RowComponent({title1, title2, colors, image}) {
    return (
        <View style={{flexDirection: "row", alignItems: "center", padding: 10}}>
            <Text style={{
                fontSize: 14,
                includeFontPadding: false,
                padding: 0,
                flex: 1,
                fontStyle: Constants.fontFamilyMedium,
                color: "#0D9C8E"
            }}>{title1} :</Text>
            <Text style={{
                fontSize: 14,
                includeFontPadding: false,
                padding: 0,
                flex: 1.2,
                textAlign: "left",
                fontStyle: Constants.fontFamilyRegular,
                color: title1 == "Time" ? "red" : colors.blackAndWhite
            }}>{title2}</Text>
            <View style={{flex: 0.5, alignItems: "flex-end"}}>
                {image ? <Image source={image} style={{height: 30, width: 30, borderRadius: 30}}/> : null}
            </View>
        </View>
    )
}
