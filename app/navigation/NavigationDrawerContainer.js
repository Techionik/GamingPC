'use strict';

import React, {Component} from 'react';
import {
    Dimensions,
    Modal,
    Platform,
    SafeAreaView,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import {connect} from "react-redux";

import Constants from "../common/Constants";
import Color from "../common/Color";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TextWithIcon from "./TextWithIcon";
import drawer from "./drawer_ref";
import I18n from "react-native-i18n";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RNRestart from "react-native-restart";
import {logout} from "../redux/user/operations";
import withLanguage from "../config/withLanguage";


var Screenwidth = Dimensions.get('window').width; //full width
var Screenheight = Dimensions.get('window').height;
const mapStateToProps = ({user, app}) => ({
    app,
    user
});

@connect(
    mapStateToProps,
    {logout}
)

class NavigationDrawerContainer extends Component<Props> {

    constructor(props) {
        super(props);


        this.state = {



            loading: false,
            modalvisible:false,
            shareModal:false,
            rateModal:false,


        };

    }



    render() {
        const {navigation,value}=this.props;
        const {t, language}=value;
        return (

<SafeAreaView style={{flex:1,backgroundColor:Color.primary}}>




                <View style={{flex:1,backgroundColor:Color.primary}}>







                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.rateModal}
                        onRequestClose={() => {
                            this.setState({rateModal: false})
                        }}
                    >

                        <TouchableHighlight onPress={()=>{ this.setState({rateModal: false})}} style={{
                            backgroundColor: 'rgba(172,165,165,0.7)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1,
                            paddingHorizontal: '10%'
                        }}>


                            <View style={{
                                borderRadius:20,
                                paddingBottom:30,
                                backgroundColor:'white',
                                alignItems:'center',
                                alignSelf: 'center',
                            }}>

                                <IonIcon onPress={()=>{
                                    this.setState({rateModal: false})
                                }} name={'close'} color={'#666161'} size={25} style={{alignSelf:'flex-end',margin:10}}/>

                                <Text style={{fontFamily:Constants.fontFamilySemiBold,color:'#000',fontSize:16}}>Logo</Text>


                                <Text style={{fontFamily:Constants.fontFamilySemiBold,color:Color.primary,marginTop:30,fontSize:16}}>Enjoying App?</Text>
                                <Text style={{fontFamily:Constants.fontFamilyRegular,color:'#000',marginTop:10,fontSize:16,textAlign:'center'}}>Tap it on the star to rate it on the
                                    Playstore </Text>

                                <View style={{flexDirection:'row',marginVertical:20}}>
                                    <IonIcon name={'star-outline'} color={Color.primary} size={25} style={{alignSelf:'flex-end',margin:3}}/>
                                    <IonIcon name={'star-outline'} color={Color.primary} size={25} style={{alignSelf:'flex-end',margin:3}}/>
                                    <IonIcon name={'star-outline'} color={Color.primary} size={25} style={{alignSelf:'flex-end',margin:3}}/>
                                    <IonIcon name={'star-outline'} color={Color.primary} size={25} style={{alignSelf:'flex-end',margin:3}}/>
                                    <IonIcon name={'star-outline'} color={Color.primary} size={25} style={{alignSelf:'flex-end',margin:3}}/>

                                </View>








                            </View>


                        </TouchableHighlight>
                    </Modal>




                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.shareModal}
                        onRequestClose={() => {
                            this.setState({shareModal: false})
                        }}
                    >

                        <TouchableHighlight onPress={()=>{ this.setState({shareModal: false})}} style={{
                            backgroundColor: 'rgba(172,165,165,0.7)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1,
                            paddingHorizontal: '10%'
                        }}>


                            <View style={{
                                borderRadius:20,
                                backgroundColor:'white',
                                alignItems:'center',
                                alignSelf: 'center',
                            }}>

                   <View style={{height:60,width:60,borderRadius:30,backgroundColor:Color.primary,position:'absolute',top:-30,justifyContent:'center',alignItems:'center'}}>
                       <Text style={{fontFamily:Constants.fontFamilyRegular,color:'#fff',fontSize:15}}>Logo</Text>

                   </View>
                                <View style={{flexDirection:"row",marginTop:50}}>
                                    <TouchableOpacity style={{height:35,width:35,borderRadius:35,alignItems:"center",justifyContent:"center",backgroundColor:'#3f8ce3',marginRight:5}}>
                                        <FontAwesome5 name={"facebook"} size={18} color={"#fff"}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginRight:5,height:35,marginLeft:5,width:35,borderRadius:35,alignItems:"center",justifyContent:"center",backgroundColor:'#fd0076'}}>
                                        <AntDesign name={"instagram"} size={18} color={"#fff"}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginRight:5,height:35,marginLeft:5,width:35,borderRadius:35,alignItems:"center",justifyContent:"center",backgroundColor:'#00db57'}}>
                                        <FontAwesome name={"whatsapp"} size={18} color={"#fff"}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{height:35,marginLeft:5,width:35,borderRadius:35,alignItems:"center",justifyContent:"center",backgroundColor:'#00a2f6'}}>
                                        <FontAwesome name={"twitter"} size={18} color={"#fff"}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginHorizontal:20,paddingTop:20,alignItems:'center'}}>

