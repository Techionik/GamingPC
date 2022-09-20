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
import ButtonComponent from "../Components/ButtonComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderComponent from "../Components/HeaderComponent";
import SearchAndFilter from "../Components/SearchAndFilter";
import SocialButton from "../Components/SocialButton";
import HomeButtons from "../Components/HomeButtons";
import ProductHeader from "../Components/ProductHeader";
import {black} from "../../common/Color";
import BannerComponent from "../Components/BannerComponent";


class ServicesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[{image:require('../../images/S1.png'),title:"Nail Polish"},{image:require('../../images/S2.png'),title:"Nail Polish"},{image:require('../../images/S1.png'),title:"Nail Polish"},{image:require('../../images/S2.png'),title:"Nail Polish"}]

        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor,}}>
                <HeaderComponent colors={colors} Drawer={true} title={"Services"} Props={this.props.value}/>
                <View style={{marginHorizontal:15}}>
                <SearchAndFilter Props={this.props.value}/>
                <BannerComponent image={require("../../images/Banner.png")}  Props={this.props.value}/>
                </View>
                <Text style={{fontSize:14,marginVertical:10,marginLeft:20,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite}}>Near by</Text>
                <View style={{flex:1}}>
                    <FlatList contentContainerStyle={{paddingBottom:40}} showsVerticalScrollIndicator={false}  data={this.state.arr} style={{borderBottomWidth:0.5,borderColor:"989393"}} renderItem={({item,index})=>
                       <ServiceComponent onPress={()=>{this.props.navigation.navigate("ServiceStoreScreen")}} index={index} item={item} Props={this.props.value}/>
                    }/>
                </View>
            </View>

        );
    }
}

export default withLanguage(ServicesScreen)
function ServiceComponent({Props,item,index,onPress}){
    const {t,language,themeColor}=Props
    const {colors}=themeColor
    return(
        <View style={{flexDirection:"row",paddingHorizontal:20,paddingVertical:5,borderTopWidth:0.5,borderColor:colors.greyToWhite}}>
            <Image source={item.image} resizeMode={"contain"} style={{height:80,width:80,borderWidth:1.5,borderColor:Color.primary,borderRadius:5}}/>
            <View style={{marginLeft:10,marginVertical:5}}>
                <Text style={{fontSize:14,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite}}>The Big Tease Saloon</Text>
                <Image source={require('../../images/Star.png')} resizeMode={"contain"} style={{height:undefined,width:"40%",aspectRatio:3.8}}/>
                <Text style={{fontSize:12,fontFamily:Constants.fontFamilyMedium,color:"#FBC424"}}>( 23 % OFF )</Text>
                <TouchableOpacity onPress={onPress} style={{paddingVertical:2,paddingHorizontal:10,marginTop:5,borderRadius:5,backgroundColor:"#40E080",alignSelf:"flex-start"}}>
                    <Text style={{fontSize:12,fontFamily:Constants.fontFamilyMedium,color:"#fff"}}>{t("L:Open")}</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginVertical:5,flex:1,alignItems:"flex-end"}}>
                <Image source={index==0?require('../../images/HeartIcon.png'):require('../../images/EmpityHeart.png')} resizeMode={"contain"} style={{height:undefined,width:"22%",tintColor:colors.redToWhite,aspectRatio:1}}/>
                <View style={{flexDirection:"row",alignItems:"center",marginVertical:10,justifyContent:"flex-end"}}>
                    <Image source={require('../../images/MarkerPin.png')} resizeMode={"contain"}
                           style={{height: undefined, width: "16%", aspectRatio: 1, tintColor: Color.grayIn}}/>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.blackAndWhite,
                        marginLeft: 5,
                    }}>8 Km</Text>
                </View>
                <Text  style={{
                    fontSize: 12,
                    fontFamily: Constants.fontFamilyRegular,
                    color: colors.blackAndWhite,
                }}>12 pm - 10</Text>
            </View>
        </View>
    )
}
