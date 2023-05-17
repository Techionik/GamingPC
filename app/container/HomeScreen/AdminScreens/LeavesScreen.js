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
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                {this.state.loading && <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <ActivityIndicator size={"large"} color={Color.primary}/>

                </View>}
                <HeaderWihBackground isBack={true} title={"Leaves"} colors={colors} Props={this.props.value}/>

                <ScrollView contentContainerStyle={{paddingBottom: 20}}
                            style={{flex: 1, paddingHorizontal: 10, paddingTop: 20,}}>
                    <View>
                        <FlatList contentContainerStyle={{flex: 1}} refreshing={this.state.refreshData}
                                  onRefresh={() => {
                                      this.getFreshLeaves()
                                  }} showsVerticalScrollIndicator={false} data={this.state.Leaves}
                                  renderItem={({item, index}) =>
                                      item?.Statuss === "Pending" ?
                                          <LeaveComponent colors={colors} item={item}/> : null
                                  }/>
                    </View>
                    {this.state?.Leaves?.filter(item => item?.Statuss === "Accept")[0] ?
                        <Text style={{fontSize: 18, color: colors.blackAndWhite}}>Accepted Leaves</Text> : false}
                    <View>
                        <FlatList contentContainerStyle={{flex: 1}} refreshing={this.state.refreshData}
                                  onRefresh={() => {
                                      this.getFreshLeaves()
                                  }} showsVerticalScrollIndicator={false} data={this.state.Leaves}
                                  renderItem={({item, index}) =>
                                      item?.Statuss === "Accept" ?
                                          <LeaveComponent colors={colors} item={item}/> : null
                                  }/>
                    </View>
                    {this.state?.Leaves?.filter(item => item?.Statuss === "Reject")[0] ?
                        <Text style={{fontSize: 18, color: colors.blackAndWhite}}>Rejected Leaves</Text> : null}
                    <View>
                        <FlatList contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}
                                  data={this.state.Leaves} refreshing={this.state.refreshData} onRefresh={() => {
                            this.getFreshLeaves()
                        }}
                                  renderItem={({item, index}) =>
                                      item?.Statuss === "Reject" ?
                                          <LeaveComponent colors={colors} item={item}/> : null
                                  }/>
                    </View>
                </ScrollView>

            </View>

        );
    }
}

export default withLanguage(LeavesScreen)
