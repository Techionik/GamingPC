import React, {useEffect, useState} from "react";
import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {ButtonComponent} from "../Components/ButtonComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import firestore from "@react-native-firebase/firestore";
import {useSelector} from "react-redux";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {OrderComponent} from "../HomeScreen/OrdersScreen";


export const OrderStatus = () => {
    const userInfo = useSelector(state => state?.user?.userInfo)
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
                    dummy.push(data)
                });
                setFilteredData(dummy);
            }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (text) => {
        setSearchText(text);

        const filteredItems = filteredData.filter((item) =>
            item.Details?.Order_Id.toLowerCase().includes(text.toLowerCase())
        );
        text!==""?
            setFilteredData(filteredItems):GetData();
    };
    return (
        <View style={{flex: 1, backgroundColor: Color.primary}}>
            <View style={{paddingHorizontal: 20, marginVertical: 40, flexDirection: "row", alignItems: "center"}}>
                <HeaderComponent back={false} title={"Orders"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                paddingTop:10,
                paddingHorizontal: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
            }}>

                <View style={{backgroundColor:"#fff",borderRadius:10,borderWidth:1,borderColor:Color.primary,padding:7,flexDirection:"row",alignItems:"center"}}>
                    <FontAwesome name={"search"} color={Color.primary} style={{paddingRight:10,borderRightWidth:1,borderColor:Color.gray}} size={20}/>
                    <TextInput style={{padding:0,marginLeft:10,flex:1,color:"#000"}} value={searchText} onChangeText={handleSearch} placeholder={"Search With Order Id"} placeholderTextColor={Color.gray} >
                    </TextInput>
                </View>
                <FlatList ListEmptyComponent={
                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#000"}}>You Have No
                            Orders Yet..!</Text>
                    </View>} refreshing={loading} onRefresh={() => {
                    GetData()
                }} data={filteredData} contentContainerStyle={{flex:1,paddingTop: 10, paddingBottom: 20}}
                          renderItem={({item, index}) =>
                              <>
                                  <OrderComponent item={item}/>
                              </>
                          }/>
            </View>
        </View>
    )
}
