import React from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";

import HeaderWihBackground from "../Components/HeaderWihBackground";
import LeaveComponent from "../Components/LeaveComponent";

import {connect} from "react-redux";
import ButtonComponent from "../Components/ButtonComponent";
import EmployLeaveComponent from "../Components/EmployLeaveComponent";
import {getUserLeaves} from "../../redux/user/operations";
import {toast} from "../../Omni";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo,
    Leaves: user?.Leaves

});


@connect(
    mapStateToProps,
    {getUserLeaves}
)
class LeaveScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshData: false,
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        const data = {

            Email: this.props?.userInfo?.Email
        }
        this.props.getUserLeaves(data).then(res => {
            if (res) {
                this.setState({loading: false})
            } else {
                this.setState({loading: false})
            }
        }).catch(err => {
            this.setState({loading: false})
            toast("Some thing went wrong please try again")
        })
    }

    GetLeaves() {
        this.setState({refreshData: true})
        const data = {
            Email: this.props?.userInfo?.Email
        }
        this.props.getUserLeaves(data).then(res => {
            if (res) {
                this.setState({refreshData: false})
            }
        }).catch(err => {
            this.setState({refreshData: false})
            toast("Some thing went wrong please try again")
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

                <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 20,}}>
                    <View>
                        <FlatList refreshing={this.state.refreshData} onRefresh={() => {
                            this.GetLeaves()
                        }} contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}
                                  data={this.props.Leaves}
                                  renderItem={({item, index}) =>
                                      <EmployLeaveComponent item={item} colors={colors}/>
                                  }/>
                    </View>
                </View>
                <ButtonComponent title={"Send Leave"} onPress={() => {
                    this.props.navigation.navigate("SendLeaveScreen")
                }}/>
            </View>
        );
    }
}

export default withLanguage(LeaveScreen)