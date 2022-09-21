import {ImageBackground, StatusBar, View} from "react-native";
import HeaderComponent from "./HeaderComponent";
import React from "react";
import {Color} from "../../common";


export default function HeaderWihBackground({title,Props,children}){
    return(
        <View>
            <StatusBar backgroundColor={Color.primary} barStyle={'light-content'}/>
        <ImageBackground source={require('../../images/backgroundImagetheme.png')}
                         style={{height: undefined, width: "100%", aspectRatio: 2.18023,top:-24,paddingTop:24}}>
            <HeaderComponent back={true} titleStyle={{color: "#fff"}} title={title} Drawer={true}
                             Location={false} Props={Props}/>
            {children}
        </ImageBackground>
        </View>
    )
}
