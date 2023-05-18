import React from 'react'
import {
    Alert,
    FlatList,
    Image,
    ImageBackground, Modal, ScrollView, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../../config/withLanguage";
import HeaderWihBackground from "../../Components/HeaderWihBackground";
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

class ViewCurrentUser extends React.Component {
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






    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        const data = this.props?.route?.params?.data
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>

                <HeaderWihBackground isBack={true} title={"User Management"} colors={colors} Props={this.props.value}/>
                 <View style={{flex:1}}>
                <ScrollView contentContainerStyle={{paddingBottom:20,}} style={{ paddingHorizontal: 10, paddingTop: 20,}}>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Name"} placeholder={data?.Full_Name}
                                            colors={colors}/>
                    </View>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Designation"} placeholder={data?.Designation}
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
                        <LeaveViewComponent disable={true} profile={true} title={"Pay"}
                                            placeholder={data?.Pay}
                                            colors={colors}/>
                    </View>



                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Address"}
                                            placeholder={data?.Address} colors={colors}/>
                    </View>


                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"ID_Card"}
                                            placeholder={data?.ID_Card} colors={colors}/>
                    </View>


                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Phone Number"}
                                            placeholder={data?.Phone} colors={colors}/>
                    </View>
                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Shift"}
                                            placeholder={data?.Shift} colors={colors}/>
                    </View>

                    <View style={{
                        borderRadius: 15,
                        backgroundColor: colors.fieldBackgroundColor,
                        marginBottom: 10,
                        paddingVertical: 15,
                        paddingHorizontal: 20
                    }}>
                        <LeaveViewComponent disable={true} profile={true} title={"Role"}
                                            placeholder={data?.Rolee} colors={colors}/>
                    </View>





                </ScrollView>

                     <ButtonComponent title={"Edit"} onPress={()=>{this.props.navigation.navigate("EditProfileScreen",{Data:data})}}/>
                 </View>
            </View>

        );
    }
}

export default withLanguage(ViewCurrentUser)