<Text style={{fontFamily:Constants.fontFamilyRegular,color:'#000',fontSize:22}}>Share and Let Your</Text>
<Text style={{fontFamily:Constants.fontFamilySemiBold,color:Color.primary,fontSize:25,marginTop:2}}>FRIENDS & FAMILY</Text>
<Text style={{fontFamily:Constants.fontFamilyRegular,color:'#000',fontSize:22,marginTop:2}}>know about  the latest</Text>
<Text style={{fontFamily:Constants.fontFamilySemiBold,color:Color.primary,fontSize:25,marginTop:2}}>OFFERS</Text>
</View>




<View style={{flexDirection:'row',marginHorizontal:20}}>
    <TouchableOpacity onPress={()=>{  this.setState({shareModal: false})}} style={{flex:1,borderRadius:10,borderWidth:1,borderColor:Color.primary,marginVertical:20,marginRight:20,padding:5,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontFamily:Constants.fontFamilySemiBold,color:Color.primary,fontSize:16,marginTop:5}}>Share now</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{  this.setState({shareModal: false})}}  style={{flex:1,borderRadius:10,borderWidth:1,borderColor:Color.primary,marginVertical:20,marginLeft:20,padding:5,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontFamily:Constants.fontFamilySemiBold,color:'rgba(60,60,67,0.6)',fontSize:16,marginTop:5}}>Later</Text>
    </TouchableOpacity>
</View>


                            </View>


                        </TouchableHighlight>
                    </Modal>
                    <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,marginTop:'10%'}}>
                        <MaterialIcons onPress={()=>{drawer.current.close()}} name={"sort"} size={30} color={"#fff"}/>

                        <Text style={{
                            fontSize: 15,
                            marginLeft:10,
                            includeFontPadding: false,
                            fontFamily: Constants.fontFamilySemiBold,
                            color: '#fff'
                        }}>{I18n.t("hello")}</Text>



                    </View>
                    <View style={{flexDirection:'row',flex:1,width:'100%'}}>
                        <View style={{width:'15%'}}/>

                        <View style={{width:'55%'}}>
                            <View style={{height:'5%'}}/>

                            <View style={{height:'75%'}}>



<View style={{flex:1,marginVertical:'25%'}}>
    <TextWithIcon onPress={()=>{navigation.navigate('HomeDrawer')
        drawer.current?.close()
    }} title={t("Home")} >
    </TextWithIcon>
    <TextWithIcon onPress={()=>{navigation.navigate('OutletsSceen')
        drawer.current?.close()
    }} title={I18n.t("Outlets")} >
    </TextWithIcon>

    <TextWithIcon onPress={()=>{navigation.navigate('BookMarkScreen')
        drawer.current?.close()
    }} title={I18n.t("Bookmarks")} >
    </TextWithIcon>
    <TextWithIcon onPress={()=>{navigation.navigate('HomeDrawer')
        drawer.current?.close()

        navigation.navigate('NotificationsScreen')
    }} title={I18n.t("Notification")} >
    </TextWithIcon>
    <TextWithIcon
        onPress={()=>{navigation.navigate('SettingScreen')
            drawer.current?.close()
        }}
        title={I18n.t("Settings")} >
    </TextWithIcon>
    <TextWithIcon
        onPress={()=>{
            this.props.navigation.navigate('ContactUsScreen')
            drawer.current?.close()
        }}
        title={I18n.t("Contact Us")}  >
    </TextWithIcon>
    <TextWithIcon
        onPress={()=>{this.setState({shareModal:true})
            drawer.current?.close()
        }}
        title={I18n.t("Share")}  >
    </TextWithIcon>
    <TextWithIcon
        onPress={()=>{   this.setState({rateModal: true})
            drawer.current?.close()
        }}
        title={I18n.t("Rate")} >
    </TextWithIcon>
    <TextWithIcon
        onPress={()=>{
            this.props.logout()
            //
setTimeout(()=>{RNRestart.Restart()},1000)
             drawer.current?.close()
        }}
        title={I18n.t("Logout")} >
    </TextWithIcon>
</View>


                            </View>
                            <View style={{height:'15%'}}/>
                        </View>
                        <View style={{width:'30%'}}/>

                    </View>

                </View>


</SafeAreaView>



        );
    }
}

const styles = {
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    tabContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#1676d1',
        borderColor: '#FFFFFF',
        borderTopWidth: 0,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    mainHeaderViewStyle: {
        width: parseInt(Screenwidth),
        height: Platform.OS == "android" ? 55 : 65,
        flexDirection: "row",
        alignItems: "center"
    },
    mainHeaderViewStyleCopy: {
        //flex:.10,
        width: parseInt(Screenwidth),
        height: (Platform.OS == 'android' ? 55 : 65),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    headerImage: {
        resizeMode: 'stretch',
        width: parseInt(Screenwidth),
        height: 55,
    },

    iconImageStyle: {
        height: 34,
        width: 34,
        resizeMode: 'stretch'
    },
    dividerStyle: {
        width: '100%',
        height: 1,
        resizeMode: 'stretch'
    },



}
export default withLanguage(NavigationDrawerContainer);
