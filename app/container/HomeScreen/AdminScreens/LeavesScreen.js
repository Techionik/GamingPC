import React from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../../config/withLanguage";
import {Color, Constants} from "../../../common";

import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderWihBackground from "../../Components/HeaderWihBackground";
import PayRoleComponent from "../../Components/PayRoleComponent";
import LeaveComponent from "../../Components/LeaveComponent";
import {getData, getLeaves} from "../../../redux/user/operations";
import {connect} from "react-redux";
import {HomeScreenComponent} from "../../Components/HomeScreenComponent";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo,

});


@connect(
    mapStateToProps,
    {getLeaves},
)
class LeavesScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Leaves: [],
            refreshData: false,
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true})

        this.props.getLeaves().then((res) => {
            this.setState({Leaves: res?.Result})
            this.setState({loading: false})
        }).catch((err) => {
            this.setState({loading: false})
            alert("Something went wrong please try again")
        })
    }

    getFreshLeaves() {
        this.setState({refreshData: true})
        const obj = {
            Date: ""
        }
        this.props.getLeaves(obj).then((res) => {
            this.setState({Leaves: res?.Result})
            this.setState({refreshData: false})
        }).catch((err) => {
            this.setState({refreshData: false})
            alert("Something went wrong please try again")
        })
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <ImageBackground source={require('../../../images/SplashLogo.png')} style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>

                <HeaderWihBackground isBack={true} title={"Leaves"} colors={colors} Props={this.props.value}/>
                <View style={{flex: 1, justifyContent: "center"}}>
                    <View style={{flex: 0.5, paddingHorizontal: 10, paddingTop: 20,}}>
                        <HomeScreenComponent Style={{backgroundColor: "orange"}} title={"Pending Leaves"}
                                             image={require('../../../images/wallclock.png')} onPress={() => {
                            this.props.navigation.navigate("PendingLeaves")
                        }}/>
                        <HomeScreenComponent Style={{backgroundColor: "green"}} title={"Accepted Leaves"}
                                             image={require('../../../images/checkmark.png')} onPress={() => {
                            this.props.navigation.navigate("AcceptedLeaves")
                        }}/>
                        <HomeScreenComponent Style={{backgroundColor: "red"}} title={"Rejected Leaves"}
                                             image={require('../../../images/close.png')} onPress={() => {
                            this.props.navigation.navigate("RejectedLeaves")
                        }}/>
                    </View>
                </View>

            </ImageBackground>

        );
    }
}

export default withLanguage(LeavesScreen)
