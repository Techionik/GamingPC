import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";



class TermConditionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {t, language} = this.props.value
        return (
            <View style={{flex: 1,backgroundColor:Color.primary}}>

            </View>

        );
    }
}

export default withLanguage(TermConditionScreen)
