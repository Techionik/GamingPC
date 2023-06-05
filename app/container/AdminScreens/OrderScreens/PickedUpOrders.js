import React, {useEffect, useState} from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../../common";
import {HeaderComponent} from "../../Components/HeaderComponent";
import firestore from "@react-native-firebase/firestore";
import {useSelector} from "react-redux";
import {OrderComponent} from "../../HomeScreen/OrdersScreen";
import {toast} from "../../../Omni";
import {useNavigation} from "@react-navigation/native";


export const PickedUpOrders = (props) => {
    const userInfo = useSelector(state => state?.user?.userInfo)
    const service = useSelector(state => state?.user?.ServiceType)
    const navigation=useNavigation()
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
                    if(data?.Status==="Picked Up"&&data?.Details?.Service_Type===service){
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
                <HeaderComponent back={false} title={"Picked Up Orders"}/>
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
                           Pending Orders Yet..!</Text>
                    </View>} refreshing={loading} onRefresh={() => {
                    GetData()
                }} data={data} contentContainerStyle={{flex:1,paddingTop: 10, paddingBottom: 20}}
                          renderItem={({item, index}) =>
                              <>
                                  <OrderComponent onPress={()=>{
                                      firestore()
                                          .collection('Orders')
                                          .doc(item?.Details?.Order_Id)
                                          .update({Status:"In Processing"})
                                          .then(() => {
                                              navigation.navigate("ActiveOrders")
                                              toast('Order In Processing');
                                          });
                                  }} title={"Processing"} Admin={true} item={item}/>
                              </>
                          }/>
                </View>


            </View>
        </View>
    )
}

