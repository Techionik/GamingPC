import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../../config/withLanguage";
import {Color, Constants} from "../../../common";
// import HeaderComponent from "../Components/HeaderComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderWihBackground from "../../Components/HeaderWihBackground";
import PayRoleComponent from "../../Components/PayRoleComponent";
import ProfileFieldComponent from "../../Components/ProfileFieldComponent";
import {RowComponent} from "../ProfileScreen";
import ButtonComponent from "../../Components/ButtonComponent";
import LeaveViewComponent from "../../Components/LeaveViewComponent";
import {connect} from "react-redux";
import {acceptLeave, getLeaves, rejectLeave} from "../../../redux/user/operations";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo
});


@connect(
    mapStateToProps,
    {acceptLeave,rejectLeave},
)

class ViewCurrentLeave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshData: false,
            accept: false

        }


    }

    AcceptLeave() {
        this.setState({accept: true})
        const obj = {
            Date: this.props?.route?.params?.data?.Date,
            Status: "Accept"
        }
        this.props.acceptLeave(obj).then((res) => {
            if (res) {
                this.setState({accept: false})
                this.props.navigation.pop()
                console.log(JSON.stringify(res))
            }
        }).catch((err) => {
            this.setState({accept: false})
            alert("Something went wrong please try again")
        })
    }

    RejectLeave() {
        this.setState({accept: true})
        const obj = {
            Date: this.props?.route?.params?.data?.Date,
            Status: "Reject"
        }
        this.props.rejectLeave(obj).then((res) => {
            if (res) {
                this.setState({accept: false})
                this.props.navigation.pop()
                console.log(JSON.stringify(res))
            }
        }).catch((err) => {
            this.setState({accept: false})
            alert("Something went wrong please try again")
        })
    }



    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        const data = this.props?.route?.params?.data
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>

                <HeaderWihBackground isBack={true} title={"Leave"} colors={colors} Props={this.props.value}/>

                <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 20,}}>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Name"} placeholder={data?.Full_Name}
                                            colors={colors}/>
                    </View>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Designation"}
                                            placeholder={data?.Designation}
                                            colors={colors}/>
                    </View>
                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"From"} placeholder={data?.Start_Date}
                                            colors={colors}/>
                    </View>
                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"To"} placeholder={data?.Ending_Date}
                                            colors={colors}/>
                    </View>
                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.whiteToDark,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Description"}
                                            placeholder={data?.Description} colors={colors}/>
                    </View>

                    <View style={{flex: 1}}/>
                    {this.props?.route?.params?.data?.Statuss==="Accept"?<View style={{
                        borderRadius: 15,
                        backgroundColor: Color.primary,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <Text style={{fontFamily: Constants.fontFamilyMedium, alignSelf: "center"}}>Accepted</Text>
                    </View>:this.props?.route?.params?.data?.Statuss==="Reject"?
                        <View style={{
                            borderRadius: 15,
                            backgroundColor: "red",
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <Text style={{fontWeight:"bold",fontSize:16, alignSelf: "center"}}>Reject</Text>
                        </View>:
                        <>
                        <ButtonComponent onPress={() => {
                        this.AcceptLeave()
                    }} title={"Accept"}/>
                    <ButtonComponent onPress={() => {
                       this.RejectLeave()
                    }} Style={{backgroundColor: "red"}} title={"Reject"}/>

                        </>}
                </View>
            </View>

        );
    }
}

export default withLanguage(ViewCurrentLeave)
