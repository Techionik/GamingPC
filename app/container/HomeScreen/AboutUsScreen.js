import React from 'react'
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native'
import withLanguage from "../../config/withLanguage";
import {Color, Constants} from "../../common";
import HeaderComponent from "../Components/HeaderComponent";
import CheckBoxComponent from "../Components/CheckBoxComponent";


class AboutUsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
        }
    }


    render() {
        const {t, language, themeColor} = this.props.value
        const {colors,key} = themeColor
        return (
            <ScrollView contentContainerStyle={{flex:1}} style={{flex: 1, backgroundColor: colors.screenBackgroundColor}}>
                <View style={{
                    flex: 0.3,
                    backgroundColor: Color.primary,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30
                }}>
                    <HeaderComponent title={"About Us"} Props={this.props.value}/>
                </View>
                <View style={{
                    flex:1,
                    zIndex: 2,
                    backgroundColor: colors.ScreenColorToDark,
                    paddingHorizontal: 20,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingTop: 20,
                    top: -40,
                }}>

                    <View style={{
                        paddingTop: 30,
                        borderRadius: 15,
                        paddingHorizontal: 15,
                        paddingBottom:10,
                        backgroundColor: colors.fieldBackgroundColor,
                    }}>
                        <Image style={{
                            height: undefined,
                            width: "100%",
                            marginVertical:10,
                            aspectRatio: 6.28,
                            alignSelf: 'center',
                        }} source={key==="light"?require('../../images/LoginLogo.png'):require('../../images/DarkLogo.png')}/>
                        <Text style={{color:colors.whiteToDark,fontSize:12,fontFamily:Constants.fontFamilyRegular}}>{"Welcome to Techionik, the ultimate hub for state-of-the-art technological solutions.With an unwavering commitment to ingenuity, we strive to furnish our clients with the most recent breakthroughs in the realm of technology. From cutting-edge devices to intelligent software applications, we present a diverse array of products precisely tailored to cater to your technological requirements.\n\nOur team of proficient specialists is wholly dedicated to delivering unparalleled quality and unparalleled customer support, ensuring your continuous advancement in this swiftly evolving digital sphere.Embark on this exhilarating venture as we delve into the boundless prospects of technology, empowering you to flourish in the digital era.\n\nEmbrace the future with Techionik today!"}</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

export default withLanguage(AboutUsScreen)

