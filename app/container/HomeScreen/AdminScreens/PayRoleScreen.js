import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../../config/withLanguage";
import {Color, Constants} from "../../common";
// import HeaderComponent from "../Components/HeaderComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderWihBackground from "../../Components/HeaderWihBackground";
import PayRoleComponent from "../../Components/PayRoleComponent";


class PayRoleScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobsLsit: [
                {
                    image: require("../../../images/B1.png"),
                    name: "Dim Claudia",
                    jobTitle: "Hydra Facial Spa",
                    time: "5 mins Ago",
                    status: "Start Job"
                },
                {
                    image: require("../../../images/B2.png"),
                    name: "Mike Gill",
                    jobTitle: "Manicure & Pedicure",
                    time: "25 mins Ago",
                    status: "Start Job"
                },
                {
                    image: require("../../../images/B3.png"),
                    name: "Dim Claudia",
                    jobTitle: "Hydra Facial Spa",
                    time: "5 mins Ago",
                    status: "Start Job"
                },
                {
                    image: require("../../../images/B1.png"),
                    name: "Rimsha Khan",
                    jobTitle: "Hydra Facial Spa",
                    time: "Monday",
                    status: "Completed"
                },
                {
                    image: require("../../../images/B2.png"),
                    name: "Vikal Hush",
                    jobTitle: "Hydra Facial Spa",
                    time: "Monday",
                    status: "Completed"
                }
            ]        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>

                <HeaderWihBackground isBack={true} title={"Pay Role" +
                    ""} colors={colors} Props={this.props.value}/>

                <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 20,}}>


                    <FlatList style={{}} showsVerticalScrollIndicator={false} data={this.state.jobsLsit}
                              renderItem={({item, index}) =>
                                  <PayRoleComponent colors={colors} jobTitle={item.jobTitle} image={item.image}
                                                    name={item.name} time={item.time} status={item.status}/>
                              }/>


                </View>

            </View>

        );
    }
}

export default withLanguage(PayRoleScreen)
