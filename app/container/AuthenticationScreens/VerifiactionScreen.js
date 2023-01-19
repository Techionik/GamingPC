import React from 'react'
import {
    ImageBackground, Text,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import SkipButton from "../Components/SkipButton";
import {Color, Constants} from "../../common";
import ButtonComponent from "../Components/ButtonComponent";
import InputVerify from "../Components/input/InputVerify";
import InputCode from "../Components/input/InputCode";
import {connect} from "react-redux";
import { verifyOtp} from "../../redux/user/operations";
const mapStateToProps = ({app, user}) => ({
    app,
    user,
});


@connect(
    mapStateToProps,
    {verifyOtp}
)

class VerificationScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            code:"",
        }
    }

    validation(){
        if(this.state.code==""){
            alert("Please enter OTP")
        } else {
            this.setState({loading:true})
            const data={
                Email:this.props?.route.params?.Email ,
                OTP: this.state.code,
            }
            this.props.verifyOtp(data).then(res=>{
                if(res){
                    this.setState({loading:false})
                    this.props.navigation.navigate("AddNewPassword",{Email:this.props?.route.params?.Email})
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
        const {t,language,themeColor}=this.props.value
        const {colors}=themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor, paddingTop: 30, paddingHorizontal: 15}}>
                <ImageBackground source={require('../../images/LoginImage.png')} resizeMode={"contain"}
                                 style={{aspectRatio: 1.5, width: "100%", height: undefined}}>
                </ImageBackground>
                <Text
                    style={{color: colors.blackAndWhite, fontFamily: Constants.fontFamilyBold, fontSize: 22}}>{t("L:Verification")}</Text>
                <Text style={{color: colors.greyToWhite, fontFamily: Constants.fontFamilyBold, fontSize: 12}}>{t("L:DummyText")}</Text>
                <View style={{marginTop: 20}}>
                    <View style={{marginHorizontal:30}}>
                    <InputCode
                        onFulfill={()=>{}}
                        onCodeChange={value => {
                            // setCode(value)
                            this.setState({code:value})
                            // verifyCode(value)
                        }}
                        // editable={!isLoading}
                    />
                    </View>
                <ButtonComponent onPress={()=>{this.validation()}} title={t("Auth:Send")}/>
                </View>
            </View>

        );
    }
}
export default withLanguage(VerificationScreen)
