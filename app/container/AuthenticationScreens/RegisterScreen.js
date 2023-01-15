import React, {createRef, useRef, useState} from 'react'
import {
    FlatList, Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";

import {Color, Constants} from "../../common";
import FieldComponent from "../Components/FieldComponent";
import ButtonComponent from "../Components/ButtonComponent";
import Feather from "react-native-vector-icons/Feather";
import DropdownComponent from "../Components/DropdownComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import SocialButton from "../Components/SocialButton";
import {launchCamera, launchImageLibrary} from "react-native-image-picker";
import {OrLoginWith} from "./LoginScreen";
import {toast} from "../../Omni";
import {Modalize} from "react-native-modalize";


class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.modalizeRef=createRef()
        this.state = {
            FirstName:"",
            LastName:"",
            Email:"",
            PhoneNumber:"",
            CNIC:"",
            Address:"",
            Password:"",
            ConfirmPassword:"",

        }
    }

    validation(){
       if(this.state.FirstName==""){
           alert("Enter Your First Name")
       }
        else if(this.state.LastName==""){
            alert("Enter Your Last Name")
        }
       else if(this.state.Email==""){
           alert("Enter Your Email")
       }
       else if(this.state.PhoneNumber==""){
           alert("Enter Your Phone Number")
       }
       else if(this.state.CNIC==""){
           alert("Enter Your CNIC")
       }
       else if(this.state.Address==""){
           alert("Enter Your Address")
       }
       else if(this.state.Password==""){
           alert("Enter Your Password")
       }  else if(this.state.ConfirmPassword&&this.state.ConfirmPassword!==this.state.Password){
           alert("please enter correct password")
       }

       else {
           alert(JSON.stringify(this.state))
       }

    }


    requestCameraPermission = async () => {
        try {
            if (Platform.OS==='android'){
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    return true
                } else {
                    toast("Camera permission denied");
                    return false
                }
            }else{
                return true
            }

        } catch (err) {
            console.warn(err);
        }
    };
    pickImageFromCamera = async () => {
        if(await this.requestCameraPermission()) {

            var options = {

                title: 'Select Avatar',
                quality: 0.1,
                includeBase64: true,
                storageOptions: {
                    skipBackup: true,
                    path: 'images'
                },
            };
            launchCamera(options, (response) => {
                if (response.didCancel) {
                    console.log("User cancelled image picker");
                } else if (response.error) {
                    console.log("ImagePicker Error:"), response.error;
                } else if (response.customButton) {
                    console.log("User tapped custom button:"), response.customButton;
                } else {
                    alert(JSON.stringify(response))
                    this.setState({
                        profileImage:  response.assets[0].uri
                    }, () => {
                    });
                }
            });

        }}

    imagepiking() {
        var options = {
            title: 'Select Avatar',
            quality: 0.1,
            includeBase64: false,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error:"), response.error;
            } else if (response.customButton) {
                console.log("User tapped custom button:"), response.customButton;
            } else {
                this.setState({profileImage: response.assets[0].uri}, () => {
                    this.modalizeRef.current.close()
                });
            }
        });
    }



    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        const {FirstName, LastName, Email,PhoneNumber,CNIC,Address,Password,ConfirmPassword} = this.state
        return (
            <View style={{
                flex: 1,
                paddingBottom: 20,
                backgroundColor: colors.screenBackgroundColor,
                paddingHorizontal: 15
            }}>


                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{flex: 1,}}>
                    <View style={{marginVertical: "10%", alignItems: "center"}}>
                        <TouchableOpacity
                            onPress={()=>{this.modalizeRef.current.open()}}
                            style={{
                                height: 97,
                                width: 97,
                                justifyContent: "center", alignItems: "center",
                                borderRadius: 47, alignSelf: "center", backgroundColor: colors.whiteToDark
                            }}>
                            <View style={{
                                height: 90,
                                width: 90,
                                borderRadius: 45,
                                alignItems: "center",
                                justifyContent: "center",
                                aspectRatio: 1,
                                borderStyle: "dashed",
                                borderWidth: 1.5,
                                borderColor: Color.primary
                            }}>
                                <Feather name={"camera"} size={30} color={colors.greyToWhite}/>
                            </View>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: Constants.fontFamilyMedium,
                            color: colors.darKToWhite
                        }}>{t("Auth:UploadImage")}</Text>
                    </View>
                    <Text
                        style={{
                            color: colors.blackAndWhite,
                            fontFamily: Constants.fontFamilyBold,
                            fontSize: 22
                        }}>{t("Auth:RegisterVendor")}</Text>

                    <View style={{marginTop: 20}}>
                        <FieldComponent value={FirstName} onChangeText={(text)=>{this.setState({FirstName:text})}} theme={colors} Icon={require('../../images/ProfileIcon.png')}
                                        Placeholder={"First Name"}/>
                        <FieldComponent value={LastName} onChangeText={(text)=>{this.setState({LastName:text})}} theme={colors} Icon={require('../../images/ProfileIcon.png')}
                                        Placeholder={"Last Name"}/>
                        <FieldComponent value={Email} onChangeText={(text)=>{this.setState({Email:text})}} theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/MailIcon.png')}
                                        Placeholder={"Email Address"}/>
                        <FieldComponent value={PhoneNumber} onChangeText={(text)=>{this.setState({PhoneNumber:text})}} theme={colors} Icon={require('../../images/PhoneIcon.png')}
                                        Placeholder={"Phone Number"}/>
                        <FieldComponent value={CNIC} onChangeText={(text)=>{this.setState({CNIC:text})}} theme={colors} Icon={require('../../images/id-card.png')}
                                        Placeholder={"CNIC"}/>
                        <FieldComponent value={Address} onChangeText={(text)=>{this.setState({Address:text})}} theme={colors} Icon={require('../../images/jobLocationImage.png')}
                                        Placeholder={"Address"}/>
                        <FieldComponent value={Password} onChangeText={(text)=>{this.setState({Password:text})}} theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/PasswordIcon.png')} IconStyle={{bottom: -4}}
                                        Placeholder={"Password"}/>
                        <FieldComponent  value={ConfirmPassword} onChangeText={(text)=>{this.setState({ConfirmPassword:text})}}  theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/PasswordIcon.png')} IconStyle={{bottom: -4}}
                                        Placeholder={"Confirm Password"}/>



                        <ButtonComponent onPress={() => {
                            this.validation()
                            // this.props.navigation.replace("HomeScreen")
                        }} theme={colors} title={t("Auth:Register")}/>





                    </View>

                    <Text style={{
                        fontSize: 14,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.blackAndWhite,
                        alignSelf: "center"
                    }}>{t("Auth:AnotherAccount")}<Text onPress={() => {
                        this.props.navigation.navigate("LoginScreen")
                    }} style={{
                        fontSize: 16,
                        fontFamily: Constants.fontFamilyBold,
                        color: Color.primary
                    }}>{" " + t("Auth:Login")}</Text>
                    </Text>
                </ScrollView>
                <Modalize
                    handleStyle={{height: 0}}
                    closeOnOverlayTap={true}
                    modalStyle={{backgroundColor:'rgba(0,0,0,0)'}}
                    rootStyle={{ backgroundColor:'rgba(0,0,0,0)'}}

                    overlayStyle={{
                        backgroundColor:'rgba(0,0,0,0.8)',
                    }}
                    panGestureComponentEnabled adjustToContentHeight={true}
                    ref={this.modalizeRef}>

                    <View style={{flex:1,backgroundColor:"#fff",borderTopLeftRadius:20,borderTopRightRadius:20}}>
                        <View style={{padding:15}}>
                            <View style={{width:50,height:4,alignSelf:"center",borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:"#000"}}></View>
                            <TouchableOpacity onPress={()=>{this.modalizeRef.current.close()}} style={{backgroundColor:"#000",alignSelf:"flex-end",alignItems:"center",justifyContent:"center",paddingHorizontal:10,paddingVertical:5,borderRadius:10}}>
                                <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>{"Close"}</Text>
                            </TouchableOpacity>

                            <View style={{padding:10,flexDirection:"row",alignItems:"center"}}>
                                <TouchableOpacity onPress={()=>{this.imagepiking()}} style={{flex:1}} >
                                    <Image  source={require('../../images/gallery.png')} style={{height:undefined,alignSelf:"center",width:"45%",aspectRatio:1}}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{this.pickImageFromCamera()}} style={{flex:1}}>
                                    <Image source={require('../../images/camera.png')} style={{height:undefined,width:"45%",alignSelf:"center",aspectRatio:1}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modalize>
            </View>

        );
    }
}

export default withLanguage(SignupScreen)

function StripComponent({item, colors}) {
    const [selected, setSelected] = useState(false)
    return (
        <TouchableOpacity onPress={() => {
            setSelected(!selected)
        }} style={{justifyContent: "center", alignItems: "center", marginHorizontal: 9}}>
            <View style={{
                height: 26,
                width: 26,
                borderRadius: 13,
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.greyToWhite,
                borderWidth: 1,
            }}>
                {selected ? <View style={{height: 12, width: 12, borderRadius: 6, backgroundColor: Color.primary}}>
                </View> : null}
            </View>
            <Text style={{
                fontSize: 14,
                fontFamily: Constants.fontFamilyMedium,
                color: selected ? colors.blackAndWhite : colors.lightGreyToWhite
            }}>{item.title}</Text>
        </TouchableOpacity>
    )
}


export function BottomSocialButtons({colors}) {
    return (
        <View
            style={{
                flexDirection: "row",
                paddingVertical: 20,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <SocialButton Icon={require('../../images/GoogleIcon.png')}/>
            <SocialButton Icon={require('../../images/FacebookIcon.png')}
                          Style={{marginHorizontal: 20}}/>
        </View>
    )
}
