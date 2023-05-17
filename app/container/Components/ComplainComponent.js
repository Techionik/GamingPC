import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import email from 'react-native-email'


export default function ComplainComponent({Style,onPress,disabled, item, colors}) {
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
        <TouchableOpacity disabled={disabled?disabled:false} onPress={onPress?onPress:() => {
            navigation.navigate("ViewCurrentComplain", {data: item})
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
                        {item.Statuss&&<Text style={{
                            fontSize: 12,
                            fontFamily: Constants.fontFamilyBold,
                            color: "#fff",
                            paddingHorizontal:10,
                            borderRadius:7,
                            backgroundColor:item?.Statuss === "Accept" ? "green": item?.Statuss === "Pending"?"orange": "red"
                        }}>{item?.Statuss}</Text>}
                    </View>
                    {item.Designation&&<Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyRegular,
                        color: colors.fieldTextColor
                    }}>{item.Designation}</Text>}
                    <Text numberOfLines={1} style={{color: "#000", fontSize: 16,marginRight:20, fontWeight: "bold"}}>{item.Email}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}
