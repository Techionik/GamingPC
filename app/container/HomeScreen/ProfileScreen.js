import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";


class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <View style={{
                    flex: 0.3,
                    backgroundColor: Color.primary,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30
                }}>
                    <HeaderComponent title={t("L:UserProfile")} Props={this.props.value}/>
                </View>
                <ScrollView style={{
                    flex: 1,
                    backgroundColor: colors.ScreenColorToDark,
                    zIndex: 2,
                    top: -25,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30
                }}>
                    <Image source={require('../../images/ProfileImage.png')}
                           style={{height: 90, alignSelf: "center", marginTop: 20, width: 90, borderRadius: 45,}}/>
                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginVertical: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 20,
                            fontFamily: Constants.fontFamilyMedium,
                            color: colors.blackAndWhite
                        }}>{"Mudassir Masood"}</Text>
                        <View style={{height: 1, marginVertical: 10, backgroundColor: colors.greyToWhite}}></View>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyMedium,
                            alignSelf: "center",
                            color: colors.greyToWhite
                        }}>1-2-3 Building, Jamsith Road, Tokyo</Text>
                    </View>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <RowComponent colors={colors} title1={"First Name"}  title2={"Mudassir"}/>
                        <RowComponent colors={colors} title1={"Last Name"} title2={"Masood"}/>
                        <RowComponent colors={colors} title1={"Role"} title2={"Manager"}/>
                        <RowComponent colors={colors} title1={"Shift Time"} title2={"2 pm - 11 pm"}/>
                        <RowComponent colors={colors} title1={t("L:EmailAddress")}   title2={"Mudassir@gmail.com"}/>
                    </View>
                </ScrollView>


            </View>

        );
    }
}

export default withLanguage(ProfileScreen)

function RowComponent({colors, title1, title2Style, title2, title1Style}) {
    return (
        <View style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: colors.greyToWhite
        }}>
            <Text style={[{
                fontSize: 12,
                flex: 1,
                fontFamily: Constants.fontFamilyBold,
                color: colors.greyToWhite
            }, title1Style]}>{title1}</Text>
            <Text style={[{
                fontSize: 12,
                fontFamily: Constants.fontFamilyBold,
                color: colors.darKToWhite
            }, title2Style]}>{title2}</Text>
        </View>
    )
}
