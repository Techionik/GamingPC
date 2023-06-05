import React, {useEffect, useState} from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {ButtonComponent} from "../Components/ButtonComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import firestore from "@react-native-firebase/firestore";
import {useSelector} from "react-redux";


export const OrdersScreen = () => {
    const userInfo = useSelector(state => state?.user?.userInfo)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        setLoading(true)
        const dummy = []
        firestore()
            .collection('Orders')
            .get()
            .then(querySnapshot => {
                setLoading(false)
                querySnapshot.forEach(res => {
                    const data = res.data()
                    if(data?.Details?.UserId===userInfo?.userId){
                    dummy.push(data)}
                });
                setData(dummy)
            }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }

    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent back={false} title={"Orders"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                paddingHorizontal: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>
                <View>
                <FlatList ListEmptyComponent={
                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#000"}}>You Have No
                            Orders Yet..!</Text>
                    </View>} refreshing={loading} onRefresh={() => {
                    GetData()
                }} data={data} contentContainerStyle={{flex:1,paddingTop: 10, paddingBottom: 20}}
                          renderItem={({item, index}) =>
                              <>
                                  <OrderComponent item={item}/>
                              </>
                          }/>
                </View>


            </View>
        </View>
    )
}

export const RowComponent = ({title1, title2, color}) => {
    return (
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Text style={{
                fontSize: 14,
                fontFamily: Constants.fontFamilyRegular,
                color: "#000",
            }}>{title1}</Text>
            <View style={{flex: 1}}/>
            <Text style={{
                fontSize: 14,
                fontFamily: Constants.fontFamilyBold,
                color: color ? color : "#000",
            }}>{title2}</Text>
        </View>
    )
}

export const OrderComponent = ({item,Admin,onPress,title}) => {
    const [detail, setDetail] = useState(false)
    return (
        <View style={{marginTop: 10, backgroundColor: "#f5f5f5", borderRadius: 15}}>
            <TouchableOpacity onPress={() => {
                setDetail(!detail)
            }} style={{padding: 10, backgroundColor: "#fff", borderRadius: 15}}>
                <Text style={{
                    fontSize: 16,
                    fontFamily: Constants.fontFamilyBold,
                    color: Color.primary
                }}>Order Id: {item?.Details?.Order_Id}</Text>
                <Text style={{
                    fontSize: 14,
                    fontFamily: Constants.fontFamilyBold,
                    color: "red"
                }}>{item?.Details?.Service_Type}</Text>
                <RowComponent title1={"Date & Time"} title2={item?.Details?.Date_Time}/>
                <RowComponent title1={"Status"} title2={item?.Status} color={"red"}/>
                <RowComponent title1={"Pick Up Address"} title2={item?.Details?.Pick_Up_Address}/>
                <RowComponent title1={"Delivery Address"} title2={item?.Details?.Delivery_Address}/>
                <View style={{
                    height: 1,
                    marginVertical: 10,
                    borderBottomWidth: 1,
                    borderColor: Color.primary,
                    borderStyle: "dashed"
                }}/>
                <RowComponent title1={"Payment Type"} title2={item?.PaymentType}/>
                <RowComponent title1={"Payment Status"} title2={item?.PaymentStatus}/>
                <View style={{
                    height: 1,
                    marginVertical: 10,
                    borderBottomWidth: 1,
                    borderColor: Color.primary,
                    borderStyle: "dashed"
                }}/>
                <RowComponent title1={"Total"} title2={"PKR "+item?.Total}/>
                <RowComponent title1={"Delivery Charges"} title2={"PKR 100"}/>
                <RowComponent title1={"Total"} color={"red"} title2={"PKR "+(item?.Total + 100)}/>
            </TouchableOpacity>
            {detail && item?.Items.length > 0 &&
                <>
                    {
                item?.Items.map((Item, index) =>
                <View style={{
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10,
                    paddingHorizontal: 10,
                    borderColor: "#dfdfdf"
                }}>
                    <Text style={{
                        color: Color.primary,
                        fontSize: 14,
                        flex: 1,
                        fontFamily: Constants.fontFamilyBold
                    }}>{Item?.product}</Text>
                    <Text
                        style={{color: "#000", flex: 1, fontSize: 14, fontFamily: Constants.fontFamilyRegular}}>X</Text>
                    <Text style={{
                        color: "#000",
                        fontSize: 14,
                        fontFamily: Constants.fontFamilyBold
                    }}>{Item?.quantity}</Text>
                </View>
            )}

                    {Admin&&<ButtonComponent Style={{margin:10}} title={title} onPress={onPress}/>}
                </>
                }
        </View>
    )
}