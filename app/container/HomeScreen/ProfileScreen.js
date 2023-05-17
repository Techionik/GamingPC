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
import {connect} from "react-redux";
import {getData} from "../../redux/user/operations";
import HeaderWihBackground from "../Components/HeaderWihBackground";
const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo:user?.userInfo
});


@connect(
    mapStateToProps,
)


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
                    <HeaderWihBackground isBack={true} title={"Profile"} colors={colors} Props={this.props.value}/>
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
                    <View style={{
                        marginTop:40,
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
                        }}>{this.props?.userInfo?.Full_Name}</Text>
                        <View style={{height: 1, marginVertical: 10, backgroundColor: colors.greyToWhite}}></View>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyMedium,
                            alignSelf: "center",
                            color: colors.greyToWhite
                        }}>{this.props?.userInfo?.Address}</Text>
                    </View>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <RowComponent colors={colors} title1={"First Name"}  title2={this.props?.userInfo?.Full_Name.split(" ")[0]}/>
                        <RowComponent colors={colors} title1={"Last Name"} title2={this.props?.userInfo?.Full_Name.split(" ")[1]}/>
                        <RowComponent colors={colors} title1={"Designation"} title2={this.props?.userInfo?.Designation}/>
                        <RowComponent colors={colors} title1={"Shift Time"} title2={this.props?.userInfo?.Shift}/>
                        <RowComponent colors={colors} title1={"ID_Card"}    title2={this.props?.userInfo?.ID_Card}/>
                        <RowComponent colors={colors} title1={"Email Address"}    title2={this.props?.userInfo?.Email}/>
                        <RowComponent colors={colors} title1={"Phone Number"}    title2={this.props?.userInfo?.Phone}/>
                        <RowComponent colors={colors} title1={"Pay"}    title2={this.props?.userInfo?.Pay}/>
                    </View>
                </ScrollView>


            </View>

        );
    }
}

export default withLanguage(ProfileScreen)

export function RowComponent({colors, title1, title2Style, title2, title1Style}) {
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
