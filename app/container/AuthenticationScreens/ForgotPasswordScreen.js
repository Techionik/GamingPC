import React from 'react'
import {
    Image,
    ImageBackground, Text,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import SkipButton from "../Components/SkipButton";
import {Color, Constants} from "../../common";
import FieldComponent from "../Components/FieldComponent";
import ButtonComponent from "../Components/ButtonComponent";
import {connect} from "react-redux";
import { forgetPassword} from "../../redux/user/operations";
import {toast} from "../../Omni";
const mapStateToProps = ({app, user}) => ({
    app,
    user,
});


@connect(
    mapStateToProps,
    {forgetPassword}
)

class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                email:""
        }
    }
    validation(){
        if(this.state.email===""){
            toast("Please enter your email")
        } else {
            this.setState({loading:true})
            const data={
                Email: this.state.email,
            }
            this.props.forgetPassword(data).then(res=>{
                if(res){
                    this.setState({loading:false})
                    this.props.navigation.replace("VerificationScreen",{Email:this.state?.email})
                }else {
                    this.setState({loading:false})
                }
            }).catch(err=>{

                this.setState({loading:false})
                toast("Some thing went wrong please try again")
            })

        }
    }
    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View
                style={{flex: 1, backgroundColor: colors.screenBackgroundColor, paddingTop: 30, paddingHorizontal: 15}}>
                <Image source={require('../../images/ForgetImage.png')} resizeMode={"contain"}
                                 style={{aspectRatio: 1.5,marginTop:20, width: "100%", height: undefined}}/>
                <Text
                    style={{
                        color: colors.blackAndWhite,
                        marginTop:10,
                        fontFamily: Constants.fontFamilyBold,
                        fontSize: 22
                    }}>Forget Password?</Text>
                <Text style={{
                    color: colors.greyToWhite,
                    fontFamily: Constants.fontFamilyBold,
                    fontSize: 12
                }}>{t("L:DummyText")}</Text>
                <View style={{marginTop: 20}}>
                    <FieldComponent value={this.state.email} onChangeText={(text)=>{this.setState({email:text})}} theme={colors} Style={{paddingLeft:10}} IconStyle={{marginRight: 0}}
                                    Placeholder={t("Auth:EmailField")}/>
                    <ButtonComponent onPress={() => {
                       this.validation()
                    }} title={t("Auth:Send")}/>

                </View>


            </View>

        );
    }
}

export default withLanguage(ForgotPasswordScreen)
