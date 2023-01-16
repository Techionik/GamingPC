import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import email from 'react-native-email'


export default function PayRoleComponent({Style, image,name,jobTitle,time,status,colors}) {
    const navigation=useNavigation()
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
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:15,paddingVertical:12,backgroundColor:colors.fieldBackgroundColor,elevation:2,margin:8,borderRadius:10}}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image style={{height:60,width:60,borderRadius:60}} resizeMode={"contain"} source={require('../../images/ProfileImage.png')} />
            <View style={{marginLeft:10}}>
            <Text style={{fontSize:16,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>name</Text>
            <Text style={{fontSize:12,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite}}>jobTitle</Text>
             </View>
           </View>
            <View>
                <Text onPress={()=>{handleEmail()}} style={{fontFamily:Constants.fontFamilySemiBold,fontSize:11,textAlign:'center',includeFontPadding:false,padding:0,color:"#fff",borderRadius:5,paddingHorizontal:12,paddingVertical:6,backgroundColor:status=="send"?colors.DarkToLight:"#40E0D0",marginTop:4}}>Send Pay</Text>
            </View>
        </View>
    )
}
