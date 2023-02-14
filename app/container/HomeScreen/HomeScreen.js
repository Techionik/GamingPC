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

    componentDidMount() {


    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor,}}>
                <HeaderWihBackground Style={{paddingTop: 30, paddingBottom: 40}} t={t} Props={this.props.value}/>
                <ScrollView showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                flexGrow: 1,
                                justifyContent: "center",
                                paddingHorizontal: 15,
                                marginBottom: 20
                            }}>
                    <View>
                        <Image source={require('../../images/WaterMark.png')}
                               style={{aspectRatio: 0.9, marginTop: 10, height: undefined, width: "100%"}}/>

                        {this.props?.user?.userInfo?.Rolee === "Employee" ?
                            <>
                                <ButtonComponent onPress={() => {
                                    this.props.navigation.navigate("AttendenceScreen")
                                }} title={"Attendance"}/>
                                <ButtonComponent onPress={() => {
                                    this.props.navigation.navigate("BreakTimeScreen")
                                }} title={"Break"}/>
                                <ButtonComponent onPress={() => {
                                    this.props.navigation.navigate("LeaveScreen")
                                }} title={"Leave"}/>
                                <ButtonComponent onPress={() => {
                                    this.props.navigation.navigate("EmployComplainsScreen")
                                }} title={"Complains"}/>
                            </> : this.props?.user?.userInfo?.Rolee === "Admin" ?
                                <>
                                    <ButtonComponent onPress={() => {
                                        this.props.navigation.navigate("AttendenceScreen")
                                    }} title={"Attendance"}/>
                                    <ButtonComponent onPress={() => {
                                        this.props.navigation.navigate("BreakTimeScreen")
                                    }} title={"Break"}/>
                                    <ButtonComponent onPress={() => {
                                        this.props.navigation.navigate("LeaveScreen")
                                    }} title={"Leave"}/>
                                    <ButtonComponent onPress={() => {
                                        this.props.navigation.navigate("LeavesScreen")
                                    }} title={"Employ Leaves"}/>

                                </> :this.props?.user?.userInfo?.Rolee === "Super Admin" ?

                                <>
                                    <ButtonComponent onPress={() => {
                                        this.props.navigation.navigate("LeavesScreen")
                                    }} title={"Employ Leaves"}/>
                                    <ButtonComponent onPress={() => {
                                        this.props.navigation.navigate("ComplainsScreen")
                                    }} title={"Complains"}/>

                                    <ButtonComponent onPress={() => {
                                        this.props.navigation.navigate("PayRoleScreen")
                                    }} title={"Pay Roll"}/>
                                </>:null}
                        {/*<View style={{*/}
                        {/*    flexDirection: 'row',*/}
                        {/*    alignItems: 'center',*/}
                        {/*    justifyContent: 'space-evenly',*/}
                        {/*    marginTop: 20,*/}

                        {/*}}>*/}

                        {/*    <HomeComponent onPress={()=>{this.props.navigation.navigate("AttendenceScreen")}}  image={require("../../images/jobsImage.png")} title={"Attendance"}*/}
                        {/*                   colors={colors}/>*/}
                        {/*    <HomeComponent onPress={()=>{this.props.navigation.navigate("LeaveScreen")}} image={require("../../images/Leave.png")} title={"Leave"} colors={colors}/>*/}
                        {/*</View>*/}

                        {/*<View style={{*/}
                        {/*    flexDirection: 'row',*/}
                        {/*    alignItems: 'center',*/}
                        {/*    justifyContent: 'space-evenly',*/}
                        {/*}}>*/}
                        {/*    <HomeComponent onPress={()=>{this.props.navigation.navigate("BreakTimeScreen")}} image={require("../../images/coffee-break.png")} title={"Break Time"}*/}
                        {/*                   colors={colors}/>*/}
                        {/*    <HomeComponent image={require("../../images/earningImage.png")} title={"Pay Report"}*/}
                        {/*                   colors={colors}/>*/}


                        {/*</View>*/}

                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default withLanguage(HomeScreen)

