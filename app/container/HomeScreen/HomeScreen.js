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
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default withLanguage(HomeScreen)


export const HomeScreenComponent=({title,onPress,image})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{margin:10,backgroundColor:Color.primary,justifyContent:"center",alignItems:"center",padding:10,borderRadius:15,flex:1}}>
            <View style={{backgroundColor:"#fff",alignItems:"center",justifyContent:"center",height:50,width:50,borderRadius:25}}>
                <Image source={image} style={{aspectRatio:1,width:"70%",height:undefined}}/>
            </View>
            <Text style={{fontSize:14,color:"#fff",fontFamily:Constants.fontFamilyMedium,marginTop:5}}>{title}</Text>
        </TouchableOpacity>
    )
}

