import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";

import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import DropdownComponent from "../Components/DropdownComponent";
import FieldComponent from "../Components/FieldComponent";
import ButtonComponent from "../Components/ButtonComponent";
import {Dropdown} from "react-native-material-dropdown";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from "moment";
import TouchableComponent from "../Components/TouchableComponent";
import {Color} from "../../common";


class AttendenceScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

