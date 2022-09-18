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


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[{image:require('../../images/S1.png'),title:"Nail Polish"},{image:require('../../images/S2.png'),title:"Nail Polish"},{image:require('../../images/S1.png'),title:"Nail Polish"},{image:require('../../images/S2.png'),title:"Nail Polish"}]

        }
    }

    render() {
        const {t, language} = this.props.value
        return (
            <View style={{flex: 1, backgroundColor: "#fff", paddingHorizontal: 15}}>
                <HeaderComponent Props={this.props.value}/>
                <SearchAndFilter Props={this.props.value}/>
                <Banner Props={this.props.value}/>
                <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10}}>
                     <HomeButtons title={t("L:Inhouse")} Icon={require("../../images/HomeIcon.png")} />
                     <HomeButtons title={t("L:ExpertReservation")} Style={{marginHorizontal:30}} Icon={require("../../images/ExpertIcon.png")} />
                     <HomeButtons title={t("L:InSalon")} Icon={require("../../images/StoreIcon.png")} />
                </View>
                <ProductHeader title={"Trending Services"} />
                <View style={{flex:1,}}>
                <FlatList showsVerticalScrollIndicator={false} numColumns={2}  contentContainerStyle={{alignItems:"center"}}  data={this.state.arr} renderItem={({item,index})=>
                    <View style={{margin:10}}>
                        <TouchableOpacity style={{borderRadius:10}}>
                            <Image source={item.image} resizeMode={"contain"} style={{height:144,width:144}}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:14,marginVertical:5,fontFamily:Constants.fontFamilyMedium,color:"#000",}}>{item.title}</Text>
                    </View>
                }/>
                </View>



            </View>

        );
    }
}

export default withLanguage(HomeScreen)

export function Banner({Props,style}){
    const {t,language}=Props
    return(
        <View style={[{borderRadius:20,padding:10,backgroundColor:Color.primary,flexDirection:"row"},style]}>
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
