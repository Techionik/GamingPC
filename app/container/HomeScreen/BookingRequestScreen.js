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
            bookingScreenNumber:4
        }
    }


    circleComponent({title, isActive, isLast,colors,}){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>

                <View style={{justifyContent:'center',width:60}}>
                {
                    isActive ?

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
                </View>
            </View>
        )
    }

    BottomProgressBar({colors}){
        return(
            <View style={{width:"80%",alignSelf:'center'}}>

                <View style={{flexDirection:'row',alignItems:'center',marginLeft:15}}>
                    {this.circleComponent({title:"Booking \n" + "Request",colors:colors,isActive:this.state.bookingScreenNumber>=1?true:false})}
                    {this.circleComponent({title:"Request \n" + "Accepted",colors:colors,isActive:this.state.bookingScreenNumber>=2?true:false})}
                    {this.circleComponent({title:"Getting \n" + "ready",colors:colors,isActive:this.state.bookingScreenNumber>=3?true:false})}
                    {this.circleComponent({title:"On the  \n" + "way",colors:colors,isActive:this.state.bookingScreenNumber>=4?true:false,})}
                    {this.circleComponent({title:"Experts \n" + "Arrived",colors:colors,isLast:true,isActive:this.state.bookingScreenNumber>=5?true:false})}


                </View>

            </View>
        )
    }


    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
                <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>
                    <HeaderComponent Location={false} title={"Your Booking"} Drawer={true} Props={this.props.value} />

                    <View style={{flex:0.9}}>

                    </View>



                    {this.BottomProgressBar({colors:colors})}

                </View>

        );
    }
}

export default withLanguage(BookingRequestScreen)
