import React from 'react'
import {
    Text,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import FieldComponent from "../Components/FieldComponent";
import ButtonComponent from "../Components/ButtonComponent";
import {connect} from "react-redux";
import {forgetPassword, updatePassword} from "../../redux/user/operations";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import {toast} from "../../Omni";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
});


@connect(
    mapStateToProps,
    {updatePassword}
)

class UpdatePasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NewPassword: "",
            ConfirmPassword: ""

        }
    }

    validation() {
        if (this.state.NewPassword === "") {
            toast("Please enter your new password")
        } else if (this.state.ConfirmPassword !== this.state.NewPassword) {
            toast("Please write the correct password")
        } else {
            this.setState({loading: true})
            const data = {
                Email: this.props?.user?.userInfo?.Email,
                New_Password: this.state.NewPassword
            }

            this.props.updatePassword(data).then(res => {
                if (res) {
                    this.setState({loading: false})
                    toast("Password Updated")
                    this.props.navigation.pop()

                } else {
                    this.setState({loading: false})
                }
            }).catch(err => {
                this.setState({loading: false})
                toast("Some thing went wrong please try again")
            })

        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View
                style={{flex: 1, backgroundColor: colors.screenBackgroundColor,}}>
                <HeaderWihBackground isBack={true} title={"Update Password"} colors={colors} Props={this.props.value}/>
                <View style={{flex: 1}}/>
                <View style={{paddingHorizontal: 10}}>
                    <Text
                        style={{
                            color: colors.blackAndWhite,
                            fontFamily: Constants.fontFamilyBold,
                            fontSize: 22
                        }}>Update Password</Text>
                    <FieldComponent secureTextEntry={true} value={this.state.NewPassword} onChangeText={(text) => {
                        this.setState({NewPassword: text})
                    }} theme={colors} Style={{paddingLeft: 10}} IconStyle={{marginRight: 0}}
                                    Placeholder={"New Password"}/>
                    <FieldComponent secureTextEntry={true} value={this.state.ConfirmPassword} onChangeText={(text) => {
                        this.setState({ConfirmPassword: text})
                    }} theme={colors} Style={{paddingLeft: 10}} IconStyle={{marginRight: 0}}
                                    Placeholder={"Confirm Password"}/>
                </View>
                <View style={{flex: 1}}/>
                <ButtonComponent onPress={() => {
                    this.validation()
                }} title={"Update Password"}/>
            </View>

        );
    }
}

export default withLanguage(UpdatePasswordScreen)
