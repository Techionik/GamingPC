import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";

import ButtonComponent from "../Components/ButtonComponent";
import ProfileFieldComponent from "../Components/ProfileFieldComponent";
import {connect} from "react-redux";
import {getComplains, PostComplain} from "../../redux/user/operations";
import moment from "moment";
import {toast} from "../../Omni";
import HeaderWihBackground from "../Components/HeaderWihBackground";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo,

});


@connect(
    mapStateToProps,
    {PostComplain},
)

class SendComplain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:""
        }
    }
    validation(){
        if(this.state.message===""){
            toast("Please Enter Message")
        }else {
            const data={
                Email:this.props?.user?.userInfo?.Email,
                Full_Name:this.props?.user?.userInfo?.Full_Name,
                Complain_ID:moment(),
                Complain:this.state.message,
                Designation:this.props?.user?.userInfo?.Designation,
                Statuss:"Pending"
            }
           this.props.PostComplain(data).then(res=>{
               if(res.ResultMessage[0].MessageType==="SUCCESS"){
                   toast(res.ResultMessage[0].Message)
                  this.props.navigation.pop()
               }else {

               }
           }).catch(err=>{
               toast("Something went wrong please try again")
           })
        }
    }
    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={"Complain"} colors={colors} Props={this.props.value}/>

                <Image source={require('../../images/ContactusImage.png')} style={{
                    height: undefined,
                    width: "60%",
                    marginVertical: 10,
                    alignSelf: "center",
                    aspectRatio: 1.65
                }}/>

                <View style={{flexGrow:1}}>
                <View style={{borderRadius:30,marginTop:30,backgroundColor:colors.fieldBackgroundColor,marginHorizontal:20,paddingHorizontal:10,paddingBottom:40}}>
                    <View style={{backgroundColor:Color.primary,borderRadius:10,paddingVertical:10,marginHorizontal:20,zIndex:2,elevation:2,top:-30,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"#fff",fontSize:16,fontFamily:Constants.fontFamilyMedium}}>{t("L:SendusaMessage")}</Text>
                        <Text style={{color:"#fff",fontSize:12,fontFamily:Constants.fontFamilyMedium}}>{t("L:HelpText")}</Text>
                    </View>
                    <View style={{paddingHorizontal:20}}>
                  <ProfileFieldComponent disable={true} title={"Name"} value={this.props?.user?.userInfo?.Full_Name} placeholder={this.props?.userInfo?.Full_Name} colors={colors}/>
                  <ProfileFieldComponent disable={true} title={"Email"} value={this.props?.user?.userInfo?.Email} placeholder={this.props?.userInfo?.Email} colors={colors}/>
                  <ProfileFieldComponent title={"Message"} value={this.state.message} onChangeText={(text)=>{this.setState({message:text})}} placeholder={"Please Enter Your Complain here!"} colors={colors}/>
                    </View>
                </View>
                </View>
                <ButtonComponent onPress={()=>{this.validation()}} Style={{marginBottom:20}} title={t("L:Submit")}/>
            </View>

        );
    }
}

export default withLanguage(SendComplain)
