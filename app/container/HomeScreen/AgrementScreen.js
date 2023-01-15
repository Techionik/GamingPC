import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import ToggleSwitch from "toggle-switch-react-native";
import {connect} from "react-redux";
import RNRestart from "react-native-restart";

import {changeLanguage, changeTheme} from "../../redux/app/actions";
const mapStateToProps=({user,app})=>({
    user,
    app,
    languagee:user?.languagee

})
@connect(
    mapStateToProps,
    {changeTheme,changeLanguage}
)


class AgrementScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           lighttodark:this.props.app?.theme=='light'?false:true,
            englishtoarabic:this.props.value.language=='en'?false:true,
            type:false,
            Saloon:false
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        const {type}=this.state
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={t("L:Settings")} colors={colors}  Props={this.props.value}/>
                <View style={{flexDirection:"row",alignItems:'center',margin:15,}}>
                    <Text style={{fontSize:12,flex:1,marginRight:5,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{t("L:AgrementText")}</Text>
                    <ToggleSwitch
                        isOn={this.state.type}
                        onColor={Color.primary}
                        offColor="#D6D6D6"
                        value={this.props.app?.type}
                        onToggle={(newState) => {
                            this.setState({type:!this.state.type})
                        }
                        }

                    />
                </View>
                <View style={{borderTopWidth:1,padding:10,borderBottomWidth:1,borderColor:!type?colors.greyToWhite:colors.blackAndWhite}}>
                <Text style={{fontSize:12,fontFamily:Constants.fontFamilySemiBold,marginRight:5,color:!type?colors.greyToWhite:Color.primary}}>{t("L:MinimumPriceRange")}</Text>
                <View style={{flexDirection:"row",marginTop:5,alignItems:'center',}}>
                    <Text style={{fontSize:12,flex:1,fontFamily:Constants.fontFamilyRegular,marginRight:5,color:!type?colors.greyToWhite:colors.blackAndWhite}}>{t("L:MinimumPrice")}</Text>
                     <TextInput editable={!type?false:true} placeholderTextColor={!type?colors.greyToWhite:colors.blackAndWhite} placeholder={"i.e : 60.00 SAR"} style={{paddingHorizontal:5,color:colors.greyToWhite,fontSize:10,paddingVertical:0,borderWidth:0.5,borderRadius:5,borderColor:!type?colors.greyToWhite:colors.blackAndWhite}}/>
                </View>
                    <Text style={{fontSize:12,marginTop:5,fontFamily:Constants.fontFamilySemiBold,marginRight:5,color:!type?colors.greyToWhite:Color.primary}}>{t("L:Approxlocation")}</Text>
                    <View style={{flexDirection:"row",marginTop:5,alignItems:'center',}}>
                        <Text style={{fontSize:12,flex:1,fontFamily:Constants.fontFamilyRegular,marginRight:5,color:!type?colors.greyToWhite:colors.blackAndWhite}}>{t("L:MentionApproxLocation")}</Text>
                        <TextInput editable={!type?false:true} placeholderTextColor={!type?colors.greyToWhite:colors.blackAndWhite} placeholder={t("L:ApproxLocation")} style={{paddingHorizontal:5,color:colors.greyToWhite,fontSize:10,paddingVertical:0,borderWidth:0.5,borderRadius:5,borderColor:!type?colors.greyToWhite:colors.blackAndWhite}}/>
                    </View>
                </View>
                <View style={{flexDirection:"row",alignItems:'center',margin:15,}}>
                    <Text style={{fontSize:12,flex:1,marginRight:5,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{t("L:SaloonText")}</Text>
                    <ToggleSwitch
                        isOn={this.state.Saloon}
                        onColor={Color.primary}
                        offColor="#D6D6D6"
                        value={this.props.app?.Saloon}
                        onToggle={(newState) => {
                            this.setState({Saloon:!this.state.Saloon})
                        }
                        }

                    />
                </View>
                {/*<View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between',margin:10,padding:15,borderRadius:10,backgroundColor:colors.fieldBackgroundColor,elevation:2}}>*/}
                {/*    <Text style={{fontSize:16,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>{t("L:EnglishToArabic")}</Text>*/}
                {/*    <ToggleSwitch*/}
                {/*        isOn={this.state.englishtoarabic}*/}
                {/*        onColor={colors.drawerBackgroundColor}*/}
                {/*        offColor="#D6D6D6"*/}
                {/*        onToggle={() => {*/}
                {/*            this.setState({englishtoarabic: !this.state.englishtoarabic})*/}
                {/*            if(this.props.value.language=='en'){*/}
                {/*                this.props.changeLanguage("ur")*/}
                {/*            }else{*/}
                {/*                this.props.changeLanguage("en")*/}
                {/*            }*/}
                {/*        setTimeout(()=>{   RNRestart.Restart()},200)*/}

                {/*    }}*/}
                {/*    />*/}
                {/*</View>*/}

            </View>

        );
    }
}

export default withLanguage(AgrementScreen)

