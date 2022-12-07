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
const LeaveOptions = [{value: "Normal Leave"}, {value: "Urgent Base Leave"},{value: "Sick Leave"}, {value: "Company Leave"},];


class AttendenceScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption:"Chose Leave Type",
            date:"",
            visibleDatePicker:false,
            dateOfBirth:""
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>

                <HeaderWihBackground isBack={true} title={"Leave"} colors={colors}  Props={this.props.value}/>

                <ScrollView contentContainerStyle={{flexGrow: 1,paddingHorizontal:15,marginBottom:20}}>
                    {/*<DropdownComponent title={"Start time"} Icon={require('../../images/TimeIcon.png')} theme={colors}/>*/}
                    {/*<DropdownComponent title={"End time"} Icon={require('../../images/TimeIcon.png')} theme={colors}/>*/}
                    <FieldComponent theme={colors} Placeholder={"Start Date"} IconStyle={{width:"6%"}} Icon={require('../../images/calendar.png')}/>
                    <FieldComponent theme={colors} Placeholder={"End Date"} IconStyle={{width:"6%"}} Icon={require('../../images/calendar.png')}/>
                    <Dropdown
                    itemColor={colors.blackAndWhite}
                    itemTextStyle={{color: colors.blackAndWhite}}
                    lineWidth={0}
                    pickerStyle={{backgroundColor: colors.BackgroundView, borderRadius: 10}}
                    color={colors.blackAndWhite}
                    fontSize={13}
                    placeholder={this.state.selectedOption}
                    baseColor={colors.blackAndWhite}
                    customTickIcon={<AntDesign name={"caretdown"} color={"#fff"}/>}
                    value={this.state.selectedOption}
                    placeholderTextColor={"grey"}
                    dropdownOffset={{top: 10, right: -10, left: -17}}
                    rippleCentered={true}
                    onChangeText={(value) => {

                    this.setState({selectedOption: value})
                }}
                    containerStyle={{
                    paddingLeft: 20,
                    marginTop: 5,
                    backgroundColor: colors.fieldBackgroundColor,
                    borderRadius: 10,
                    width: "100%",
                }}
                    data={LeaveOptions}
                    />
                    <DateTimePicker
                        isVisible={this.state.visibleDatePicker}
                        showIcon={false}
                        hideText={true}
                        style={{}}
                        date={moment().toDate()}
                        mode="date"
                        placeholder={"select date"}
                        confirmBtnText={"Confirm"}
                        cancelBtnText={"Cancel"}
                        onCancel={() => {
                            this.setState({visibleDatePicker: false})
                        }}
                        customStyles={{
                            dateIcon: {
                                position: "absolute",
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onConfirm={date => {

                            this.setState({
                                visibleDatePicker: false,
                                dateOfBirth: date
                            }, () => {
                                console.log()
                            });
                        }}
                    />

                    <FieldComponent nolines={6}  Placeholder={"Description"} FieldStyle={{textAlignVertical:"top"}} theme={colors} Icon={false}/>
                     <View style={{flex:1}}/>
                    <ButtonComponent onPress={()=>{this.setState({visibleDatePicker:true})}} title={"Submit"}/>
                </ScrollView>
            </View>

        );
    }
}

export default withLanguage(AttendenceScreen)

