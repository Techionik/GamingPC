import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../config/withLanguage";
import {Color, Constants} from "../common";


class DrawerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{screen: "HomeScreen", title: "Home"}, {
                screen: "ServicesScreen",
                title: "Service"
            },
                {screen: "MyBookingScreens", title: "My Booking"},
                {screen: "LocationScreen", title: "Location"},
                {screen: "MyWalletScreen", title: "My wallet"},
                {screen: "MyPaymentScreen", title: "Payment"},
                {screen: "ProfileScreen", title: "Profile"},
                {screen: "SettingScreen", title: "Setting"},
                {screen: "ShareFriendsScreen", title: "Share Friends"},
                {screen: "ContactUsScreen", title: "Contact Us"},
                {screen: "AboutUsScreen", title: "About Us"},
                {screen: "TermConditionScreen", title: "Terms & Conditions"},
            ]

        }
    }

    render() {
        const {t, language} = this.props.value
        return (
            <View style={{flex: 1, backgroundColor: Color.primary}}>

                <FlatList data={this.state.list} renderItem={({item, index}) =>

                    <Text onPress={() => {
                        this.props.navigation.navigate(item.screen)
                    }} style={{
                        marginLeft: 20,
                        fontSize: 18,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff",
                        marginTop:15

                    }}>{item.title}</Text>
                }/>

            </View>

        );
    }
}

export default withLanguage(DrawerScreen)
