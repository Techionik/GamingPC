import {Image, ScrollView, Text, TextInput, View} from "react-native";
import React from "react";
import {Color, Constants} from "../../common";
import {HeaderComponent} from "../Components/HeaderComponent";
import {CardField} from "../Components/CardField";
import CheckBox from "@react-native-community/checkbox";
import {ButtonComponent} from "../Components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";


export const AddCardScreen=()=>{
    const navigation=useNavigation()
    return(
        <View style={{flex:1,backgroundColor:Color.primary}}>
            <ScrollView>
            <HeaderComponent title={"Card Details"}/>
            <Image source={require('../../images/Card.png')} style={{aspectRatio:2,alignSelf:"center",marginVertical:20,height:undefined,width:"95%"}}/>
            <View style={{padding:10}}>
                <CardField placeholder={"Name On Card"}/>
                <CardField placeholder={"Account Name"}/>
                <CardField placeholder={"Cvv"}/>
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <CheckBox
                        value={true}
                        onCheckColor={Color.theme}
                    />
                    <Text style={{fontFamily:Constants.fontFamilyRegular,fontSize:16,color:"#fff"}}>Save this information for further use</Text>
                </View>
            </View>
            <View style={{flex:1}}/>
            </ScrollView>
            <ButtonComponent  title={"Confirm"} Style={{width:"50%",marginBottom:20,borderRadius:10,alignSelf:"center"}}/>
        </View>
    )
}