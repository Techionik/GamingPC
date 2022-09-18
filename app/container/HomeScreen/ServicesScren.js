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


class ServicesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[{image:require('../../images/S1.png'),title:"Nail Polish"},{image:require('../../images/S2.png'),title:"Nail Polish"},{image:require('../../images/S1.png'),title:"Nail Polish"},{image:require('../../images/S2.png'),title:"Nail Polish"}]

        }
    }

    render() {
        const {t, language} = this.props.value
        return (
            <View style={{flex: 1, backgroundColor: "#fff",}}>
                <HeaderComponent Drawer={true} title={"Services"} Props={this.props.value}/>
                <SearchAndFilter Props={this.props.value}/>
                <Banner Props={this.props.value}/>
                <Text style={{fontSize:14,marginVertical:10,marginLeft:20,fontFamily:Constants.fontFamilyMedium,color:"#000"}}>Near by</Text>
                <View style={{}}>
                    <FlatList showsVerticalScrollIndicator={false}  data={this.state.arr} style={{borderBottomWidth:0.5,borderColor:"989393"}} renderItem={({item,index})=>
                       <ServiceComponent onPress={()=>{this.props.navigation.navigate("ServiceStoreScreen")}} index={index} item={item} Props={this.props.value}/>
                    }/>
                </View>
            </View>

        );
    }
}

export default withLanguage(ServicesScreen)
function ServiceComponent({Props,item,index,onPress}){
    const {t,language}=Props
    return(
        <View style={{flexDirection:"row",paddingHorizontal:20,paddingVertical:5,borderTopWidth:0.5,borderColor:"#989393"}}>
            <Image source={item.image} resizeMode={"contain"} style={{height:80,width:80,borderWidth:1.5,borderColor:Color.primary,borderRadius:5}}/>
            <View style={{marginLeft:10,marginVertical:5}}>
                <Text style={{fontSize:14,fontFamily:Constants.fontFamilyMedium,color:"#000"}}>The Big Tease Saloon</Text>
                <Image source={require('../../images/Star.png')} resizeMode={"contain"} style={{height:undefined,width:"40%",aspectRatio:3.8}}/>
                <Text style={{fontSize:12,fontFamily:Constants.fontFamilyMedium,color:"#FBC424"}}>( 23 % OFF )</Text>
                <TouchableOpacity onPress={onPress} style={{paddingVertical:2,paddingHorizontal:10,marginTop:5,borderRadius:5,backgroundColor:"#40E080",alignSelf:"flex-start"}}>
                    <Text style={{fontSize:12,fontFamily:Constants.fontFamilyMedium,color:"#fff"}}>{t("L:Open")}</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginVertical:5,flex:1,alignItems:"flex-end"}}>
                <Image source={index==0?require('../../images/HeartIcon.png'):require('../../images/EmpityHeart.png')} resizeMode={"contain"} style={{height:undefined,width:"22%",aspectRatio:1}}/>
                <View style={{flexDirection:"row",alignItems:"center",marginVertical:10,justifyContent:"flex-end"}}>
                    <Image source={require('../../images/MarkerPin.png')} resizeMode={"contain"}
                           style={{height: undefined, width: "15%", aspectRatio: 1, tintColor: Color.grayIn}}/>
                    <Text numberOfLines={1} style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: "#000",
                        marginLeft: 5,
                    }}>8 Km</Text>
                </View>
                <Text numberOfLines={1} style={{
                    fontSize: 12,
                    fontFamily: Constants.fontFamilyRegular,
                    color: "#000",
                    marginLeft: 5,
                }}>12 pm - 10 pm</Text>
            </View>
        </View>
    )
}
function Banner({Props}){
    const {t,language}=Props
    return(
        <View style={{borderRadius:20,marginHorizontal:15,padding:10,backgroundColor:"#FFD15C",flexDirection:"row"}}>
            <View style={{marginVertical:10,flex:1}}>
                <Text style={{fontFamily:Constants.fontFamilyBold,fontSize:20,color:"#000"}}>{t("L:UPTO")} 40% {t("L:OFF")}</Text>
                <Text style={{fontFamily:Constants.fontFamilyBold,fontSize:14,color:"#fff"}}>{t("L:SpecialDiscountOffer")}</Text>
                <Text style={{fontFamily:Constants.fontFamilyBold,fontSize:12,color:"#fff"}}>{t("L:fornewCustomers")}</Text>
                <TouchableOpacity style={{alignSelf:"flex-start",marginTop:5,backgroundColor:"#fff",paddingHorizontal:10,paddingVertical:5}}>
                    <Text style={{fontSize:7,fontFamily:Constants.fontFamilyBold,color:"#000"}}>{t("L:ApplyCode")}:<Text style={{color:Color.primary,fontSize:10}}> NEW40OFF</Text></Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../../images/Banner.png')} resizeMode={"contain"} style={{aspectRatio:1.5,width:"50%",height:undefined,alignSelf:"flex-end",}}/>

        </View>
    )
}
