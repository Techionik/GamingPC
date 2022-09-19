import {Text, TouchableOpacity} from "react-native";
import {Color, Constants} from "../../common";
import ToggleButton from "react-native-toggle-element";
import React from "@types/react";


export default function SettingsComponent({toogle,onPress}){
    return(
        <TouchableOpacity onPress={onPress} style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
            <Text style={{fontSize:14,flex:1,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>Edit</Text>
            {toogle==true?
                <ToggleButton
                trackBar={{
                height:15,
                width:35,
                inActiveBackgroundColor:"#787676",
                activeBackgroundColor:Color.primary
            }}
                thumbButton={{
                height:15,
                width:15,
                inActiveBackgroundColor:"#fff",
                activeBackgroundColor:"#fff"
            }}
                value={true}
                />:
            <AntDesign name={"right"} size={15} color={colors.greyToTheme}/>
            }
        </TouchableOpacity>
    )
}
