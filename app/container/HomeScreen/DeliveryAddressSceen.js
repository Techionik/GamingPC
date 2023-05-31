import React, {useEffect, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Color, Constants} from "../../common";
import {ButtonComponent} from "../Components/ButtonComponent";
import {useNavigation} from "@react-navigation/native";
import {HeaderComponent} from "../Components/HeaderComponent";
import {useSelector} from "react-redux";
import {toast} from "../../Omni";
import DateTimePicker from "react-native-modal-datetime-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import {currentAddress} from "../../redux/user/actions";


export const DeliveryAddressSceen=(props)=>{
    const navigation=useNavigation()
    const  bill= props?.route?.params?.bill
    const  CurrentAddress= useSelector(state => state?.user?.currentAddress)
    const  DeliveryAddress= useSelector(state => state?.user?.deliveryAddress)
    const [deliveryDate,setDeliveryDate]=useState("")
    const [OpenDate,setOpenDate]=useState(false)


    const showDatePicker = () => {
        setOpenDate(true);
    };

    const hideDatePicker = () => {
        setOpenDate(false);
    };

    const handleConfirm = (date) => {
        setDeliveryDate(moment(date).format("DD-MMM-YYYY"))
        hideDatePicker();
    };


    return(
        <View style={{flex:1,backgroundColor:Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent  title={"Delivery Information"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                padding: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>


                <TouchableOpacity onPress={showDatePicker} style={{padding:10,marginBottom:10,backgroundColor:"#fff",borderRadius:15}}>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:16,flex:1,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Delivery Date</Text>
                        <DateTimePickerModal
                            isVisible={OpenDate}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={{fontSize:14,fontFamily:Constants.fontFamilyRegular,color:"#000",width:"60%"}}>{deliveryDate?deliveryDate:"Click For Add Delivery Date.."}</Text>
                    </View>
                </TouchableOpacity>
                <AddressComponent title={CurrentAddress?CurrentAddress:"Enter Your Pick Up Address.."} navigation={()=>{navigation.navigate("LocationEditScreen",{From:"Current"})}}/>
                <AddressComponent title={DeliveryAddress?DeliveryAddress:"Enter Your Pick Up Address.."} navigation={()=>{navigation.navigate("LocationEditScreen",{From:"Delivery"})}}/>

                <View style={{flex:1}}/>
                <ButtonComponent title={"Add To Cart"} onPress={()=>{
                    if(DeliveryAddress===""||DeliveryAddress==="undefined"){
                        toast("Enter Delivery Address")
                    }else if (CurrentAddress===""||CurrentAddress==="undefined"){
                        toast("Enter Pick Up Address")
                    }else if(deliveryDate===""){
                        toast("Enter Delivery Date")
                    } else {
                        navigation.navigate("AddToCartScreen",{bill:bill,DeliveryTime:deliveryDate})
                    }
                }}/>
            </View>
        </View>
    )
}


const AddressComponent=({navigation,title})=>{
    return(

        <View style={{padding:10,marginTop:10,backgroundColor:"#fff",borderRadius:15}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:16,flex:1,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>Delivery Address</Text>
                <AntDesign  name={"check"} color={"#fff"} style={{padding:5,backgroundColor:"#5DBB9B",borderRadius:30}}/>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:14,fontFamily:Constants.fontFamilyRegular,color:"#000",width:"60%"}}>{title}</Text>
                <View style={{flex:1}}/>
                <AntDesign onPress={navigation} name={"edit"} color={title===""?"red":"#5DBB9B"} size={18}/>
            </View>
        </View>

    )
}