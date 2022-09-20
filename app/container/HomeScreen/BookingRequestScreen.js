import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, Text, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import colors from "react-native/Libraries/NewAppScreen/components/Colors";



class BookingRequestScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingScreenNumber:1,
            bookingDataList:[
                {
                    key:1,
                    time:"12:00 - 12:20",
                    title:"ReceivedBookingRequest",
                    description:"ReceivedBookingRequestDic",
                    image:require("../../images/receivedBookingRequestImage.png")
                },
                {
                    key:2,
                    time:"12:00 - 12:18",
                    title:"BookingAccepted",
                    description:"BookingAcceptedDic",
                    image:require("../../images/acceptBookingRequestImage.png")

                },
                {
                    key:3,
                    time:"12:00 - 12:10",
                    title:"expertsGettingRead",
                    description:"expertsGettingReadDic",
                    image:require("../../images/expertReadyImage.png")

                },
                {
                    key:4,
                    time:"5 minutes left",
                    title:"expertsOnWay",
                    description:"expertsOnWayDic",
                    image:require("../../images/MapBackground.png")

                },
                {
                    key:5,
                    time:"At your doorstep",
                    title:"Expertsarrived",
                    description:"ExpertsarrivedDic",
                    image:require("../../images/MapBackground.png")

                }
            ]
        }
    }


    circleComponent({title, isActive, isLast,colors,isText,state}){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>

                <TouchableOpacity onPress={()=>{
                    this.setState({bookingScreenNumber:state})
                }}  style={{justifyContent:'center',width:60}}>
                {
                    isText ?

                        <Text style={{
                            color: colors.fieldTextColor,
                            fontFamily: Constants.fontFamilyRegular,
                            fontSize: 11,
                            height:35,
                        }}>{title}</Text>
                :

                        <Text style={{
                            color: "#fff",
                            fontFamily: Constants.fontFamilyRegular,
                            fontSize: 11,
                            height:35,
                        }}>{title}</Text>
                }
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{backgroundColor:'#fff',height:30,width:30,borderRadius:30,borderWidth:3,borderColor:isActive?Color.primary:Color.InActiveprogressCircleColor,justifyContent:'center'}}>
                    <View style={{height:14,width:14,borderRadius:15,backgroundColor:isActive?Color.primary:Color.InActiveprogressCircleColor,zIndex:2,alignSelf:'center'}}></View>
                </View>
                   {isLast ?
                       null :
                       <View style={{

                           width:30,
                           borderWidth:1,
                           borderColor:isActive?Color.primary:Color.InActiveprogressCircleColor,
                           backgroundColor: isActive?Color.primary:Color.InActiveprogressCircleColor,
                           borderStyle: 'dashed',
                           borderRadius: 1,
                       }}></View>
                   }
               </View>
                </TouchableOpacity>
            </View>
        )
    }

    BottomProgressBar({colors}){
        const {t,language}=this.props.value
        return(
            <View style={{width:"80%",alignSelf:'center'}}>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                    {this.circleComponent({title:t("L:Booking")+"\n" +t("L:Request"),colors:colors,isActive:this.state.bookingScreenNumber>=1?true:false,isText:this.state.bookingScreenNumber==1?true:false,state:1})}
                    {this.circleComponent({title:t("L:Request")+"\n" +t("L:Accepted"),colors:colors,isActive:this.state.bookingScreenNumber>=2?true:false,isText:this.state.bookingScreenNumber==2?true:false,state:2})}
                    {this.circleComponent({title:t("L:Getting")+"\n"+t("L:ready"),colors:colors,isActive:this.state.bookingScreenNumber>=3?true:false,isText:this.state.bookingScreenNumber==3?true:false,state:3})}
                    {this.circleComponent({title:t("L:Onthe") +"\n"+t("L:way"),colors:colors,isActive:this.state.bookingScreenNumber>=4?true:false,isText:this.state.bookingScreenNumber==4?true:false,state:4})}
                    {this.circleComponent({title:t("L:Experts") +"\n"+t("L:Arrived"),colors:colors,isLast:true,isActive:this.state.bookingScreenNumber>=5?true:false,isText:this.state.bookingScreenNumber==5?true:false,state:5})}


                </View>

            </View>
        )
    }


    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
                <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>
                    <HeaderComponent Location={false} title={t("L:YourBooking")} Drawer={true} Props={this.props.value} />

                    <View style={{flex:0.9,justifyContent:'center',alignItems:'center'}}>

                        <Image resizeMode={"contain"} style={{height:undefined,width:"90%",alignSelf:'center',aspectRatio:1.4}} source={this.state.bookingDataList[this.state.bookingScreenNumber-1].image}/>

                        <Text style={{fontSize:12,color:colors.blackAndWhite,fontFamily:Constants.fontFamilyRegular}}>{t("L:EstimatedTime")}</Text>
                        <Text style={{fontSize:17,color:colors.blackAndWhite,fontFamily:Constants.fontFamilyBold}}>{this.state.bookingDataList[this.state.bookingScreenNumber-1].time}</Text>
                        <Text style={{fontSize:17,color:colors.blackAndWhite,fontFamily:Constants.fontFamilyBold,marginTop:20,marginBottom:15}}>{t(`L:${this.state.bookingDataList[this.state.bookingScreenNumber-1].title}`)}</Text>
                        <Text style={{fontSize:12,textAlign:"center",marginHorizontal:30,color:colors.greyToWhite,fontFamily:Constants.fontFamilyRegular,marginTop:20,}}>{t(`L:${this.state.bookingDataList[this.state.bookingScreenNumber - 1].description}`)}</Text>


                    </View>

                    {this.BottomProgressBar({colors:colors})}

                </View>

        );
    }
}

export default withLanguage(BookingRequestScreen)
