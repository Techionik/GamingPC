import React from "react";
import {Image, StyleSheet, View, SafeAreaView, Modal, Text, Platform, Linking, TouchableOpacity} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {connect} from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {scale} from "../../ScalingUtils";
import {Color, Constants} from "../../common";
import axios from "axios";



const mapStateToProps = ({user, home}) => ({});


@connect(
    mapStateToProps,
    {}
)


export default class MapScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.cameraRef = React.createRef();
        this.state = {
            lat: 74.2758,
            lng: 31.4575,
            address: '',
            selectedType: 'home',
            isDraging: false,
            isLoading: true,
            placeModel: false,
            validateModal2: false
        };

    }




    animateMapCamer = (lat, lng) => {

        this.cameraRef.current.animateCamera({
            center: {
                latitude: lat,
                longitude: lng,
            }, zoom: 18,
        }, 2000);
    };
    componentDidMount() {
        this.getPosition();
    }


    getPosition() {
        this.setState({isLoading: true})
        this.props.getCurrentLatLng(res => {
            console.log(res);
            if (res) {
                if (!res?.permissionGiven) {
                    this.setState({validateModal2: true})
                } else {
                    this.animateMapCamer(res.coords.latitude, res.coords.longitude);
                    this.setState({
                        lat: res.coords.latitude,
                        lng: res.coords.longitude,
                        isDraging: false,
                        isLoading: false,
                    })

                    axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${res.coords.latitude}&lon=${res.coords.longitude}`).then(response=> {
                        this.setState({address: response.data.display_name})
                    }).catch (error=> {
                        console.error(error);
                    })

                }
            }
        })
    }





    render() {


        const {navigation, car} = this.props;



        return (
            <SafeAreaView style={{flex: 1}}>


                <MapView style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: -1}}

                         zoom={15}
                         zoomEnabled={true}
                         provider={PROVIDER_GOOGLE}
                         ref={this.cameraRef}
                         maximumZ={40}
                         scrollEnabled={true}
                         initialRegion={{
                             latitude: this.state.lat,
                             longitude: this.state.lng,
                             latitudeDelta: 0.0922,
                             longitudeDelta: 0.0421,
                         }}>
                    <Marker
                        pinColor={Color.primary}
                        identifier="pickup"
                        anchor={{x: 0.5, y: 0.9}}
                        coordinate={{
                            latitude: this.state.lat,
                            longitude: this.state.lng,
                        }}>

                    </Marker>
                </MapView>


                <View style={{flex:1}}/>
                <View style={{margin: 10}}>
                    <MaterialIcons onPress={()=>{
                        this.getPosition();
                    }} style={{
                        backgroundColor: Color.primary,
                        elevation: 4,
                        alignSelf:"flex-end",
                        padding: scale(10),
                        borderRadius: 30,
                        marginVertical: 10,

                    }} name={'my-location'} color={"#fff"} size={25}/>
                    <ButtonComponent extraTouchableOpacitystyle={{marginHorizontal: 10}}
                                     onPress={()=>{
                                         if(this.props?.route?.params?.Type){
                                             this.props.navigation.replace(this.props?.route?.params?.Type,{AddressData:this.state})
                                             this.props.SaveAddress({
                                                 Address: this.state.address,
                                                 Name: "",
                                                 Lon: this.state.lng,
                                                 Lat: this.state.lat,
                                             });
                                         }else {
                                             this.props.SaveAddress({
                                                 Address: this.state.address,
                                                 Name: "",
                                                 Lon: this.state.lng,
                                                 Lat: this.state.lat,
                                             });
                                             this.props.navigation.pop();
                                         }
                                     }}
                                     style={{margin: 5}}
                                     title={"Confirm"}
                    />
                </View>
            </SafeAreaView>


        );

    }
}

