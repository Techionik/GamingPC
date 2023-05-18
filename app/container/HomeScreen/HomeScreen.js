import React from 'react'
import {
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import ButtonComponent from "../Components/ButtonComponent";

import HomeComponent from "../Components/HomeComponent";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import HeaderComponent from "../Components/HeaderComponent";
import {connect} from "react-redux";
import {getData} from "../../redux/user/operations";
import axios from "axios";
import {HomeScreenComponent} from "../Components/HomeScreenComponent";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo,
});


@connect(
    mapStateToProps,
    {getData},
)

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor,}}>
                <HeaderWihBackground Style={{paddingTop: 30, paddingBottom: 40}} t={t} Props={this.props.value}/>
                <ScrollView showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingTop:20,

                                justifyContent: "center",
                                paddingHorizontal: 15,
                                marginBottom: 20
                            }}>
                    <View>
                        <Image source={require('../../images/WaterMark.png')}
                               style={{aspectRatio: 0.9, marginVertical: 30,alignSelf:"center",height: undefined, width: "50%"}}/>
                        {this.props?.user?.userInfo?.Rolee === "Employee" ?
                            <>
                                <View style={{flexDirection:"row"}}>
                                    <HomeScreenComponent title={"Attendance"} image={require('../../images/Attendance.png')}  onPress={()=>{this.props.navigation.navigate("AttendenceScreen")}}/>
                                    <HomeScreenComponent title={"Breaks"} image={require('../../images/Breaks.png')}  onPress={()=>{this.props.navigation.navigate("BreakTimeScreen")}}/>
                                </View>
                                <View style={{flexDirection:"row"}}>
                                    <HomeScreenComponent title={"Leave"} image={require('../../images/Leaves.png')}  onPress={() =>{this.props.navigation.navigate("LeaveScreen")}}/>
                                    <HomeScreenComponent title={"Complains"} image={require('../../images/Complains.png')}  onPress={()=>{this.props.navigation.navigate("EmployComplainsScreen")}}/>
                                </View>
                            </> : this.props?.user?.userInfo?.Rolee === "Admin" ?
                                <>
                                    <View style={{flexDirection:"row"}}>
                                        <HomeScreenComponent title={"Attendance"} image={require('../../images/Attendance.png')}  onPress={()=>{this.props.navigation.navigate("AttendenceScreen")}}/>
                                        <HomeScreenComponent title={"Breaks"} image={require('../../images/Breaks.png')}  onPress={()=>{this.props.navigation.navigate("BreakTimeScreen")}}/>
                                    </View>
                                    <View style={{flexDirection:"row"}}>
                                        <HomeScreenComponent title={"Leave"} image={require('../../images/Leaves.png')}  onPress={() =>{this.props.navigation.navigate("LeaveScreen")}}/>
                                        <HomeScreenComponent title={"Complains"} image={require('../../images/Complains.png')}  onPress={()=>{this.props.navigation.navigate("EmployComplainsScreen")}}/>
                                    </View>
                                    <HomeScreenComponent title={"Employee Leaves"} image={require('../../images/division.png')}  onPress={()=>{this.props.navigation.navigate("LeavesScreen")}}/>

                                </> :this.props?.user?.userInfo?.Rolee === "Super Admin" ?

                                <>
                                    <HomeScreenComponent title={" Attendance"} image={require('../../images/verification.png')} />
                                    <HomeScreenComponent title={"Employee Leaves"} image={require('../../images/division.png')}  onPress={()=>{this.props.navigation.navigate("LeavesScreen")}}/>
                                    <HomeScreenComponent title={"Complains"} image={require('../../images/businessman.png')}  onPress={()=>{this.props.navigation.navigate("ComplainsScreen")}}/>

                                </>:null}
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default withLanguage(HomeScreen)




