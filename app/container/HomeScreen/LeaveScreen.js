import React from 'react'
import {
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
        }
    }

    componentDidMount() {
        this.GetLeaves()

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
            alert("Some thing went wrong please try again")
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
                    <FlatList refreshing={this.state.refreshData} onRefresh={()=>{
                        this.GetLeaves()
                    }} contentContainerStyle={{flex: 1}} showsVerticalScrollIndicator={false}
                              data={this.props.Leaves}
                              renderItem={({item, index}) =>
                                  <EmployLeaveComponent item={item} colors={colors}/>
                    }/>
                    </View>
                </View>
                <ButtonComponent title={"Leave"} onPress={() => {
                    this.props.navigation.navigate("SendLeaveScreen")
                }}/>
            </View>
        );
    }}
export default withLanguage(LeaveScreen)