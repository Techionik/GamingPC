import React from 'react'
import {
    Alert,
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
import {AcceptComplain, acceptLeave, getLeaves, RejectComplain, rejectLeave} from "../../../redux/user/operations";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo
});


@connect(
    mapStateToProps,
    {AcceptComplain,RejectComplain},
)

class ViewCurrentComplain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshData: false,
            accept: false,
            modalVisible:false,
            modalVisible2:false,
            Notes:""
        }

    }
    componentDidMount() {
    }


    acceptComplain() {
        this.setState({accept: true})
        const obj = {
            Complain_ID: this.props?.route?.params?.data?.Complain_ID,
            Statuss: "Accepted",
            Email:this.props?.route?.params?.data?.Email,
            Responsess:this.state.Notes?this.state.Notes:""
        }
        this.props.AcceptComplain(obj).then((res) => {
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

    rejectComplain() {
        this.setState({accept: true})
        const obj = {
            Date: this.props?.route?.params?.data?.Complain_ID,
            Statuss: "Rejected",
            Email:this.props?.route?.params?.data?.Email,
            Responsess:this.state.Notes?this.state.Notes:""
        }
        this.props.RejectComplain(obj).then((res) => {
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
                 <View style={{flex:1}}>
                <ScrollView contentContainerStyle={{paddingBottom:20,flex:1}} style={{ paddingHorizontal: 10, paddingTop: 20,}}>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Complain ID"} placeholder={data?.Complain_ID}
                                            colors={colors}/>
                    </View>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Name"} placeholder={data?.Name}
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
                        <LeaveViewComponent disable={true} profile={true} title={"Email"}
                                            placeholder={data?.Email}
                                            colors={colors}/>
                    </View>



                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Complain"}
                                            placeholder={data?.Complain} colors={colors}/>
                    </View>


                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {

                            this.setState({ modalVisible: false });

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
                                <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
                                    <TouchableOpacity onPress={() => {
                                        this.setState({ modalVisible: false });
                                    }} style={{
                                        backgroundColor: "black",
                                        alignSelf: "flex-end",
                                        marginTop:10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: 40,
                                        width: 40,
                                        borderRadius: 40,
                                    }}>
                                        <AntDesign name={"close"} size={30} color={"#fff"}/>
                                    </TouchableOpacity>
                                    <TextInput value={this.state.Notes} onChangeText={(text)=>{this.setState({Notes:text})}} multiline={true} numberOfLines={3} placeholder={"Write Notes..."} placeholderTextColor={colors.blackAndWhite} style={{textAlignVertical:"top",borderColor:colors.blackAndWhite,fontSize:18,borderRadius:20,borderWidth:0.5,padding:7,paddingTop:10,color:colors.blackAndWhite,marginVertical:10}}>
                                    </TextInput>

                                    <ButtonComponent onPress={() => {
                                        this.acceptComplain()
                                        this.setState({modalVisible:false});
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

                            this.setState({ modalVisible2: false });

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
                                <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
                                    <TouchableOpacity onPress={() => {
                                        this.setState({ modalVisible2: false });
                                    }} style={{
                                        backgroundColor: "black",
                                        alignSelf: "flex-end",
                                        marginTop:10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: 40,
                                        width: 40,
                                        borderRadius: 40,
                                    }}>
                                        <AntDesign name={"close"} size={30} color={"#fff"}/>
                                    </TouchableOpacity>

                                    <TextInput value={this.state.Notes} onChangeText={(text)=>{this.setState({Notes:text})}} multiline={true} numberOfLines={3} placeholder={"Write Notes..."} placeholderTextColor={colors.blackAndWhite} style={{textAlignVertical:"top",borderColor:colors.blackAndWhite,fontSize:18,borderRadius:20,borderWidth:0.5,padding:7,paddingTop:10,color:colors.blackAndWhite,marginVertical:10}}>
                                    </TextInput>

                                    <ButtonComponent onPress={() => {
                                        this.rejectComplain()
                                        this.setState({modalVisible2:false});
                                    }} Style={{backgroundColor: "red"}} title={"Reject"}/>
                                </View>
                            </View>
                        </View>
                    </Modal>

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
                            this.setState({modalVisible:true});
                    }} title={"Accept"}/>
                    <ButtonComponent onPress={() => {
                        this.setState({modalVisible2:true});
                    }} Style={{backgroundColor: "red"}} title={"Reject"}/>

                        </>}
                </ScrollView>
                 </View>
            </View>

        );
    }
}

export default withLanguage(ViewCurrentComplain)
