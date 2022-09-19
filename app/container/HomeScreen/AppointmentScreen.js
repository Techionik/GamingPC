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
import MyBookingsComponent from "../Components/MyBookingsComponent";
import AddToCartComponent from "../Components/AddToCartComponent";



class AddToCartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
                <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>
                    <HeaderComponent Location={false} title={"Add To Cart"} Drawer={true} Props={this.props.value} />


                    <FlatList data={this.state.bookingList}  renderItem={({item, index}) =>
                       <AddToCartComponent/>
                    }/>




                </View>

        );
    }
}

export default withLanguage(AddToCartScreen)
