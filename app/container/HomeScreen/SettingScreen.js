import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import ToggleButton from "react-native-toggle-element";



class SettingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
                <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>
                    <ImageBackground source={require('../../images/BackgroundLarge.png')}
                                     style={{height: undefined, width: "100%", aspectRatio: 1.3}}>
                        <HeaderComponent titleStyle={{color: "#fff"}} title={"Profile"} Drawer={true}
                                         Location={false} Props={this.props.value}/>
                        <Image source={require('../../images/ProfileImage.png')} style={{marginTop:20,height:undefined,width:"17%",alignSelf:"center",aspectRatio:1}}/>
                        <Text style={{alignSelf:"center",marginTop:20,fontSize:14,fontFamily:Constants.Bold,color:"#fff"}}>Mitchels Galeria</Text>
                        <Text style={{alignSelf:"center",fontSize:14,fontFamily:Constants.Bold,color:"#fff",textDecorationLine:"underline"}}>Mitchelsgaleria@example.com</Text>
                    </ImageBackground>
                    <View style={{
                        padding: 20,
                        marginHorizontal: 10,
                        borderRadius: 15,
                        marginVertical:20,
                        backgroundColor: colors.BackgroundView,
                    }}>
                        <Text style={{fontSize:12,fontFamily:Constants.fontFamilyMedium,color:colors.greyToTheme}}>Account Settings</Text>
                     
                    </View>
                </View>


        );
    }
}

export default withLanguage(SettingScreen)
