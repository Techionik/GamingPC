import React, {useState} from "react"
import {Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function CheckBoxComponent({title,colors,style}){
    const [check,setCheck]=useState(false)
    return(
        <View style={[{flexDirection:"row",alignItems:"center",marginBottom:5},style]}>
            <TouchableOpacity onPress={()=>{setCheck(!check)}} style={{alignItems:"center",justifyContent:"center",borderWidth:check?null:1.5,height:16,width:16,alignSelf:"center",borderColor:colors.greenBorder}}>
                <View style={{alignItems:"center",justifyContent:"center",backgroundColor:check?Color.primary:null,height:16,width:16,}}>
                    {check&&<MaterialIcons name={"check"} color={"#fff"} size={12}/>}
                </View>
            </TouchableOpacity>
            <Text style={{marginLeft:10,fontSize:12,fontFamily:Constants.fontFamilyMedium,color:colors.blackAndWhite}}>{title}</Text>
        </View>
    )
}
