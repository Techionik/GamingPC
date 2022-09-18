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
import MyBookingsComponent from "../Components/MyBookingsComponent";



class MyBookingScreens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookingList:[
                {
                    image:require("../../images/slonImage.png"),
                    title:"The big Tease Saloon",
                    status:"Upcoming",
                    date:"Monday 19th August,2022",
                    startTime:"11:30 am",
                    endTime:"12:00 pm",
                    diffTime:"60 min ",
                    taskList:[
                        {
                            image:require("../../images/nailPolishImage.png"),
                            title:"Nail Polish Art",
                            rate:"34",
                        },
                        {
                            image:require("../../images/spaImage.png"),
                            title:"Special Spa Day",
                            rate:"224",
                        }
                    ]
                },
                {
                    image:require("../../images/slonImage.png"),
                    title:"The big Tease Saloon",
                    status:"Upcoming",
                    date:"Monday 19th August,2022",
                    startTime:"11:30 am",
                    endTime:"12:00 pm",
                    diffTime:"60 min ",
                    taskList:[
                        {
                            image:require("../../images/spaImage.png"),
                            title:"Special Spa Day",
                            rate:"224",
                        }
                    ]
                },
                {
                    image:require("../../images/slonImage.png"),
                    title:"The big Tease Saloon",
                    status:"Upcoming",
                    date:"Monday 19th August,2022",
                    startTime:"11:30 am",
                    endTime:"12:00 pm",
                    diffTime:"60 min ",
                    taskList:[
                        {
                            image:require("../../images/nailPolishImage.png"),
                            title:"Nail Polish Art",
                            rate:"34",
                        },

                    ]
                }
            ]
        }
    }

    render() {
        const {t, language} = this.props.value
        return (
            <View style={{flex: 1,backgroundColor:"#ffff"}}>
                <HeaderComponent Location={false} title={"My Bookings"} Drawer={true} Props={this.props.value} />


                <FlatList data={this.state.bookingList}  renderItem={({item, index}) =>
                    <MyBookingsComponent title={item.title} image={item.image}
                     />
                }/>


            </View>

        );
    }
}

export default withLanguage(MyBookingScreens)
