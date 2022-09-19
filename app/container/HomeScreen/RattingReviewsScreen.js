import React from 'react'
import {
    FlatList,
    Image,
    ImageBackground, ScrollView, Text, TextInput, TouchableOpacity,
    View

} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import ReviewRatingComponent from "../Components/ReviewRatingComponent";
import StarRating from 'react-native-star-rating';
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonComponent from "../Components/ButtonComponent";


class RattingReviewsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            image:require("../../images/ratingandReviewImage.png"),
                title:"Men Hair & Spa",
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
        ],
            starCount: 3.5
        }
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    render() {
        const {t, language,themeColor} = this.props.value
        const {colors}=themeColor
        return (
                <View style={{flex: 1,backgroundColor:colors.screenBackgroundColor}}>

                    <HeaderComponent Location={false} title={"Rating & Review"} Drawer={true} Props={this.props.value} />
                   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow:1,marginHorizontal:15,}}>
                    <ReviewRatingComponent title={this.state.title} image={this.state.image} colors={colors} taskArray={this.state.taskList} date={this.state.date} diffTime={this.state.diffTime} endTime={this.state.endTime} startTime={this.state.startTime} />
                    <Text style={{fontSize:16,marginVertical:20,marginHorizontal:10,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite,}}>Give Stars to Rate</Text>
                       <StarRating containerStyle={{marginHorizontal:60,marginVertical:10}}  starSize={35}
                           fullStarColor={Color.starColor}
                           disabled={false}
                           maxStars={5}
                           rating={this.state.starCount}
                           selectedStar={(rating) => this.onStarRatingPress(rating)}
                       />
                       <Text style={{fontSize:16,marginVertical:20,marginHorizontal:10,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite,}}>Additional Comment</Text>
                       <TextInput multiline={true} numberOfLines={7} placeholder={"Add your Comment"} placeholderTextColor={colors.greyToWhite} style={{textAlignVertical:'top',paddingLeft:10,fontFamily:Constants.fontFamilyRegular,borderWidth:2,borderColor:Color.borderGreyColor,borderRadius:6}}/>

                       <ButtonComponent title={"Submit"}/>
                   </ScrollView>


                </View>




        );
    }
}

export default withLanguage(RattingReviewsScreen)
