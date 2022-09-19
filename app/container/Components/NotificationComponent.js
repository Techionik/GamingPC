import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React from "react";


export default function NotificationComponent({Style,name,notification,time,isPaid,titleStyle,onPress,colors}) {
    return (
       <TouchableOpacity style={{marginTop:18}}>

           <View style={{flexDirection:'row',alignItems:'flex-start'}}>

           <View style={{height:45,width:45,borderRadius:45,backgroundColor:Color.primary}}></View>

               <View style={{flex:1,marginLeft:10,}}>
               <Text style={{fontSize:13,fontFamily:Constants.fontFamilyBold,color:colors.blackAndWhite,flex:1,marginRight:5,}}>The {name}-
                  <Text style={{fontSize:13,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite,marginLeft:3}}>{notification}</Text>
                  </Text>
                   <Text style={{fontSize:13,fontFamily:Constants.fontFamilyRegular,color:colors.blackAndWhite,}}>{time}</Text>

               </View>
               {isPaid?
               <Text style={{fontSize:13,fontFamily:Constants.fontFamilyRegular,color:"#fff",padding:6,includeFontPadding:false,paddingHorizontal:13,backgroundColor:Color.primary,borderRadius:10,alignSelf:'center'}}>PAID</Text>
                   :null}

           </View>

           <View style={{height:1,width:'84%',alignSelf:'flex-end',backgroundColor:colors.lightgreyToWhite,marginVertical:2}}></View>

       </TouchableOpacity>
    )
}
