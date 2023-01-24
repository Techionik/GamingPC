import React from 'react'
import {
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
            jobsLsit: [],
            refreshData: false,
        }
    }

    componentDidMount() {
        this.setState({refreshData: true})

        this.props.getLeaves().then((res) => {
            this.setState({jobsLsit: res?.Result})
            console.log(JSON.stringify(res))
            this.setState({refreshData: false})
        }).catch((err) => {
            this.setState({refreshData: false})
            alert("Something went wrong please try again")
        })
    }

    getFreshLeaves() {
        this.setState({refreshData: true})
        const obj = {
            Date: ""
        }
        this.props.getLeaves(obj).then((res) => {
            this.setState({jobsLsit: res?.Result})
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

                <HeaderWihBackground isBack={true} title={"Leaves"} colors={colors} Props={this.props.value}/>

                <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 20,}}>
                    <View>
                        <FlatList  contentContainerStyle={{flex:1}} refreshing={this.state.refreshData} onRefresh={() => {
                            this.getFreshLeaves()
                        }} showsVerticalScrollIndicator={false} data={this.state.jobsLsit}
                                   renderItem={({item, index}) =>
                                       item.Statuss=="Pending"?
                                           <LeaveComponent colors={colors} item={item}/>:null
                                   }/>
                    </View>
                     <Text style={{fontSize:18,color:colors.blackAndWhite}}>Accepted Leaves</Text>
                    <View>
                    <FlatList  contentContainerStyle={{flex:1}} refreshing={this.state.refreshData} onRefresh={() => {
                        this.getFreshLeaves()
                    }} showsVerticalScrollIndicator={false} data={this.state.jobsLsit}
                              renderItem={({item, index}) =>
                                  item.Statuss=="Accept"?
                                  <LeaveComponent colors={colors} item={item}/>:null
                              }/>
                    </View>

                    <Text style={{fontSize:18,color:colors.blackAndWhite}}>Rejected Leaves</Text>
                    <View>
                    <FlatList  contentContainerStyle={{flex:1}} refreshing={this.state.refreshData} onRefresh={() => {
                        this.getFreshLeaves()
                    }} showsVerticalScrollIndicator={false} data={this.state.jobsLsit}
                              renderItem={({item, index}) =>
                                  item.Statuss=="Reject"?
                                      <LeaveComponent colors={colors} item={item}/>:null
                              }/>
                    </View>
                </View>

            </View>

        );
    }
}

export default withLanguage(LeavesScreen)
