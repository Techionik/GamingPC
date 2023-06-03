import React, {useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from "@react-navigation/native";
import {CartFieldComponent} from "../Components/CartFieldComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {ButtonComponent} from "../Components/ButtonComponent";
import {toast} from "../../Omni";
import firestore from "@react-native-firebase/firestore";


export const AddRiderScreen = () => {
    const [FirstName,setFirstName]=useState("")
    const [LastName,setLastName]=useState("")
    const [Phone,setPhone]=useState("")
    const [Password,setPassword]=useState("")
    const [Address,setAddress]=useState("")
    const navigation=useNavigation()


    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <AntDesign name={"left"} size={30} color={"#fff"} style={{marginRight: 10}}/>
                <Text style={{
                    fontSize: 24,
                    fontFamily: Constants.fontFamilyBold,
                    color: "#fff",
                    includeFontPadding: false,
                    padding: 0,
                }}>{"Add Rider"}</Text>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>


                <CartFieldComponent FieldStyle={{color:Color.primary}} value={FirstName} onChangeText={(text)=>{setFirstName(text)}} title={"First Name"}/>
                <CartFieldComponent FieldStyle={{color:Color.primary}} value={LastName} onChangeText={(text)=>{setLastName(text)}} title={"Last Name"}/>
                <CartFieldComponent FieldStyle={{color:Color.primary}} value={Phone} onChangeText={(text)=>{setPhone(text)}} title={"Phone Number"}/>
                <CartFieldComponent FieldStyle={{color:Color.primary}} value={Address} onChangeText={(text)=>{setAddress(text)}} title={"Address"}/>
                <View style={{flex: 1}}/>
                <ButtonComponent onPress={()=>{
                    if (FirstName===""){
                        toast("Enter First Nme")
                    }else if(LastName===""){
                        toast("Enter Last Name")
                    }else if(Phone===""){
                        toast("Enter Phone Number")
                    }else if(Address===""){
                        toast("Enter Your Address")
                    }
                    else {
                        firestore()
                            .collection('Users')
                            .add({
                                First_Name: FirstName,
                                Last_Name: LastName,
                                PhoneNumber: Phone,
                                Address:Address,
                                Role:"Rider",
                            })
                            .then(() => {
                                navigation.pop()
                                toast('Rider added!');
                            });
                    }
                }} title={"Add"}/>
            </View>
        </View>
    )
}

