import React from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";

import AntDesign from "react-native-vector-icons/AntDesign";
import HeaderWihBackground from "../Components/HeaderWihBackground";
import DropdownComponent from "../Components/DropdownComponent";
import FieldComponent from "../Components/FieldComponent";
import ButtonComponent from "../Components/ButtonComponent";
import {Dropdown} from "react-native-material-dropdown";
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from "moment";
import TouchableComponent from "../Components/TouchableComponent";
import {Color} from "../../common";
import {connect} from "react-redux";
import {getData, getUserLeaves, leave, login, sendleave} from "../../redux/user/operations";

const mapStateToProps = ({app, user}) => ({
    app,
    user,
    userInfo: user?.userInfo,
});


@connect(
    mapStateToProps,
    {sendleave,getUserLeaves}
)


class SendLeaveScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "Chose Leave Type",
            date:"" ,
            StartDatePicker: false,
            startDate: moment().format("DD/mm/yyyy"),
            endDate: "",
            Option: "",
            discription:"",
            noOfLeaves:0,
            loading:false
        }

    }

    GetLeaves() {
        this.setState({refreshData: true})
        const data = {
            Email: this.props?.userInfo?.Email
        }
        this.props.getUserLeaves(data).then(res => {
            if (res) {
                this.setState({refreshData: false})
                this.setState({Leaves: res})

            }
        }).catch(err => {
            this.setState({refreshData: false})
            alert("Some thing went wrong please try again")
        })
    }
    validation(){
        if(this.state.startDate==""){
            alert("please insert date")
        }
        else if (this.state.endDate==""){
            alert("please insert end date")

        }
        else if(this.state.discription==""){
            alert("please insert discription")
        }else {
            const data={
                ID: this.props?.user?.userInfo?.ID,
                Full_Name: this.props?.user?.userInfo?.Full_Name,
                Date: this.state.startDate+moment().format("HH:mm:ss"),
                Start_Date:this.state.startDate,
                Ending_Date:this.state.endDate,
                Designation: this.props?.user?.userInfo?.Designation,
                Number_of_Leaves:(parseInt(this.state.endDate.substring(0,2)-parseInt(this.state.startDate.substring(0,2)))),
                Description: this.state.discription,
                Status:"Pending",
                Email:this.props?.user?.userInfo?.Email,
                Leave_Type:this.state.selectedOption
            }
            console.log(JSON.stringify(data))
            this.setState({loading:true})

            this.props.sendleave(data).then(res=>{

                if(res){
                    this.GetLeaves()
                    this.setState({loading:false})
                    this.props.navigation.pop()
                }else {
                    this.setState({loading:false})
                }
            }).catch(err=>{
                this.setState({loading:false})
                alert("Some thing went wrong please try again")
            })

        }
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>

                <HeaderWihBackground isBack={true} title={"Leave"} colors={colors} Props={this.props.value}/>

                <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: 15, marginBottom: 20}}>
                    <Image source={require('../../images/WaterMark.png')} style={{aspectRatio:0.9,marginVertical:10,alignSelf:"center",height:undefined,width:"70%"}}/>
                    <TouchableComponent onPress={() => {
                        this.setState({visibleDatePicker: true, Option: "StartDate"})
                    }} theme={colors} title={this.state.startDate ? this.state.startDate : "Start Date"}
                                        IconStyle={{width: "6%"}} Icon={require('../../images/calendar.png')}/>

                    <TouchableComponent onPress={() => {
                        this.setState({visibleDatePicker: true, Option: "End Date"})
                    }} theme={colors} title={this.state.endDate ? this.state.endDate : "End Date"}
                                        IconStyle={{width: "6%"}} Icon={require('../../images/calendar.png')}/>

                    {/*<View style={{      flexDirection: "row",*/}
                    {/*    borderRadius: 10,*/}
                    {/*    alignItems:"center",*/}
                    {/*    backgroundColor: colors.fieldBackgroundColor,*/}
                    {/*    paddingVertical: 10,*/}
                    {/*    justifyContent:"space-between",*/}
                    {/*    paddingLeft: 20,*/}
                    {/*    paddingRight:10,*/}
                    {/*    marginTop: 10}}>*/}
                    {/*    <AntDesign onPress={()=>{this.setState({noOfLeaves:this.state.noOfLeaves-1})}} name={"minussquare"} color={colors.primaryLight} size={30}/>*/}
                    {/*    <Text style={{fontSize:18,color:colors.blackAndWhite}}>{this.state.noOfLeaves<=0?0:this.state.noOfLeaves}</Text>*/}
                    {/*    <AntDesign  onPress={()=>{this.state.noOfLeaves>=18?null:(this.setState({noOfLeaves:this.state.noOfLeaves+1}))}} name={"plussquare"} color={colors.primaryLight}  size={30}/>*/}
                    {/*</View>*/}
                    <Dropdown
                        itemColor={colors.blackAndWhite}
                        itemTextStyle={{color: colors.blackAndWhite}}
                        lineWidth={0}
                        pickerStyle={{backgroundColor: colors.BackgroundView, borderRadius: 10}}
                        color={colors.blackAndWhite}
                        fontSize={13}
                        placeholder={this.state.selectedOption}
                        baseColor={colors.blackAndWhite}
                        customTickIcon={<AntDesign name={"caretdown"} color={"#fff"}/>}
                        value={this.state.selectedOption}
                        placeholderTextColor={colors.blackAndWhite}
                        dropdownOffset={{top: 10, right: -10, left: -17}}
                        rippleCentered={true}
                        textColor={colors.blackAndWhite}
                        onChangeText={(value) => {

                            this.setState({selectedOption: value})
                        }}
                        containerStyle={{
                            paddingLeft: 20,
                            marginTop: 5,
                            backgroundColor: colors.fieldBackgroundColor,
                            borderRadius: 10,
                            width: "100%",
                        }}
                        data={[{value: "Late Leave"},{value: "Half Day Leave"},{value: "Sick Leave"},{value: "Bereavement Leave"},{value: "Emergency Leave"},{value: "Other"}]}
                    />
                    {this.state.Option === "StartDate" ? <DateTimePicker
                        isVisible={this.state.visibleDatePicker}
                        showIcon={false}
                        hideText={true}
                        style={{}}
                        date={moment().toDate()}
                        mode="date"
                        placeholder={"select date"}
                        confirmBtnText={"Confirm"}
                        cancelBtnText={"Cancel"}
                        onCancel={() => {
                            this.setState({visibleDatePicker: false})
                        }}
                        customStyles={{
                            dateIcon: {
                                position: "absolute",
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onConfirm={date => {

                            this.setState({
                                visibleDatePicker: false,
                                startDate: moment(date).format('DD/MM/YYYY')
                            }, () => {
                                console.log()
                            });
                        }}
                    /> : <DateTimePicker
                        isVisible={this.state.visibleDatePicker}
                        showIcon={false}
                        hideText={true}
                        style={{}}
                        date={moment().toDate()}
                        mode="date"
                        placeholder={"select date"}
                        confirmBtnText={"Confirm"}
                        cancelBtnText={"Cancel"}
                        onCancel={() => {
                            this.setState({visibleDatePicker: false})
                        }}
                        customStyles={{
                            dateIcon: {
                                position: "absolute",
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onConfirm={date => {

                            this.setState({
                                visibleDatePicker: false,
                                endDate: moment(date).format('DD/MM/YYYY')
                            }, () => {
                                console.log()
                            });
                        }}
                    />}

                    <FieldComponent multiline={true} value={this.state.discription} onChangeText={(text)=>{this.setState({discription:text})}} nolines={6} Placeholder={"Description"} FieldStyle={{textAlignVertical: "top"}}
                                    theme={colors} Icon={false}/>
                    <View style={{flex: 1}}/>
                    {!this.state.loading?<ButtonComponent onPress={() => {
                        this.validation()
                    }} title={"Submit"}/>:<ActivityIndicator color={Color.primary} size={"large"} style={{alignSelf:"center"}}/>}
                </ScrollView>
            </View>

        );
    }
}

export default withLanguage(SendLeaveScreen)

