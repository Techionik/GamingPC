import { Dimensions, View } from "react-native";
import {SliderBox} from "react-native-image-slider-box";
import React, { useEffect, useState } from "react";
const windowWidth = Dimensions.get('window').width;
export default function ImageSliderComponent({onLayout,data})
{
    const [imagesData,setImagesData]=useState([require('../../images/Washing.jpeg'),require('../../images/Ironing.jpeg'),require('../../images/Drying.jpeg')])
    return(
        <View style={{flex:1}}>
            <SliderBox
                images={imagesData}
                sliderBoxHeight={140}
                ImageComponentStyle={{borderRadius:20,}}
                // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#D9D9D9"
                dotContainerStyle={{marginHorizontal:3}}
                dotStyle={{width: 10,height: 10,borderRadius: 5,marginHorizontal: 0,padding: 0,margin: 0}}
                paginationBoxStyle={{alignSelf:'flex-end',paddingHorizontal:10}}
                inactiveDotColor="#D9D9D9"
                parentWidth={windowWidth-20}
                paginationBoxVerticalPadding={0}
                autoplay={true}
                circleLoop
            />
        </View>
    )
}
