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


class BreakTimeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            StartTime: "",
            option: "",
            visibleTimePicker: false,
            EndTime: "",
            showTimer: false,
            checkin:false,
            time:""
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={"Break Time"} colors={colors} Props={this.props.value}/>
                <View style={{padding: 10}}>
                    <TouchableComponent disabled={this.state.checkin} onPress={() => {
                        this.setState({visibleTimePicker: true, time: "30"})
                    }} title={"30 minutes"} Icon={require('../../images/TimeIcon.png')} Style={{backgroundColor:this.state.time=="30"?Color.primary:colors.fieldBackgroundColor}} theme={colors}/>
                    <TouchableComponent disabled={this.state.checkin} onPress={() => {
                        this.setState({visibleTimePicker: true, time: "60"})
                    }} title={"60 minutes"} Icon={require('../../images/TimeIcon.png')} Style={{backgroundColor:this.state.time=="60"?Color.primary:colors.fieldBackgroundColor}} theme={colors}/>
                </View>
                <View style={{flex: 1, justifyContent: "center",}}>
                    { this.state.showTimer &&
                        <>
                            <Text style={{
                                color: colors.blackAndWhite,
                                fontSize: 16,
                                marginVertical: 20,
                                fontFamily: Constants.fontFamilyRegular,
                                textAlign: "center"
                            }}>Your Brake Will be over after</Text>
                            {this.state.time=="60"?<CountDown
                                until={1 * 60 * 60}
                                onFinish={() => {
                                    this.setState({showTimer: false})
                                }}
                                // onPress={() => alert('hello')}
                                digitStyle={{backgroundColor: Color.primary}}
                                digitTxtStyle={{color: "#fff"}}
                                timeToShow={['H', 'M', 'S']}
                                size={40}
                            />:<CountDown
                                until={0.5 * 60 * 60}
                                onFinish={() => {
                                    this.setState({showTimer: false})
                                }}
                                // onPress={() => alert('hello')}
                                digitStyle={{backgroundColor: Color.primary}}
                                digitTxtStyle={{color: "#fff"}}
                                timeToShow={[ 'M', 'S']}
                                size={40}
                            />}
                        </>}
                </View>


                {this.state.showTimer == false && this.state.time!=""&&
                    <>
                        <ButtonComponent onPress={() => {
                            this.setState({showTimer: true,checkin:true})
                        }} title={"Start"}/>
                    </>}
            </View>

        );
    }
}

export default withLanguage(BreakTimeScreen)

