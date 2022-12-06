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

                <HeaderWihBackground isBack={true} title={"Leave"} colors={colors}  Props={this.props.value}/>

                <ScrollView contentContainerStyle={{flexGrow: 1,paddingHorizontal:15,marginBottom:20}}>
                    {/*<DropdownComponent title={"Start time"} Icon={require('../../images/TimeIcon.png')} theme={colors}/>*/}
                    {/*<DropdownComponent title={"End time"} Icon={require('../../images/TimeIcon.png')} theme={colors}/>*/}
                    <FieldComponent theme={colors} Placeholder={"Start Date"} IconStyle={{width:"6%"}} Icon={require('../../images/calendar.png')}/>
                    <FieldComponent theme={colors} Placeholder={"End Date"} IconStyle={{width:"6%"}} Icon={require('../../images/calendar.png')}/>
                    <FieldComponent nolines={6}  Placeholder={"Description"} FieldStyle={{textAlignVertical:"top"}} theme={colors} Icon={false}/>
                     <View style={{flex:1}}/>
                    <ButtonComponent onPress={()=>{this.props.navigation.pop()}} title={"Submit"}/>
                </ScrollView>

            </View>

        );
    }
}

export default withLanguage(AttendenceScreen)

