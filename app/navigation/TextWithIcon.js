import React from 'react';
import {Text, TextInput, TouchableOpacity, View,} from 'react-native';
import Constants from "../common/Constants";


export default  function TextWithIcon({onPress,title,children,exterViewStyle,exterTextStyle})  {
    return (

        <TouchableOpacity onPress={onPress}  style={[{flexDirection:"row",alignItems:"center",marginTop:25,},exterViewStyle]}>
            {children}
            <Text style={{ fontSize: 16 ,
                paddingLeft:10,
                includeFontPadding: false,
                fontFamily: Constants.fontFamilyBold,
                color: '#fff'}}>{title}</Text>

        </TouchableOpacity>
    );

}
