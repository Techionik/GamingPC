import React from 'react'
import {
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import SkipButton from "../Components/SkipButton";
import {Color, Constants} from "../../common";
import ButtonComponent from "../Components/ButtonComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderComponent from "../Components/HeaderComponent";


class GenderSelectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {t, language} = this.props.value
        return (
            <View style={{flex: 1, backgroundColor: "#fff", paddingHorizontal: 15}}>
                <HeaderComponent Props={this.props.value}/>
                <Image source={require("../../images/GenderImage.png")} resizeMode={"contain"} style={{height:undefined,width:"50%",marginTop:30,aspectRatio:1,alignSelf:"center"}}/>
                <Text style={{fontSize:20,fontFamily:Constants.fontFamilyMedium,color:"#000",marginVertical:10,textAlign:"center"}}>{t("L:GenderText")}</Text>
                <Text style={{fontSize:12,fontFamily:Constants.fontFamilyMedium,color:Color.gray,textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</Text>
                <View style={{marginHorizontal:20}}>
                    <View style={{flexDirection:"row",alignItems:"center",marginVertical:10,justifyContent:"space-between"}}>
                        <GenderSelection image={require('../../images/GenderMan.png')} title={t("L:Men")}/>
                        <GenderSelection image={require('../../images/GenderWomen.png')} title={t("L:Women")}/>
                    </View>
                    <GenderSelection image={require('../../images/GenderBoth.png')} title={t("L:Both")}/>
                </View>
                <View style={{flex:1}}/>
                <ButtonComponent onPress={()=>{this.props.navigation.navigate("HomeScreen")}} title={t("L:Select")}/>
            </View>

        );
    }
}

export default withLanguage(GenderSelectionScreen)

function GenderSelection({title,image,style}){
    return(
        <View style={{alignSelf:"flex-start",}}>
            <TouchableOpacity style={[{padding:10,borderRadius:10,backgroundColor:Color.primary,alignSelf:"flex-start"},style]}>
                <Image source={image} resizeMode={"contain"} style={{height:100,width:100,}}/>
            </TouchableOpacity>
            <Text style={{fontSize:15,fontFamily:Constants.fontFamilyMedium,color:"#000",textAlign:"center"}}>{title}</Text>
        </View>
    )
}
