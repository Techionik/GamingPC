import React, {createRef, useEffect, useState} from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";
import {ButtonComponent} from "../Components/ButtonComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import firestore from "@react-native-firebase/firestore";
import {useSelector} from "react-redux";
import {Modalize} from "react-native-modalize";
import {CartFieldComponent} from "../Components/CartFieldComponent";
import {toast} from "../../Omni";
import {useNavigation} from "@react-navigation/native";


export const AddServicesScreen = (props) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [Title, setTitle] = useState("")
    const [Price, setPrice] = useState("")
    const [Edit, setEdit] = useState(false)
    const [item, setItem] = useState(false)
    const navigation=useNavigation()
    const modelRef=createRef()
    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        setLoading(true)
        const dummy = []
        firestore()
            .collection('Services')
            .get()
            .then(querySnapshot => {
                setLoading(false)
                querySnapshot.forEach(res => {
                    const data = res.data()
                    dummy.push({...data,ServiceID:res?.id})
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
                <HeaderComponent back={true} title={"Services"}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "#dfdfdf",
                paddingHorizontal: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingBottom: 20,
            }}>
                <FlatList ListEmptyComponent={
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Text style={{fontSize: 14, fontFamily: Constants.fontFamilyRegular, color: "#000"}}>This User
                            Have No
                            Orders Yet..!</Text>
                    </View>} refreshing={loading} onRefresh={() => {
                    GetData()
                }} data={data} contentContainerStyle={{flex: 1, paddingTop: 10, paddingBottom: 20}}
                          renderItem={({item, index}) =>
                              <TouchableOpacity onPress={()=>{
                                  setEdit(true)
                                  setItem(item)
                                  setTitle(item?.title)
                                  setPrice(item?.Price)
                                  modelRef.current.open()

                              }} style={{
                                  flexDirection: "row",
                                  backgroundColor: "#fff",
                                  borderRadius: 10,
                                  elevation: 2,
                                  alignItems: "center",
                                  marginTop: 10,
                                  padding: 10
                              }}>
                                  <Image
                                      source={item.title === "Shirt" ? require('../../images/shirt.png') : item.title === "Shalwar Kameez" ? require('../../images/kurta.png') : item.title === "Bottom" ? require('../../images/jeans.png') : item.title === "Suite" ? require('../../images/blazer.png') : require('../../images/Others.png')}
                                      style={{aspectRatio: 1, width: "10%", height: undefined}}
                                  />
                                  <Text style={{
                                      fontSize: 14,
                                      flex: 1,
                                      marginLeft: 20,
                                      fontFamily: Constants.fontFamilyBold,
                                      color: Color.primary
                                  }}>{item?.title}</Text>
                                  <Text style={{
                                      fontSize: 14,
                                      marginLeft: 20,
                                      fontFamily: Constants.fontFamilyBold,
                                      color: "red"
                                  }}>{item?.Price} PKR</Text>
                              </TouchableOpacity>
                          }/>


                <Modalize
                    handleStyle={{height: 0}}
                    closeOnOverlayTap={true}
                    modalStyle={{backgroundColor: "rgba(0,0,0,0)"}}
                    rootStyle={{backgroundColor: "rgba(0,0,0,0)"}}

                    overlayStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                    }}
                    panGestureComponentEnabled adjustToContentHeight={true}
                    ref={modelRef}>

                    <View style={{
                        flex: 1,
                        backgroundColor: "#dfdfdf",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}>
                        <View style={{paddingHorizontal: 15, paddingTop: 15}}>
                            <View style={{
                                width: 50,
                                height: 4,
                                alignSelf: "center",
                                borderRadius: 10,
                                backgroundColor: "#000",
                            }}></View>
                            <TouchableOpacity onPress={() => {
                                modelRef.current.close();
                            }} style={{
                                backgroundColor: Color?.primary,
                                alignSelf: "flex-end",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 40,
                                width: 40,
                                borderRadius: 40,
                            }}>
                                <AntDesign name={"close"} size={30} color={"#fff"}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingHorizontal:20}}>
                            <CartFieldComponent title={"Title Of Service"} value={Title} onChangeText={(text)=>{setTitle(text)}} />
                            <CartFieldComponent  title={"Price You Offer"} value={Price} onChangeText={(text)=>{setPrice(text)}} />

                        </View>
                        <ButtonComponent Style={{margin:20}} onPress={()=>{
                            if (Title===""){
                                toast("Enter Title")
                            }else if(Price===""){
                                toast("Enter Price")
                            }
                            else {

                                {Edit===true?
                                    firestore()
                                        .collection('Services')
                                        .doc(item?.ServiceID)
                                        .update({
                                            title: Title,
                                            Price: Price,
                                        })
                                        .then(() => {
                                            modelRef.current.close()
                                            GetData()
                                            toast('Service Added');

                                        })

                                    :
                                    firestore()
                                        .collection('Services')
                                        .add({
                                            title: Title,
                                            Price: Price,
                                        })
                                        .then(() => {
                                            modelRef.current.close()
                                            GetData()
                                            toast('Service Added');

                                        });
                                }
                            }
                        }} title={Edit===true?"Update":"Add Service"}/>
                    </View>
                </Modalize>
                <ButtonComponent onPress={()=>{modelRef.current.open()}} title={"Add Service"}/>
            </View>
        </View>
    )
}
