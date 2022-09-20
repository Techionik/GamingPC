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

        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1,}}>
                <ImageBackground source={require('../images/MapBackground.png')} style={{flex: 1}}>
                    <View style={{backgroundColor: colors.screenBackgroundColor, borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
                        <FieldComponent theme={colors} value={this.state.Search} onChangeText={(text) => {
                            this.setState({Search: text})
                        }} Placeholder={t("L:Searchlocation")} Icon={require('../images/SearchIcon.png')}
                                        Style={{marginHorizontal: 20, marginTop: 20}}
                                        IconStyle={{width: "6%", marginRight: 0}}/>
                        <View style={{padding: 20}}>
                           <Location colors={colors} Props={this.props.value} address={"St-14, Newcity Mall , FC Jersey Road , London."} status={"CurrentAddress"}/>
                           <Location colors={colors}  Props={this.props.value} address={"St-14, Newcity Mall , FC Jersey Road , London."} status={"PreviousAddress"}/>
                             <ButtonComponent onPress={()=>{this.props.navigation.replace("homeStack")}} title={t("L:Saved")} Style={{backgroundColor:colors.greyToTheme,marginHorizontal:40}} titleStyle={{color:colors.greyToWhite}}/>
                        </View>
                    </View>

                </ImageBackground>
            </View>

        );
    }
}

export default withLanguage(MapScreen)
function Location({style,onPress,status,address,Props,colors}){
    const {t,language}=Props
    return(
        <TouchableOpacity onPress={onPress} style={[{marginBottom:10},style]}>
            <Text style={{
                fontSize: 14,
                fontFamily: Constants.fontFamilyRegular,
                color: colors.blackAndWhite
            }}>{t(`L:${status}`)}</Text>
            <View style={{flexDirection: "row",marginTop:5, alignItems: "center"}}>
                <Image source={require('../images/MarkerPin.png')} resizeMode={"contain"}
                       style={{height: undefined, width: "5%",alignSelf:"flex-start", aspectRatio: 1}}/>
                <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite,marginLeft:5,width:"70%"}}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}
