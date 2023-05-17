import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import email from 'react-native-email'


export default function LeaveComponent({Style, item, colors}) {
    const navigation = useNavigation()
    const handleEmail = () => {
        const to = "mubasharmasood30@gmail.com" // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['mudassirmasood0805@gmail.com'], // string or array of email addresses
            // bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Pay Role',
            body: 'Some body right here',
            checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        }).catch(console.error)
    }
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("ViewCurrentLeave", {data: item})
        }} style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 12,
            backgroundColor: colors.fieldBackgroundColor,
            elevation: 2,
            margin: 8,
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
                            color: colors.fieldTextColor
                        }}>{item?.Full_Name}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyBold,
                            color: "#fff",
                            paddingHorizontal:10,
                            borderRadius:7,
                            backgroundColor:item?.Statuss === "Accept" ? "green": item?.Statuss === "Pending"?"orange": "red"
                        }}>{item?.Statuss}</Text>
                    </View>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.fieldTextColor
                    }}>{item.Designation}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.fieldTextColor
                    }}>{item?.Start_Date}<Text
                        style={{color: "red", fontSize: 16, fontWeight: "bold"}}> To </Text>{item.Ending_Date}</Text>
                </View>
            </View>
            <View>
            </View>
        </TouchableOpacity>
    )
}
