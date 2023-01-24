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
import {Color, Constants} from "../../common";
import CountDown from "react-native-countdown-component";
import {connect, useDispatch} from "react-redux";
import {BrakeTimes} from "../../redux/user/actions";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    brakeTime: user?.brakeTime,
});


@connect(
    mapStateToProps,
    {BrakeTimes}
)
class BreakTimeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            StartTime: "",
            EndTime: "",
            time: "",
            data: [],
            submit: true

        }
    }

    brake(){
        setTimeout(()=>{
            const data = this.state.data
            const newdata = [...data, {startBrake: this.state.StartTime, endBrake: this.state.EndTime}]
            this.props.BrakeTimes(newdata)
            this.props.navigation.pop()
        },1000)
    }


    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={"Break Time"} colors={colors} Props={this.props.value}/>
                <View style={{padding: 10}}>
                    <Image source={require('../../images/WaterMark.png')} style={{
                        aspectRatio: 0.9,
                        marginVertical: 10,
                        alignSelf: "center",
                        height: undefined,
                        width: "70%"
                    }}/>
                    <TouchableComponent disabled={this.state.checkin} onPress={() => {
                        alert("Your break time is started now.")
                        this.setState({StartTime: moment(moment()).format("HH:MM"), time: "30"})
                    }} title={"Start Time"} Icon={require('../../images/TimeIcon.png')}
                                        IconStyle={{tintColor: this.state.time == "30" ? "#fff" : colors.fieldTextColor}}
                                        titleStyle={{color: this.state.time == "30" ? "#fff" : colors.fieldTextColor}}
                                        Style={{backgroundColor: this.state.time == "30" ? Color.primary : colors.fieldBackgroundColor}}
                                        theme={colors}/>
                    <TouchableComponent disabled={this.state.checkin} onPress={() => {
                        alert("Your break time is over now.")
                        this.setState({EndTime: moment(moment()).format("HH:MM"), time: "60", submit: false})
                        this.brake()
                    }} title={"End Time"} Icon={require('../../images/TimeIcon.png')}
                                        IconStyle={{tintColor: this.state.time == "60" ? "#fff" : colors.fieldTextColor}}
                                        titleStyle={{color: this.state.time == "60" ? "#fff" : colors.fieldTextColor}}
                                        Style={{backgroundColor: this.state.time == "60" ? Color.primary : colors.fieldBackgroundColor}}
                                        theme={colors}/>
                </View>

            </View>
        );
    }
}

export default withLanguage(BreakTimeScreen)

