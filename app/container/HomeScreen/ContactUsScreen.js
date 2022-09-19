import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";


class ContactUsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderComponent title={"Contact us"} Drawer={true} Location={false} Props={this.props.value}
                                 titleStyle={{color: colors.blackAndWhite}}/>
                <Image source={require('../../images/ContactusImage.png')} style={{
                    height: undefined,
                    width: "50%",
                    marginVertical: 10,
                    alignSelf: "center",
                    aspectRatio: 1
                }}/>
                <View style={{borderRadius:30,marginTop:30,backgroundColor:colors.BackgroundView,marginHorizontal:20,paddingHorizontal:10,paddingBottom:20}}>
                    <View style={{backgroundColor:colors.whiteToGreen,borderRadius:10,paddingVertical:10,marginHorizontal:20,zIndex:2,elevation:2,top:-30,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:colors.blackAndWhite,fontSize:16,fontFamily:Constants.fontFamilyMedium}}>Send us a Message</Text>
                        <Text style={{color:colors.blackAndWhite,fontSize:12,fontFamily:Constants.fontFamilyMedium}}>How can we help you today ?</Text>
                    </View>
                </View>
                <View style={{flex:1}}/>
                <TouchableOpacity style={{backgroundColor:Color.primary,justifyContent:"center",alignItems:"center",paddingVertical:20,borderTopLeftRadius:70}}>
                    <Text style={{fontSize:20,fontFamily:Constants.fontFamilyBold,color:"#fff"}}>Submit</Text>

                </TouchableOpacity>
            </View>

        );
    }
}

export default withLanguage(ContactUsScreen)
