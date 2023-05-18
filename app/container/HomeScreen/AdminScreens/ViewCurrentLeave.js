import React from 'react'
import {
    toast,
    FlatList,
    Image,
    ImageBackground, Modal, ScrollView, Text, TextInput, TouchableOpacity,
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
    {acceptLeave, rejectLeave},
)

class ViewCurrentLeave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshData: false,
            accept: false,
            modalVisible: false,
            modalVisible2: false,
            Notes: ""
        }

    }

    componentDidMount() {
    }


    AcceptLeave() {
        this.setState({accept: true})
        const obj = {
            Date: this.props?.route?.params?.data?.Date,
            Status: "Accept",
            Email: this.props?.route?.params?.data?.Email,
            Notes: this.state.Notes ? this.state.Notes : ""
        }
        this.props.acceptLeave(obj).then((res) => {
            if (res) {
                this.setState({accept: false})
                this.props.navigation.pop()
            }
        }).catch((err) => {
            this.setState({accept: false})
            toast("Something went wrong please try again")
        })
    }

    RejectLeave() {
        this.setState({accept: true})
        const obj = {
            Date: this.props?.route?.params?.data?.Date,
            Status: "Reject",
            Email: this.props?.route?.params?.data?.Email,
            Notes: this.state.Notes ? this.state.Notes : ""
        }
        this.props.rejectLeave(obj).then((res) => {
            if (res) {
                this.setState({accept: false})
                this.props.navigation.pop()
            }
        }).catch((err) => {
            this.setState({accept: false})
            toast("Something went wrong please try again")
        })
    }


    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        const data = this.props?.route?.params?.data
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>

                <HeaderWihBackground isBack={true} title={"Leave"} colors={colors} Props={this.props.value}/>
                <View style={{flex: 1}}>
                    <ScrollView contentContainerStyle={{paddingBottom: 20}}
                                style={{paddingHorizontal: 20, paddingTop: 20,}}>

                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <LeaveViewComponent disable={true} profile={true} title={"Name"}
                                                placeholder={data?.Full_Name}
                                                colors={colors}/>
                        </View>

                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
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
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <LeaveViewComponent disable={true} profile={true} title={"From"}
                                                placeholder={data?.Start_Date}
                                                colors={colors}/>
                        </View>
                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <LeaveViewComponent disable={true} profile={true} title={"To"}
                                                placeholder={data?.Ending_Date}
                                                colors={colors}/>
                        </View>
                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <LeaveViewComponent disable={true} profile={true} title={"No Of Leaves"}
                                                placeholder={data?.Number_of_Leaves} colors={colors}/>
                        </View>
                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <LeaveViewComponent disable={true} profile={true} title={"Leave Type"}
                                                placeholder={data?.Leaves} colors={colors}/>
                        </View>
                        <View style={{
                            borderRadius: 15,
                            backgroundColor: colors.fieldBackgroundColor,
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <LeaveViewComponent disable={true} profile={true} title={"Description"}
                                                placeholder={data?.Description} colors={colors}/>
                        </View>


                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                this.setState({modalVisible: false});
                            }}

                        >
                            <View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "rgba(0,0,0,0.73)",

                            }}>
                                <View style={{
                                    width: "90%",
                                    backgroundColor: colors.fieldBackgroundColor,
                                    justifyContent: "center",
                                    borderRadius: 15,

                                }}>
                                    <View style={{paddingHorizontal: 15, paddingBottom: 15}}>
                                        <TouchableOpacity onPress={() => {
                                            this.setState({modalVisible: false});
                                        }} style={{
                                            backgroundColor: "black",
                                            alignSelf: "flex-end",
                                            marginTop: 10,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: 40,
                                            width: 40,
                                            borderRadius: 40,
                                        }}>
                                            <AntDesign name={"close"} size={30} color={"#fff"}/>
                                        </TouchableOpacity>
                                        <TextInput value={this.state.Notes} onChangeText={(text) => {
                                            this.setState({Notes: text})
                                        }} multiline={true} numberOfLines={3} placeholder={"Write Notes..."}
                                                   placeholderTextColor={colors.fieldTextColor} style={{
                                            textAlignVertical: "top",
                                            borderColor: colors.fieldTextColor,
                                            fontSize: 18,
                                            borderRadius: 20,
                                            borderWidth: 0.5,
                                            padding: 7,
                                            paddingTop: 10,
                                            color: colors.fieldTextColor,
                                            marginVertical: 10
                                        }}>
                                        </TextInput>

                                        <ButtonComponent onPress={() => {
                                            this.AcceptLeave()
                                            this.setState({modalVisible: false});
                                        }} title={"Accept"}/>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.modalVisible2}
                            onRequestClose={() => {

                                this.setState({modalVisible2: false});

                            }}

                        >
                            <View style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "rgba(0,0,0,0.73)",

                            }}>
                                <View style={{
                                    width: "90%",
                                    backgroundColor: colors.fieldBackgroundColor,
                                    justifyContent: "center",
                                    borderRadius: 15,

                                }}>
                                    <View style={{paddingHorizontal: 15, paddingBottom: 15}}>
                                        <TouchableOpacity onPress={() => {
                                            this.setState({modalVisible2: false});
                                        }} style={{
                                            backgroundColor: "black",
                                            alignSelf: "flex-end",
                                            marginTop: 10,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: 40,
                                            width: 40,
                                            borderRadius: 40,
                                        }}>
                                            <AntDesign name={"close"} size={30} color={"#fff"}/>
                                        </TouchableOpacity>

                                        <TextInput value={this.state.Notes} onChangeText={(text) => {
                                            this.setState({Notes: text})
                                        }} multiline={true} numberOfLines={3} placeholder={"Write Notes..."}
                                                   placeholderTextColor={colors.fieldTextColor} style={{
                                            textAlignVertical: "top",
                                            borderColor: colors.fieldTextColor,
                                            fontSize: 18,
                                            borderRadius: 20,
                                            borderWidth: 0.5,
                                            padding: 7,
                                            paddingTop: 10,
                                            color: colors.fieldTextColor,
                                            marginVertical: 10
                                        }}>
                                        </TextInput>

                                        <ButtonComponent onPress={() => {
                                            this.RejectLeave()
                                            this.setState({modalVisible2: false});
                                        }} Style={{backgroundColor: "red"}} title={"Reject"}/>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                        <View style={{flex: 1}}/>
                        {this.props?.route?.params?.data?.Statuss === "Accept" ? <View style={{
                            borderRadius: 15,
                            backgroundColor: "green",
                            marginBottom: 10,
                            paddingVertical: 15,
                            paddingHorizontal: 20
                        }}>
                            <Text style={{fontFamily: Constants.fontFamilyMedium, alignSelf: "center"}}>Accepted</Text>
                        </View> : this.props?.route?.params?.data?.Statuss === "Reject" ?
                            <View style={{
                                borderRadius: 15,
                                backgroundColor: "red",
                                marginBottom: 10,
                                paddingVertical: 15,
                                paddingHorizontal: 20
                            }}>
                                <Text style={{fontWeight: "bold", fontSize: 16, alignSelf: "center"}}>Reject</Text>
                            </View> :
                            <>
                                <ButtonComponent Style={{backgroundColor:"green"}} onPress={() => {
                                    this.setState({modalVisible: true});
                                }} title={"Accept"}/>
                                <ButtonComponent onPress={() => {
                                    this.setState({modalVisible2: true});
                                }} Style={{backgroundColor: "red"}} title={"Reject"}/>
                            </>}
                    </ScrollView>
                </View>
            </View>

        );
    }
}

export default withLanguage(ViewCurrentLeave)
