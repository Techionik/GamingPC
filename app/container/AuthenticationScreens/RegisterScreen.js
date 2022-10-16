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
                    <Text style={{color: colors.greyToWhite, fontFamily: Constants.fontFamilyBold, fontSize: 12}}>Lorem
                        Ipsum is
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                    <View style={{marginTop: 20}}>
                        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                            <ButtonComponent onPress={() => {
                                this.setState({type: "Salon"})
                            }} title={t("Auth:Salon")} titleStyle={{fontSize: 12}} Style={{
                                backgroundColor: type == "Salon" ? Color.primary : colors.darKToPrimary,
                                marginVertical: 0,
                                flex: 1,
                                marginHorizontal: 0
                            }}/>
                            <ButtonComponent onPress={() => {
                                this.setState({type: "Expert"})
                            }} title={t("Auth:Expert")} titleStyle={{fontSize: 12}} Style={{
                                backgroundColor: type == "Expert" ? Color.primary : colors.darKToPrimary,
                                marginVertical: 0,
                                flex: 1,
                                marginHorizontal: 15
                            }}/>
                            <ButtonComponent onPress={() => {
                                this.setState({type: "Home"})
                            }} title={t("L:Home")} titleStyle={{fontSize: 12}} Style={{
                                backgroundColor: type == "Home" ? Color.primary : colors.darKToPrimary,
                                marginVertical: 0,
                                flex: 1,
                                marginHorizontal: 0
                            }}/>
                        </View>
                        {type=="Salon"?
                            <>
                            <FieldComponent theme={colors} Icon={require('../../images/ProfileIcon.png')}
                                         Placeholder={t("Auth:ProfileName")}/>
                            <FieldComponent theme={colors} withoutIcon={true} Placeholder={t("Auth:LicenseNumber")}/>
                            </>:null}

                        <FieldComponent theme={colors} Icon={require('../../images/Store.png')}
                                        Placeholder={t("Auth:SalonName")}/>
                        <FieldComponent arabic={true} theme={colors}
                                        children={
                                        <Image source={require('../../images/Store.png')} resizeMode={"contain"}
                                                                       style={{
                                                                           aspectRatio: 1,
                                                                           height: undefined,
                                                                           width: "8%",
                                                                           marginHorizontal: 10,
                                                                           tintColor: colors?.fieldTextColor
                                                                       }}/>}

                                        Placeholder={"اسم الصالون (In Arabic)"}/>
                        <FieldComponent theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/MailIcon.png')}
                                        Placeholder={t("Auth:EmailAddress")}/>
                        <FieldComponent theme={colors} Icon={require('../../images/PhoneIcon.png')}
                                        children={<Text style={{
                                            marginRight: 10,
                                            fontSize: 12,
                                            fontFamily: Constants.Bold,
                                            color: Color.primary
                                        }}>{t("Auth:Verify")}</Text>} Placeholder={t("Auth:PhoneNumber")}/>
                        <FieldComponent theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/PasswordIcon.png')} IconStyle={{bottom: -4}}
                                        Placeholder={t("Auth:Password")}/>
                        <FieldComponent theme={colors} secureTextEntry={true}
                                        Icon={require('../../images/PasswordIcon.png')} IconStyle={{bottom: -4}}
                                        Placeholder={t("Auth:ConfirmPassword")}/>
                        <FieldComponent theme={colors} withoutIcon={true}
                                        Placeholder={t("Auth:CommercialRegistrationNumber")}/>
                        <DropdownComponent withoutIcon={true} theme={colors} title={t("Auth:UploadCertificate")}

                                           children={
                                               <AntDesign name={"upload"} size={16} color={colors.fieldTextColor}/>
                                           }
                        />
                        <DropdownComponent withoutIcon={true} theme={colors} title={t("Auth:Category")}/>
                        <FieldComponent withoutIcon={true} theme={colors} Placeholder={t("Auth:IBAN")}/>
                        <View style={{flexDirection: "row",}}>
                            <DropdownComponent theme={colors} Icon={require('../../images/FlagIcon.png')}
                                               IconStyle={{width: "15%"}} Style={{marginRight: 20, flex: 1}}
                                               title={t("Auth:Country")}/>
                            <DropdownComponent theme={colors} withoutIcon={true} Style={{flex: 1}}
                                               title={t("Auth:City")}/>
                        </View>
                        <DropdownComponent theme={colors} withoutIcon={true} title={t("Auth:AveragedailyOrders")}/>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: Constants.fontFamilyMedium,
                            color: colors.darKToWhite,
                            marginVertical: 10,
                            alignSelf: "center"
                        }}>{t("Auth:SelectServiceProvider")}</Text>

                        <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                            <ButtonComponent onPress={() => {
                                this.setState({service: "Salon"})
                            }} title={t("Auth:Salon")} titleStyle={{
                                fontSize: 12,
                                color: service == "Salon" ? "#fff" : colors.greyToWhite
                            }} Style={{
                                backgroundColor: service == "Salon" ? Color.primary : colors.fieldBackgroundColor,
                                marginVertical: 0,
                                flex: 1,
                                marginHorizontal: 0
                            }}/>
                            <ButtonComponent onPress={() => {
                                this.setState({service: "Home"})
                            }} title={t("L:Freelancer")} titleStyle={{
                                fontSize: 12,
                                color: service == "Home" ? "#fff" : colors.greyToWhite
                            }} Style={{
                                backgroundColor: service == "Home" ? Color.primary : colors.fieldBackgroundColor,
                                marginVertical: 0,
                                flex: 1,
                                marginHorizontal: 15
                            }}/>
                            <ButtonComponent onPress={() => {
                                this.setState({service: "Both"})
                            }} title={t("Auth:Both")} titleStyle={{
                                fontSize: 12,
                                color: service == "Both" ? "#fff" : colors.greyToWhite
                            }} Style={{
                                backgroundColor: service == "Both" ? Color.primary : colors.fieldBackgroundColor,
                                marginVertical: 0,
                                flex: 1,
                                marginHorizontal: 0
                            }}/>
                        </View>
                        <Text style={{
                            fontSize: 14,
                            includeFontPadding: false,
                            fontFamily: Constants.fontFamilyMedium,
                            color: colors.darKToWhite,
                            marginVertical: 10,
                            alignSelf: "center"
                        }}>{t("Auth:OpenDays")}</Text>
                        <View style={{marginVertical: 10}}>
                            <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                                      contentContainerStyle={{flex: 1, justifyContent: "center"}} data={this.state.days}
                                      renderItem={({item, index}) =>

                                          <StripComponent colors={colors} item={item}/>
                                      }/>
                        </View>
                        <View style={{flex: 1, flexDirection: "row", marginVertical: 10, alignItems: "center"}}>
                            <ButtonComponent onPress={() => {
                                this.setState({shift: "Shift1"})
                            }} title={t("Auth:Shift") + 1} titleStyle={{
                                fontSize: 12,
                                color: shift == "Shift1" ? "#fff" : colors.greyToWhite
                            }} Style={{
                                backgroundColor: shift == "Shift1" ? Color.primary : colors.fieldBackgroundColor,
                                marginVertical: 0,
                                flex: 1,
                                marginHorizontal: 0
                            }}/>
                            <ButtonComponent onPress={() => {
                                this.setState({shift: "Shift2"})
                            }} title={t("Auth:Shift") + 2} titleStyle={{
                                fontSize: 12,
                                color: shift == "Shift2" ? "#fff" : colors.greyToWhite
                            }} Style={{
                                backgroundColor: shift == "Shift2" ? Color.primary : colors.fieldBackgroundColor,
                                marginVertical: 0,
                                flex: 1,
                                marginHorizontal: 15
                            }}/>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <AntDesign name={"pluscircle"} color={colors.darkToPrimary} size={30}/>
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: Constants.fontFamilyBold,
                                    color: colors.blackAndWhite,
                                    marginLeft: 10
                                }}>{t("Auth:Addmore")}</Text>
                            </View>
                        </View>
                        <PickLocation colors={colors} t={t} onPress={()=>{this.props.navigation.navigate("MapScreen")}}/>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyMedium,
                            color: colors.greyToWhite,
                            marginTop: 10,
                            marginHorizontal: 20
                        }}>{t("Auth:TermText")}
                            <Text  style={{color: Color.primary}}> {t("Auth:Termofuse")}</Text>
                            <Text> {t("Auth:and")} </Text>
                            <Text   style={{color: Color.primary}}>{t("L:PrivacyPolicy")}</Text>

                        </Text>

                        <ButtonComponent onPress={()=>{this.props.navigation.replace("HomeScreen")}} theme={colors} title={t("Auth:Register")}/>
                        <OrLoginWith Props={this.props.value}/>
                        <BottomSocialButtons colors={colors}/>

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

function PickLocation({colors, t,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{flexDirection: "row", marginTop: 10, alignItems: "flex-start"}}>
            <View style={{
                height: 35,
                width: 35,

                borderRadius: 17,
                backgroundColor: Color.primary,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Image source={require('../../images/PickLocation.png')} resizeMode={"contain"}
                       style={{height: 15, width: 15,}}/>
            </View>
            <Text style={{
                fontSize: 12,
                fontFamily: Constants.fontFamilyMedium,
                color: colors.blackAndWhite,
                includeFontPadding: false,
                padding: 0,
                marginLeft: 10,

            }}>{t("Auth:PickLocation")}</Text>
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
            <SocialButton Icon={require('../../images/AppleIcon.png')}
                          IconStyle={{left: -1, tintColor: colors?.blackAndWhite}}/>
        </View>
    )
}
