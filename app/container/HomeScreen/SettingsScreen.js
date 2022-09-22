import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
// import HeaderComponent from "../Components/HeaderComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderWihBackground from "../Components/HeaderWihBackground";


class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{font: "L", title: "Tina Khan", price: "SAR 695.05"}, {
                font: "L",
                title: "Talish Sim",
                price: "SAR 695.05"
            }, {font: "L", title: "Talish Sim", price: "SAR 695.05"}, {
                font: "L",
                title: "Talish Kahan",
                price: "SAR 695.05"
            }, {font: "L", title: "Talish Sim", price: "SAR 695.05"},
                {font: "L", title: "Talish Kahan", price: "SAR 695.05"},
            ]
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={"Setting"} colors={colors}  Props={this.props.value}/>
            </View>

        );
    }
}

export default withLanguage(SettingsScreen)

