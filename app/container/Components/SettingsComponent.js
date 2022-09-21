import React from "react"
import {Text, TouchableOpacity} from "react-native";
import {Color, Constants} from "../../common";
import ToggleButton from "react-native-toggle-element";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function SettingsComponent({toogle,onTogglePress,leftTitle,rightTitle,onPress,style,titleStyle,activeStyle,trackBar,colors,title,value}){
    return(
        <TouchableOpacity onPress={onPress} style={[{flexDirection:"row",alignItems:"center",marginVertical:5},style]}>
            <Text style={[{fontSize:14,flex:1,includeFontPadding:false,padding:0,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite},titleStyle]}>{title}</Text>
            {toogle==true?
                <ToggleButton

                    onPress={onTogglePress}
                trackBar={trackBar??{
                height:15,
                width:35,
                inActiveBackgroundColor:"#787676",
                activeBackgroundColor:Color.primary
            }}
                leftComponent={leftTitle??null}
                rightComponent={rightTitle??null}
                thumbButton={activeStyle??{
                height:15,
                width:15,
                inActiveBackgroundColor:"#fff",
                activeBackgroundColor:"#fff"
            }}

                value={value}
                />:
            <AntDesign name={"right"} size={15} color={colors.greyToTheme}/>
            }
        </TouchableOpacity>
    )
}
