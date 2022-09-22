import React from 'react'
import {
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import ButtonComponent from "../Components/ButtonComponent";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import HomeComponent from "../Components/HomeComponent";


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex:1,backgroundColor: colors.screenBackgroundColor,}}>
                <HeaderWihBackground colors={colors}  Props={this.props.value}/>
                <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={{flexGrow: 1,paddingHorizontal:15,marginBottom:20 }}>
                    <Text style={{color:colors.blackAndWhite,fontSize:15,fontFamily:Constants.fontFamilyRegular,marginVertical:20}}>Your Insights</Text>

                    <View style={{backgroundColor:colors.whiteToDark,elevation:2,borderRadius:10,padding:30,}}>
                        <Image style={{height:undefined,width:"100%",aspectRatio:2.543}} resizeMode={"cover"} source={require("../../images/graphImage.png")}/>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:20}}>
                        <HomeComponent onPress={()=>{this.props.navigation.navigate("JobsScreen")}} image={require("../../images/jobsImage.png")} title={"Jobs"} colors={colors}/>
                        <HomeComponent onPress={()=>{this.props.navigation.navigate("EarningScreen")}} image={require("../../images/earningImage.png")} title={"Earning"} colors={colors}/>

                    </View>
                    <HomeComponent onPress={()=>{this.props.navigation.navigate("MapScreen")}} image={require("../../images/jobLocationImage.png")} title={"Jobs Location"} colors={colors}/>


                </ScrollView>
            </View>

        );
    }
}

export default withLanguage(HomeScreen)

