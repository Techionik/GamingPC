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
import {getComplains} from "../../../redux/user/operations";
import {connect} from "react-redux";
import ComplainComponent from "../../Components/ComplainComponent";
import {HomeScreenComponent} from "../../Components/HomeScreenComponent";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo,

});


@connect(
    mapStateToProps,
    {getComplains},
)
class ComplainsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Complains: [],
            refreshData: false,
            loading:false
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        const obj = {
            Complain_ID: ""
        }
        this.props.getComplains(obj).then((res) => {
            this.setState({Complains: res})
            this.setState({loading: false})
        }).catch((err) => {
            this.setState({loading: false})
            alert("Something went wrong please try again")
        })
    }

    getFreshData() {
        this.setState({refreshData: true})
        const obj = {
            Complain_ID: ""
        }
        this.props.getComplains(obj).then((res) => {
            this.setState({Complains: res})
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
            <View  style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                {this.state.loading&&    <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,zIndex:10,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:"center",alignItems:"center"}}>
                    <ActivityIndicator size={"large"} color={Color.primary}/>

                </View>}
                <HeaderWihBackground isBack={true} title={"Complains"} colors={colors} Props={this.props.value}/>
                <View style={{flex: 1, justifyContent: "center"}}>
                    <View style={{flex: 0.5, paddingHorizontal: 10, paddingTop: 20,}}>
                        <HomeScreenComponent Style={{backgroundColor: "orange"}} title={"Pending Complains"}
                                             image={require('../../../images/wallclock.png')} onPress={() => {
                            this.props.navigation.navigate("PendingComplains")
                        }}/>
                        <HomeScreenComponent Style={{backgroundColor: "green"}} title={"Accepted Complains"}
                                             image={require('../../../images/checkmark.png')} onPress={() => {
                            this.props.navigation.navigate("AcceptedComplains")
                        }}/>
                        <HomeScreenComponent Style={{backgroundColor: "red"}} title={"Rejected Complains"}
                                             image={require('../../../images/close.png')} onPress={() => {
                            this.props.navigation.navigate("RejectedComplains")
                        }}/>
                    </View>
                </View>

            </View>

        );
    }
}

export default withLanguage(ComplainsScreen)
