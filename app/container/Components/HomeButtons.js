import {Text, View} from "react-native";
import SocialButton from "./SocialButton";
import {Color, Constants} from "../../common";
import React from "react";


export default function HomeButtons({title,onPress,IconStyle,Icon,Style,colors}){
    return(
        <View>
            <SocialButton onPress={onPress} IconStyle={IconStyle} Icon={Icon}  Style={[{borderColor:Color.primary,borderWidth:1,height:50,width:50},Style]}/>
            <Text style={{fontSize:9,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite,alignSelf:"center",marginTop:5}}>{title}</Text>
        </View>
    )

}
