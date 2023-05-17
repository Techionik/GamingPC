import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";

import HeaderWihBackground from "../Components/HeaderWihBackground";
import ButtonComponent from "../Components/ButtonComponent";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import GetLocation from "react-native-get-location";
import {connect} from "react-redux";
import {attendance, checkIn, CheckIn, CheckInData, cleeardata, leave} from "../../redux/user/operations";
import moment from "moment";
import {toast} from "../../Omni";
const mapStateToProps = ({app, user}) => ({
    app,
    user,
    brakeTime: user?.brakeTime,
});


@connect(
    mapStateToProps,
    {CheckInData,attendance,cleeardata}
)

class AttendenceScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: undefined,
            checkInlatitude:"",
            checkInlongitude:"",
            checkOutlatitude:"",
            checkOutlongitude:"",
            checkIn_time:"",
            checkOut_time:"",
            checkin:false,
            checkOutTime:""

        }

    }



    checkInLoction = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 150000,
        })
            .then(location => {
                const timeandDate=moment().format("DD/MM/YYYY")+"/"+moment().format("hh:mm:ss")
                const Time=moment().format("hh.mm")
                const data={
                    CheckInTime:timeandDate,
                    CheckIn_Lat:location.latitude,
                    CheckIn_Lon:location.longitude,
                    Time:Time,
                }
                this.props.CheckInData(data)
                toast("You are check in Successfully")
                this.props.navigation.pop()
                this.setState({checkin:true})
                })
            .catch(ex => {
                const {code, message} = ex;
                console.warn(code, message);
                if (code === "CANCELLED") {
                    toast("Location cancelled by user or by another request");
                }
                if (code === "UNAVAILABLE") {
                    toast("Location service is disabled or unavailable");
                }
                if (code === "TIMEOUT") {
                    toast("Location request timed out");
                }
                if (code === "UNAUTHORIZED") {
                    // this.setState({ validateModal2: true });
                }
                // this.setState({
                //   location: null,
                //   loading: false,
                // });
            });
    };

    checkOutLoction = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 150000,
        })
            .then(location => {
                this.checkOut(location.latitude,location.longitude)
                })
            .catch(ex => {
                const {code, message} = ex;
                console.warn(code, message);
                if (code === "CANCELLED") {
                    toast("Location cancelled by user or by another request");
                }
                if (code === "UNAVAILABLE") {
                    toast("Location service is disabled or unavailable");
                }
                if (code === "TIMEOUT") {
                    toast("Location request timed out");
                }
                if (code === "UNAUTHORIZED") {
                    // this.setState({ validateModal2: true });
                }
                // this.setState({
                //   location: null,
                //   loading: false,
                // });
            });
    };

  checkOutTime=()=>{
          return (
              this.setState({checkOut_time:moment().format("DD/MM/YYYY")+"/"+moment().format("hh:mm:ss"),checkOutTime:moment().format("hh.mm")})
          )
  }
    checkOut(lat,long){
      this.checkOutTime()
        const WorkingHours=(parseFloat(this.state.checkOutTime).toFixed(2))-(parseFloat(this.props?.user?.checkIn?.Time).toFixed(2))
            const data={
                ID: this.props?.user?.userInfo?.ID,
                Full_Name:this.props?.user?.userInfo?.Full_Name ,
                Designation: this.props?.user?.userInfo?.Designation,
                CheckIn: this.props?.user?.checkIn?.CheckInTime,
                Break:this.props.brakeTime ,
                CheckOut:this.state.checkOut_time,
                CheckIn_Lat: this.props?.user?.checkIn?.CheckIn_Lat.toString(),
                CheckIn_Lon: this.props?.user?.checkIn?.CheckIn_Lon.toString(),
                CheckOut_Lat: lat.toString(),
                CheckOut_Lon: long.toString(),
                Working_Hours: WorkingHours.toString()}
        this.props.attendance(data).then(res=>{
                if(res){
                    this.setState({loading:false})
                    this.props.navigation.pop()
                    this.props.cleeardata()
                    toast("Pack your bag and go to home.")

                }else {
                    this.props.cleeardata()
                    this.setState({loading:false})
                }
            }).catch(err=>{
                this.setState({loading:false})
                this.props.navigation.pop()
                this.props.cleeardata()
                toast("Some thing went wrong please try again")
            })
    }

    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={"Attendance"} colors={colors} Props={this.props.value}/>
                <Image source={require('../../images/WaterMark.png')} style={{aspectRatio:0.9,marginVertical:50,alignSelf:"center",height:undefined,width:"50%"}}/>
                <ButtonComponent Style={{marginHorizontal:40,backgroundColor:colors.fieldBackgroundColor}}  disable={this.props?.user?.checkIn?.CheckInTime?true:false}  onPress={() => {
                    this.checkInLoction();
                }} title={"Check In"}/>
                <ButtonComponent Style={{marginHorizontal:40,backgroundColor:colors.fieldBackgroundColor}}  disable={this.props?.user?.checkIn?.CheckInTime?false:true}  onPress={() => {
                    this.checkOutLoction()
                }} title={"Check Out"}/>
                <View style={{flex: 1}}/>
            </View>

        );
    }
}

export default withLanguage(AttendenceScreen)

