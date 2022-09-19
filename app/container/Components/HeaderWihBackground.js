import {ImageBackground} from "react-native";
import HeaderComponent from "./HeaderComponent";
import React from "react";


export default function HeaderWihBackground({title,Props,children}){
    return(
        <ImageBackground source={require('../../images/BackgroundRound.png')}
                         style={{height: undefined, width: "100%", aspectRatio: 2}}>
            <HeaderComponent back={true} titleStyle={{color: "#fff"}} title={title} Drawer={true}
                             Location={false} Props={Props}/>
            {children}
        </ImageBackground>
    )
}
