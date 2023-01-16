import React, {useEffect} from 'react';
import {BackHandler, I18nManager, Linking, SafeAreaView, StatusBar, View} from 'react-native';
import {Config, Device, Styles} from './common';
import Color, {darkTheme, lightTheme} from "./common/Color";
import {useTranslation} from "react-i18next";
import LanguageProvider from "./config/LanguageProvider";
import MyNetInfoContainer from "./container/MyNetInfoContainer";
import MyNotificationContainer from "./container/MyNotificationContainer";
import MyToast from "./container/MyToastContainer";
import Navigation from "./navigation/AppNavigator"
import { useDispatch, useSelector } from "react-redux";
import './config-i18n'
import {changeLanguage, changeTheme} from "./redux/app/actions";

const Router = (props) => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user.userInfo);
    const {languagee, theme,rtl} = useSelector(state => state.app)
    I18nManager.forceRTL(rtl)

    useEffect(()=>{
        dispatch(changeTheme("dark "))
    },[])





    useEffect(() => {
        i18n.changeLanguage(languagee)
    }, [languagee])

    const {t, i18n} = useTranslation();
    const themeColor = theme === 'light' ? lightTheme : darkTheme
    const barStyle = theme === 'light' ? Color.primary : '#121212'
    let languageObj;
    if (i18n.language !== languagee) {
        languageObj = {language:languagee, t, i18n, themeColor}
    } else {
        languageObj = Object.assign({}, {language:languagee, t, i18n, themeColor})
    }


    return (

        <View style={Styles.Common.appContainer}>
            <StatusBar backgroundColor={barStyle} barStyle={theme === 'light'?"dark-content":'light-content'}/>
            <SafeAreaView style={{flex:1,backgroundColor:theme === 'light'?"white":'#263238'}}>
            <LanguageProvider value={{...languageObj}}>
                <Navigation/>
                <MyNotificationContainer/>
                <MyToast/>
            </LanguageProvider>
            </SafeAreaView>
        </View>

    );
    // }
};

export default Router;





