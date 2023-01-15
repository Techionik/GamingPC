import React from 'react'
import {
    ActivityIndicator,
    Image,
    ImageBackground, ScrollView, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import FieldComponent from "../Components/FieldComponent";
import ButtonComponent from "../Components/ButtonComponent";
import {connect} from "react-redux";
import {getData, login} from "../../redux/user/operations";
import {toast} from "../../Omni";
const mapStateToProps = ({app, user}) => ({
    app,
    user,
});


@connect(
    mapStateToProps,
    {login,getData}
)

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            email:"",
            password:"123456789",
            loading:false
        }
    }


    validation(){
        if(this.state.email==""){
            alert("Please enter your email")
        } else if(this.state.password==""){
            alert("Please enter your password")

        }else {
            this.setState({loading:true})
            const data={
                Email: this.state.email,
                Password: this.state.password
            }
            this.props.login(data).then(res=>{
                console.log(res)
                if(res){
                    this.setState({loading:false})
                    this.props.navigation.replace("HomeScreen")
                }else {
                    this.setState({loading:false})
                }
            }).catch(err=>{
                this.setState({loading:false})
                alert("Some thing went wrong please try again")
            })

        }
    }

    render() {
        const {t, language, themeColor} = this.props?.value
        const {colors} = themeColor


        return (
            <View
                style={{flex: 1, backgroundColor: colors.screenBackgroundColor, paddingTop: 30, paddingHorizontal: 15}}>

                <View style={{flex: 0.5, justifyContent: 'center'}}>
                    <Image style={{
                        height: undefined,
                        width: "100%",
                        aspectRatio: 6.28,
                        alignSelf: 'center',
                    }} source={require('../../images/LoginLogo.png')}/>
                </View>

                <ScrollView contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}
                            style={{marginHorizontal: 5, flex: 1}}>
                    <Text
                        style={{
                            color: colors?.blackAndWhite,
                            fontFamily: Constants.fontFamilyBold,
                            fontSize: 22
                        }}>{t("Auth:Login")}</Text>
                    <View style={{marginTop: 20}}>
                        <FieldComponent value={this.state.email} onChangeText={(text)=>{this.setState({email:text})}} theme={colors} Icon={require('../../images/MailIcon.png')}
                                        Placeholder={t("Auth:EmailField")}/>
                        <FieldComponent value={this.state.password} onChangeText={(text)=>{this.setState({password:text})}}  theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/PasswordIcon.png')}
                                        IconStyle={{bottom: -4}} Placeholder={t("Auth:Password")}/>
                        <Text onPress={() => {
                            this.props.navigation.navigate("ForgotPasswordScreen")
                        }} style={{
                            fontSize: 14,
                            marginTop: 5,
                            fontFamily: Constants.fontFamilyBold,
                            color: Color.primary,
                            alignSelf: "flex-end"
                        }}>{t("Auth:ForgetPassword")}</Text>
                        {this.state.loading?<ActivityIndicator style={{alignSelf:"center"}} size={"large"} color={Color.theme_color}/>:
                        <ButtonComponent onPress={() => {
                            this.validation()
                        }} title={t("Auth:Login")}/>}
                    </View>





                    {/*<Text style={{*/}
                    {/*    marginBottom: 10,*/}
                    {/*    fontSize: 14,*/}
                    {/*    fontFamily: Constants.fontFamilyRegular,*/}
                    {/*    color: colors?.blackAndWhite,*/}
                    {/*    alignSelf: "center"*/}
                    {/*}}>{t("Auth:AnotherAccount")}<Text onPress={() => {*/}
                    {/*    this.props.navigation.navigate("SignupScreen")*/}
                    {/*}} style={{*/}
                    {/*    fontSize: 16,*/}
                    {/*    fontFamily: Constants.fontFamilyBold,*/}
                    {/*    color: Color.primary*/}
                    {/*}}>{" " + t("Auth:SignUp")}</Text></Text>*/}

                </ScrollView>
            </View>

        );
    }

}

export default withLanguage(LoginScreen)

export function OrLoginWith({
                                Props
                            }
) {
    const {t, language, themeColor} = Props

    return (
        <View style={{justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <View style={{height: 0.5, width: 70, backgroundColor: themeColor?.colors?.fieldTextColor}}/>
            <Text style={{
                fontSize: 12,
                fontFamily: Constants.fontFamilyMedium,
                color: themeColor?.colors?.fieldTextColor,
                marginHorizontal: 10
            }}>{t("Auth:Continuewith")}</Text>
            <View style={{height: 0.5, width: 70, backgroundColor: themeColor?.colors?.fieldTextColor}}/>
        </View>
    )
}


