import React from 'react'
import {
    ActivityIndicator,

    FlatList,
    Image,
    ImageBackground, Modal, ScrollView, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../../config/withLanguage";

import HeaderWihBackground from "../../Components/HeaderWihBackground";

import ButtonComponent from "../../Components/ButtonComponent";
import LeaveViewComponent from "../../Components/LeaveViewComponent";
import {connect} from "react-redux";
import FieldComponent from "../../Components/FieldComponent";
import ProfileFieldComponent from "../../Components/ProfileFieldComponent";
import {updateUser} from "../../../redux/user/operations";
import {Color} from "../../../common";
import {toast} from "../../../Omni";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo
});


@connect(
    mapStateToProps,
    {updateUser},
)

class EditProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        const data = this.props?.route?.params?.Data
        this.state = {
            refreshData: false,
            ID: data?.ID,
            Full_Name: data?.Full_Name ? data.Full_Name : "",
            Email: data?.Email ? data.Email : "",
            Pay: data?.Pay ? data.Pay : "",
            Address: data?.Address ? data.Address : "",
            ID_Card: data?.ID_Card ? data.ID_Card : "",
            Phone: data?.Phone ? data.Phone : "",
            Shift: data?.Shift ? data.Shift : "",
            Designation: data?.Designation ? data.Designation : "",
            Role: data?.Rolee ? data.Rolee : "",
            loading: false,


        }
    }

    updateUser() {
        this.setState({loading: true})
        const param = {
            ID: this.state.ID,
            Email: this.state.Email,
            Full_Name: this.state.Full_Name,
            Address: this.state.Address,
            Designation: this.state.Designation,
            ID_Card: this.state.ID_Card,
            Pay: this.state.Pay,
            Phone: this.state.Phone,
            Role: this.state.Role,
            Shift: this.state.Shift,
        }
        this.props.updateUser(param).then(res => {
            if (res) {
                this.setState({loading: false})
                this.props.navigation.pop()
            }
        }).catch(err => {
            this.setState({loading: false})
        })

    }


    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        const state = this.state
        const data = this.props?.route?.params?.Data
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={"User Management"} colors={colors} Props={this.props.value}/>
                <View style={{flex: 1}}>
                    <ScrollView contentContainerStyle={{paddingBottom: 20,}}
                                style={{flex: 1, paddingHorizontal: 10, paddingTop: 20,}}>
                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <ProfileFieldComponent profile={true} value={state?.Full_Name} title={"Name"}
                                                   onChangeText={(text) => {
                                                       this.setState({Full_Name: text})
                                                   }} placeholder={"Enter Name"}
                                                   colors={colors}/>
                        </View>

                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <ProfileFieldComponent profile={true} value={state?.Designation} title={"Designation"}
                                                   onChangeText={(text) => {
                                                       this.setState({Designation: text})
                                                   }} placeholder={"Enter Designation"}
                                                   colors={colors}/>
                        </View>

                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <ProfileFieldComponent profile={true} value={state?.Email} title={"Email"}
                                                   onChangeText={(text) => {
                                                       this.setState({Email: text})
                                                   }} placeholder={"Enter Email"}
                                                   colors={colors}/>
                        </View>


                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <ProfileFieldComponent profile={true} value={state?.Pay} title={"Pay"}
                                                   onChangeText={(text) => {
                                                       this.setState({Pay: text})
                                                   }} placeholder={"Enter Pay"}
                                                   colors={colors}/>
                        </View>


                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <ProfileFieldComponent profile={true} value={state?.Address} title={"Address"}
                                                   onChangeText={(text) => {
                                                       this.setState({Address: text})
                                                   }} placeholder={"Enter Address"}
                                                   colors={colors}/>
                        </View>

                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <ProfileFieldComponent profile={true} value={state?.ID_Card} title={"ID_Card"}
                                                   onChangeText={(text) => {
                                                       this.setState({ID_Card: text})
                                                   }} placeholder={"Enter ID_Card"}
                                                   colors={colors}/>
                        </View>


                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <ProfileFieldComponent profile={true} value={state?.Phone} title={"Phone Number"}
                                                   onChangeText={(text) => {
                                                       this.setState({Phone: text})
                                                   }} placeholder={"Enter Phone"}
                                                   colors={colors}/>
                        </View>


                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <ProfileFieldComponent profile={true} value={state?.Shift} title={"Shift"}
                                                   onChangeText={(text) => {
                                                       this.setState({Shift: text})
                                                   }} placeholder={"Enter Shift"} colors={colors}/>
                        </View>
                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <ProfileFieldComponent profile={true} value={state?.Role} title={"Role"}
                                                   onChangeText={(text) => {
                                                       this.setState({Role: text})
                                                   }} placeholder={"Enter Role"} colors={colors}/>
                        </View>


                    </ScrollView>
                    {this.state.loading ? <ActivityIndicator style={{alignSelf: "center"}} size={"large"}
                                                             color={Color.theme_color}/> :
                        <ButtonComponent title={"Update"} onPress={() => {
                            this.updateUser()
                        }}/>}
                </View>
            </View>


        );
    }
}

export default withLanguage(EditProfileScreen)
