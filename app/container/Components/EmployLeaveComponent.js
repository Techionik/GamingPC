import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import email from 'react-native-email'


export default function EmployLeaveComponent({Style, item, colors}) {
    const [showNotes,setShowNotes]=useState(false)
    return (
        <TouchableOpacity onPress={()=>{setShowNotes(!showNotes)}} style={{  margin: 8,borderRadius:10,backgroundColor:colors.fieldBackgroundColor}}>
        <View   style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 12,
            backgroundColor: colors.fieldBackgroundColor,
            elevation: 2,

            borderRadius: 10
        }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={{height: 60, width: 60, borderRadius: 60}} resizeMode={"contain"}
                       source={require('../../images/ProfileImage.png')}/>
                <View style={{marginLeft: 10, flex: 1}}>
                    <View style={{ flexDirection: "row", alignItems: "center"}}>
                        <Text style={{
                            fontSize: 16,
                            flex: 1,
                            fontFamily: Constants.fontFamilyRegular,
                            color: colors.blackAndWhite
                        }}>{item?.Full_Name}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyBold,
                            color: item?.Statuss === "Accept" ? colors.blackAndWhite : "red"
                        }}>{item?.Statuss}</Text>
                    </View>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.blackAndWhite
                    }}>{item.Designation}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.blackAndWhite
                    }}>{item.Start_Date}<Text
                        style={{color: "red", fontSize: 16, fontWeight: "bold"}}> To </Text>{item.Ending_Date}</Text>
                </View>
            </View>
            <View>
                <Text>{item.Number_of_Leaves}</Text>
            </View>
        </View>
            {item.Notes!==""&&showNotes&&<Text style={{
                fontFamily: Constants.fontFamilyRegular,
                includeFontPadding: false,
                padding: 0,
                margin: 5
            }}>{item.Notes}</Text>}
        </TouchableOpacity>
    )
}
