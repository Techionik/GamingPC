import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import ButtonComponent from "../Components/ButtonComponent";


class ShareFriendsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderComponent Props={this.props.value} Drawer={true} Location={false} back={false} title={t("L:SharewithFriends")}/>
                <Image source={require('../../images/FriednsICon.png')} style={{
                    height: undefined,
                    width: "90%",
                    marginVertical: 20,
                    alignSelf: "center",
                    aspectRatio: 1
                }}/>
                <Text style={{
                    fontSize: 20,
                    fontFamily: Constants.fontFamilyMedium,
                    color: colors.blackAndWhite,
                    alignSelf: "center"
                }}>{t("L:SharewithFriends")}</Text>
                <Text style={{
                    fontSize: 14,
                    fontFamily: Constants.fontFamilyRegular,
                    color: colors.lightGreyToWhite,
                    textAlign: "center",
                    marginHorizontal: 20
                }}>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.</Text>
                <View style={{flex:1}}/>
                <View style={{marginHorizontal:20,paddingVertical:10,backgroundColor:colors.lightGreyToBackground,borderRadius:5,alignItems:"center",}}>
                <Text style={{fontFamily:Constants.fontFamilyMedium,fontSize:16,color:colors.greyToWhite}}>76VVGV7234002WNFI</Text>
                </View>
                <ButtonComponent title={t("L:Copy")}/>


            </View>

    );
    }
    }

    export default withLanguage(ShareFriendsScreen)
