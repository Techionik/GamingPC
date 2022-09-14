/**
 * Created by InspireUI on 28/02/2017.
 *
 * @format
 */

import React, {Component} from "react";
import {Image, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import {connect} from "react-redux";
import {addNotification, removeNotification} from "../redux/actions";
import {Constants, Styles} from "../common";
import {EventRegister} from 'react-native-event-listeners'
import Images from "../common/Images";
import Icon from 'react-native-vector-icons/EvilIcons'
import {scale} from "../ScalingUtils";

const mapStateToProps = ({app}) => {
    return {
        notification: app.notification,
    };
};

@connect(
    mapStateToProps,
    {addNotification, removeNotification}
)
export default class MyNotificationContainer extends Component {
    constructor(props) {
        super(props);
        this.nextnotificationId = 0;
        this.rendernotification = this.rendernotification.bind(this);
    }

    componentDidMount() {
        this.listener = EventRegister.addEventListener(Constants.EmitCode.Notification, this.doNotification.bind(this))
    }

    componentWillUnmount() {
        //this.notificationListener.remove();
        EventRegister.removeEventListener(this.listener)
    }

    shouldComponentUpdate() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        return true;
    }

    rendernotification = (msg, index) => {
        const {removeNotification} = this.props;
        const onPress = () => removeNotification(msg.key);
        return (
            <View key={index} style={styles.textWrap}>
                <View style={styles.row}>
                    <View style={styles.rowStart}>
                        <Image source={Images.notification.onSuccess} style={styles.icon}/>
                        <Text
                            style={styles.text}>{"An object is data structure with Sthat accepts a key, and gives you a value. Some people call this data structure associative arr"}</Text>
                    </View>
                    <View style={styles.rowEnd}>
                        <Text style={styles.actionText}>{"View all category hsgdhs ghgsgd sdj gjsgd sgdh "}</Text>
                        <TouchableOpacity onPress={onPress}>
                            <Icon name={"close"} size={scale(15)} color={"#fff"} style={{paddingHorizontal: 0}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    doNotification = (msg, duration = 10000) => {
        const {addNotification, removeNotification} = this.props;
        const key = this.nextnotificationId++; // unique message key
        addNotification(msg, key);
        // Timer.setTimeout(() => removeNotification(key), duration);
    };

    render() {
        const {notification} = this.props;
        return (
            <View style={styles.container}>{notification.list.map(this.rendernotification)}</View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowStart: {
        flexDirection: "row",
        flex: 0.6,
        alignItems: "flex-start",

    },
    rowEnd: {
        flexDirection: "row",
        flex: 0.25,
        alignSelf: "flex-start",
        textAlign: "center",
        justifyContent: "flex-end",

    },
    container: {
        position: "absolute",
        bottom: Styles.height / 40, // padding bottom
        left: Styles.width / 20,
        right: Styles.width / 20, // padding horizontal
        alignItems: "center",
        zIndex: 99999,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    textWrap: {
        backgroundColor: "#000",
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    text: {
        color: "#FFFFFF",
        marginStart: 10,
        fontSize: scale(10),
        includeFontPadding: false,
        fontFamily: Constants.fontFamilyRegular
    },
    actionText: {
        color: "#FFFFFF",
        fontSize: scale(10),
        marginEnd: 10,
        includeFontPadding: false,
        fontFamily: Constants.fontFamilyRegular
    },
});
