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



class MyBookingScreens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {t, language} = this.props.value
        return (
            <View style={{flex: 1,backgroundColor:"#ffff"}}>
                <HeaderComponent Location={false} title={"My Bookings"} Drawer={true} Props={this.props.value} />



            </View>

        );
    }
}

export default withLanguage(MyBookingScreens)
