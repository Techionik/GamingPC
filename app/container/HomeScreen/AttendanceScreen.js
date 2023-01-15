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
import {attendance, checkIn, CheckIn, CheckInData, leave} from "../../redux/user/operations";
import moment from "moment";
const mapStateToProps = ({app, user}) => ({
    app,
    user,
    brakeTime: user?.brakeTime,
});


@connect(
    mapStateToProps,
    {CheckInData,attendance}
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
            checkin:false,

        }
    }



   checkInLoction = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 150000,
        })
            .then(location => {
                const timeandDate=moment().format("DD/MM/YYYY")+"/"+moment().format("HH:MM")
                const data={
                    CheckInTime:timeandDate,
                    CheckIn_Lat:location.latitude,
                    CheckIn_Lon:location.longitude
                }
                this.props.CheckInData(data)

                this.setState({checkin:true})
                })
            .catch(ex => {
                const {code, message} = ex;
                console.warn(code, message);
                if (code === "CANCELLED") {
                    alert("Location cancelled by user or by another request");
                }
                if (code === "UNAVAILABLE") {
                    alert("Location service is disabled or unavailable");
                }
                if (code === "TIMEOUT") {
                    alert("Location request timed out");
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
                    alert("Location cancelled by user or by another request");
                }
                if (code === "UNAVAILABLE") {
                    alert("Location service is disabled or unavailable");
                }
                if (code === "TIMEOUT") {
                    alert("Location request timed out");
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



    checkOut(lat,long){

            const data={
                ID: this.props?.user?.userInfo?.ID,
                Name:this.props?.user?.userInfo?.Full_Name ,
                Designation: this.props?.user?.userInfo?.Designation,
                CheckIn: this.props?.user?.checkIn?.CheckInTime,
                Break:this.props.brakeTime ,
                CheckOut:moment().format("DD/MM/YYYY")+"/"+moment().format("HH:MM") ,
                CheckIn_Lat: this.props?.user?.checkIn?.CheckIn_Lat,
                CheckIn_Lon: this.props?.user?.checkIn?.CheckIn_Lon,
                CheckOut_Lat: lat,
                CheckOut_Lon: long,
                Working_Hours: "10"}
            this.props.attendance(data).then(res=>{
                console.log(res)
                if(res){
                    this.setState({loading:false})
                    this.props.navigation.pop()
                }else {
                    this.setState({loading:false})
                }
            }).catch(err=>{
                this.setState({loading:false})
                this.props.navigation.pop()
                alert("Some thing went wrong please try again")
            })
    }


    render() {
        const {t, language, themeColor} = this.props.value
        const {colors} = themeColor
        return (
            <View style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <HeaderWihBackground isBack={true} title={"Attendance"} colors={colors} Props={this.props.value}/>
                <Image source={require('../../images/WaterMark.png')} style={{aspectRatio:0.9,marginVertical:10,alignSelf:"center",height:undefined,width:"70%"}}/>
                <ButtonComponent disable={this.state.checkin}  onPress={() => {
                    this.checkInLoction();
                }} title={"check in"}/>
                <ButtonComponent  onPress={() => {
                    this.checkOutLoction()
                }} title={"check out"}/>
                <View style={{flex: 1}}/>
            </View>

        );
    }
}

export default withLanguage(AttendenceScreen)

