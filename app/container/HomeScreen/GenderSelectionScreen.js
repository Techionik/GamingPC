import React from 'react'
import {
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
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
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <ScrollView contentContainerStyle={{paddingBottom:20}} style={{flex: 1, backgroundColor: colors.screenBackgroundColor, paddingHorizontal: 15}}>
                <HeaderComponent Props={this.props.value}/>
                <Image source={require("../../images/GenderImage.png")} resizeMode={"contain"}
                       style={{height: undefined, width: "50%", aspectRatio: 1, alignSelf: "center"}}/>
                <Text style={{
                    fontSize: 20,
                    fontFamily: Constants.fontFamilyMedium,
                    color: colors.blackAndWhite,
                    marginVertical: 10,
                    textAlign: "center"
                }}>{t("L:GenderText")}</Text>
                <Text style={{
                    fontSize: 12,
                    fontFamily: Constants.fontFamilyMedium,
                    color: colors.greyToWhite,
                    textAlign: "center"
                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry.</Text>
                <View style={{marginHorizontal: 20}}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        justifyContent: "space-between"
                    }}>
                        <GenderSelection colors={colors} image={require('../../images/GenderMan.png')}
                                         title={t("L:Men")}/>
                        <GenderSelection colors={colors} image={require('../../images/GenderWomen.png')}
                                         title={t("L:Women")}/>
                    </View>
                    <GenderSelection colors={colors} image={require('../../images/GenderBoth.png')}
                                     title={t("L:Both")}/>
                </View>
                <View style={{flex: 1}}/>
                <ButtonComponent onPress={() => {
                    this.props.navigation.navigate("HomeScreen")
                }} title={t("L:Select")}/>
            </ScrollView>

        );
    }
}

export default withLanguage(GenderSelectionScreen)

function GenderSelection({title, image, style, colors}) {
    return (
        <View style={{alignSelf: "flex-start",}}>
            <TouchableOpacity style={[{
                padding: 10,
                borderRadius: 10,
                backgroundColor: Color.primary,
                alignSelf: "flex-start"
            }, style]}>
                <Image source={image} resizeMode={"contain"} style={{height: 100, width: 100,}}/>
            </TouchableOpacity>
            <Text style={{
                fontSize: 15,
                fontFamily: Constants.fontFamilyMedium,
                color: colors.blackAndWhite,
                textAlign: "center"
            }}>{title}</Text>
        </View>
    )
}
