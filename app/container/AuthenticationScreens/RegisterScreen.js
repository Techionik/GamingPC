import React, {useState} from 'react'
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
import {OrLoginWith} from "./LoginScreen";


class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "Salon",
            service: "Salon",
            shift: "Shift1",
            days: [{title: "Sun"}, {title: "Mon"}, {title: "Tues"}, {title: "Wed"}, {title: "Thurs"}, {title: "Fri"}, {title: "Sat"},]
        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        const {type, service, shift} = this.state
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
                        <FieldComponent theme={colors} Icon={require('../../images/ProfileIcon.png')}
                                        Placeholder={"First Name"}/>
                        <FieldComponent theme={colors} Icon={require('../../images/ProfileIcon.png')}
                                        Placeholder={"Last Name"}/>
                        <FieldComponent theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/MailIcon.png')}
                                        Placeholder={"Email Address"}/>
                        <FieldComponent theme={colors} Icon={require('../../images/PhoneIcon.png')}
                                        Placeholder={"Phone Number"}/>
                        <FieldComponent theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/PasswordIcon.png')} IconStyle={{bottom: -4}}
                                        Placeholder={"Password"}/>
                        <FieldComponent theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/PasswordIcon.png')} IconStyle={{bottom: -4}}
                                        Placeholder={"Confirm Password"}/>

                        <DropdownComponent withoutIcon={true} theme={colors} title={"Role"}/>


                        <ButtonComponent onPress={() => {
                            this.props.navigation.replace("HomeScreen")
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
