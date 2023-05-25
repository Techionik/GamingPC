import React from "react";
import {FlatList, Image, Text, View} from "react-native";
import {Color, Constants} from "../../common";
import AntDesign from "react-native-vector-icons/AntDesign";


export const CartScreen = () => {
    return (
        <View style={{flex: 1, backgroundColor: "#C5E6FF"}}>
            <View
                style={{padding: 30, flexDirection: "row", alignItems: "center", backgroundColor: Color.Lightprimary}}>
                <AntDesign name={"arrowleft"} size={40} color={"#fff"}/>
                <Text style={{
                    fontSize: 24,
                    color: "#fff",
                    marginLeft: 10,
                    fontFamily: Constants.fontFamilyBold,
                    includeFontPadding: false,
                    padding: 0
                }}>My Cart</Text>
            </View>
            <ListComponent data={[{},{}]}/>

        </View>
    )
}

const ListComponent=({data})=>{
    return(
        <FlatList data={data} style={{flex: 1, padding: 10}} renderItem={({item, index}) =>
            <View style={{
                padding: 15,
                marginTop:10,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: Color.primary,
                borderRadius: 10
            }}>
                <View style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff"
                }}>
                    <Image source={require('../../images/shirt.png')}
                           style={{height: undefined, width: "70%", aspectRatio: 1}}/>
                </View>
                <View style={{marginLeft:15,flex:1}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:20,fontFamily:Constants.fontFamilyBold,color:"#fff"}}>Shirt</Text>
                        <Text style={{fontSize:20,fontFamily:Constants.fontFamilyRegular,color:"#fff"}}>PKR 100</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                        <View style={{flex:1}}/>
                        <Text style={{padding:2,borderRadius:5,paddingHorizontal:10,backgroundColor:"#fff",includeFontPadding:false,fontSize:18,fontFamily:Constants.fontFamilyBold,color:Color.primary}}>1</Text>
                        <Text style={{padding:2,marginLeft:10,borderRadius:5,paddingHorizontal:10,backgroundColor:"orange",includeFontPadding:false,fontSize:18,fontFamily:Constants.fontFamilyBold,color:"#fff"}}>Processing</Text>
                    </View>
                </View>
            </View>
        }/>
    )
}