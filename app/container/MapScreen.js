import React from 'react'
import {
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../config/withLanguage";
import FieldComponent from "./Components/FieldComponent";
import {Constants} from "../common";
import ButtonComponent from "./Components/ButtonComponent";


class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: "",

            image:require("../images/B2.png"),
                name:"Vikal Hush",
            jobTitle:"Hydra Facial Spa",
            time:"15 mins Left",


        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1,}}>
                <ImageBackground source={require('../images/MapBackground.png')} style={{flex: 1,justifyContent:'flex-end'}}>
                    <View style={{backgroundColor: colors.screenBackgroundColor, borderRadius: 10, margin:30}}>

                        <View style={{}}>


                            <JobDetail Props={this.props.value} colors={colors} time={this.state.time} name={this.state.name} image={this.state.image} jobTitle={this.state.jobTitle} />
                            <View style={{borderBottomWidth:1,borderBottomColor:colors.languageTextColor}}></View>

                             <ButtonComponent onPress={()=>{this.props.route.params.from=="JobScreen"?this.props.navigation.navigate("RateAndReviewScreen"):null}}  title={this.props.route.params.from=="JobScreen"?t("L:Arrive"):t("L:Direction")} Style={{backgroundColor:colors.blackToGreen,marginHorizontal:40}} titleStyle={{color:"#fff"}}/>
                        </View>
                    </View>

                </ImageBackground>
            </View>

        );
    }
}

export default withLanguage(MapScreen)
function JobDetail({image,name,jobTitle,time,Props,colors}){
    const {t,language}=Props
    return(
        <View style={{flexDirection:'row',paddingTop:10,alignItems:'center',justifyContent:'space-between',paddingHorizontal:15,paddingVertical:12,margin:8,borderRadius:10}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image style={{height:50,width:50,borderRadius:60}} resizeMode={"contain"} source={image} />
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:16,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{name}</Text>
                    <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{jobTitle}</Text>
                </View>

            </View>
            <View>
                <Text style={{fontSize:12,fontFamily:Constants.fontFamilyBold,color:colors.redOrGreen}}>{time}</Text>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity>
                        <Image style={{height:20,width:20}} resizeMode={"contain"} source={require("../images/whatsappImage.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{height:20,width:20}} resizeMode={"contain"} source={require("../images/callImage.png")}/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
