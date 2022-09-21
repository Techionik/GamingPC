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
import BannerComponent from "../Components/BannerComponent";
import {Modalize} from "react-native-modalize";
import AntDesign from "react-native-vector-icons/AntDesign";


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.filterModel=React.createRef()
        this.state = {
            arr:[{image:require('../../images/S1.png'),title:"Nail Polish"},{image:require('../../images/S2.png'),title:"Nail Polish"},{image:require('../../images/S1.png'),title:"Nail Polish"},{image:require('../../images/S2.png'),title:"Nail Polish"}]

        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor, paddingHorizontal: 15}}>
                <HeaderComponent style={{marginHorizontal:0}} titleStyle={{color:colors.blackAndWhite}}  Props={this.props.value}/>
                <SearchAndFilter onPress={()=>{this.filterModel.current.open()}} Props={this.props.value}/>
                <BannerComponent image={require('../../images/Banner.png')} Props={this.props.value}/>
                <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10}}>
                     <HomeButtons colors={colors}  title={t("L:Inhouse")} Icon={require("../../images/HomeIcon.png")} />
                     <HomeButtons colors={colors}  title={t("L:ExpertReservation")} Style={{marginHorizontal:30}} Icon={require("../../images/ExpertIcon.png")} />
                     <HomeButtons colors={colors}  title={t("L:InSalon")} Icon={require("../../images/StoreIcon.png")} />
                </View>
                <ProductHeader colors={colors} title={t("L:TrendingServices")} />
                <View style={{flex:1,}}>
                <FlatList  showsVerticalScrollIndicator={false} numColumns={2}  contentContainerStyle={{alignItems:"center",paddingBottom:30}}  data={this.state.arr} renderItem={({item,index})=>
                    <View style={{margin:10}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ServicesScreen")}} style={{borderRadius:10}}>
                            <Image source={item.image} resizeMode={"contain"} style={{height:144,width:144}}/>
                        </TouchableOpacity>
                        <Text style={{fontSize:14,marginVertical:5,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite,}}>{item.title}</Text>
                    </View>
                }/>
                </View>
                <Modalize
                    handleStyle={{ height: 0 }}
                    closeOnOverlayTap={true}
                    modalStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
                    rootStyle={{ backgroundColor: "rgba(0,0,0,0)" }}

                    overlayStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                    panGestureComponentEnabled adjustToContentHeight={true}
                    ref={this.filterModel}>
                    <View style={{borderTopLeftRadius:30,borderTopRightRadius:30,backgroundColor:Color.primary,paddingTop:10}}>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View/>
                        <Text style={{fontSize:16,alignSelf:"center",fontFamily:Constants.fontFamilyBold,color:"#fff"}}>Filter</Text>
                        <AntDesign onPress={()=>{this.filterModel.current.close()}} name={"closecircleo"} size={18} color={"#fff"} style={{left:-30}}/>
                        </View>
                       <View style={{borderTopLeftRadius:30,borderTopRightRadius:30,paddingTop:15,paddingHorizontal:10,backgroundColor:colors.screenBackgroundColor,}}>

                       </View>
                    </View>
                </Modalize>
            </View>

        );
    }
}

export default withLanguage(HomeScreen)


