import {Image, Text, TouchableOpacity, View} from "react-native";
import {Color, Constants} from "../../common";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";

import AntDesign from "react-native-vector-icons/AntDesign";
import ToggleSwitch from "toggle-switch-react-native";


export default function HeaderComponent({Props, Toogle, title,onPress, style}) {

    const navigation = useNavigation()
    const {t, language, themeColor} = Props
    const {colors} = themeColor
    const [toggle, setToggle] = useState(false)
    return (
        <View>
        <View style={[{flexDirection: "row", marginHorizontal: 20, alignItems: "center", marginTop: 10,}, style]}>
            {Toogle == true ?
            <View style={{alignSelf: "flex-start",}}>

                    <>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff",
                        includeFontPadding: false,
                        padding: 0

                    }}>{t("L:WelcomeBack")}</Text>
                    <Text style={{
                        fontSize: 18,
                        includeFontPadding: false,
                        padding: 0,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff"
                    }}>Hi Galeria !</Text>
                    </>

            </View>
                :
                <AntDesign onPress={()=>{navigation.pop()}} name={language=='en'?"arrowleft":'arrowright'}  color={"#fff"} size={50}/>

            }
            <View style={{flex: 1}}/>

            {Toogle == true ?
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <ToggleSwitch
                        isOn={toggle}
                        onColor="#fff"
                        offColor="#fff"
                        thumbOnStyle={{backgroundColor: "#5EF364"}}
                        thumbOffStyle={{backgroundColor: "#5EF364"}}
                        size="medium"
                        onToggle={() => {
                            setToggle(!toggle)
                        }}

                    />
                    <Text style={{
                        fontSize: 12,
                        fontFamily: Constants.fontFamilyBold,
                        color: "#fff"
                    }}>{toggle ? t("L:Open") : t("L:close")}</Text>
                </View> :
                <Image source={require('../../images/ProfileImage.png')}
                       style={{height: 60, alignSelf: "center",borderWidth:2,borderColor:"#fff", width: 60, borderRadius: 30}}/>
            }
        </View>
            <Text style={{fontSize:20,fontFamily:Constants.fontFamilyBold,color:"#fff",margin:30}}>{title}</Text>
        </View>
    )
}
