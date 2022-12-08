import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";

import HeaderWihBackground from "../Components/HeaderWihBackground";
import ButtonComponent from "../Components/ButtonComponent";



class AttendenceScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region:undefined,
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={"Attendance"} colors={colors} Props={this.props.value}/>
                     <View style={{flex:1}}/>
                    <ButtonComponent onPress={()=>{alert(JSON.stringify(this.state))}}  title={"Submit"}/>
            </View>

        );
    }
}

export default withLanguage(AttendenceScreen)

