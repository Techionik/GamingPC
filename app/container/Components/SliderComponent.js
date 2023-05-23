import {Dimensions, View} from "react-native";
import {SliderBox} from "react-native-image-slider-box";
import React, {useEffect, useState} from "react";

const windowWidth = Dimensions.get('window').width;

export default function SliderComponent({onLayout}) {
    const [imagesData, setImagesData] = useState([require('../../images/img1.jpg'), require('../../images/img2.jpg'),require('../../images/img3.jpg'),require('../../images/img4.jpg'),require('../../images/img5.jpg'),require('../../images/img6.jpg'),require('../../images/img7.jpg')])
    return (
        <View style={{flex: 1}}>
            <SliderBox
                images={imagesData}
                sliderBoxHeight={"100%"}

                ImageComponentStyle={{}}
                // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#D9D9D9"
                dotContainerStyle={{marginHorizontal: 3}}
                dotStyle={{width: 10, height: 10, borderRadius: 5, marginHorizontal: 0, padding: 0, margin: 0}}
                paginationBoxStyle={{alignSelf: 'center',}}
                inactiveDotColor="#D9D9D9"
                paginationBoxVerticalPadding={0}
                autoplay={true}
                circleLoop
            />
        </View>
    )
}
