/**
 * Created by InspireUI on 28/02/2017.
 *
 * @format
 */

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addToast, removeToast } from "../redux/actions";
import { Constants, Styles } from "../common";
import {  Timer } from "../Omni";
import { EventRegister } from 'react-native-event-listeners'


const mapStateToProps = ({ app }) => {
  return {
    toast: app.toast,
  };
};

@connect(
  mapStateToProps,
  { addToast, removeToast }
)
export default class MyToast extends Component {
  constructor(props) {
    super(props);
    this.nextToastId = 0;
    this.renderToast = this.renderToast.bind(this);
  }

  componentDidMount() {
   this.listener=EventRegister.addEventListener(Constants.EmitCode.Toast,this.doToast.bind(this))
  }

  componentWillUnmount() {
     //this.toastListener.remove();
    EventRegister.removeEventListener(this.listener)
  }

  shouldComponentUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return true;
  }

  renderToast = (msg, index) => {
    const { removeToast } = this.props;
    const onPress = () => removeToast(msg.key);
    return (
      <TouchableOpacity key={index} style={styles.textWrap} onPress={onPress}>
        <Text style={styles.text}>{msg.msg}</Text>
      </TouchableOpacity>
    );
  };

  doToast = (msg, duration = 2000) => {
    const { addToast, removeToast } = this.props;
    const key = this.nextToastId++; // unique message key
    addToast(msg, key);
    Timer.setTimeout(() => removeToast(key), duration);
  };

  render() {

    const { toast } = this.props;
    return (
      <View style={styles.container}>{toast.list.map(this.renderToast)}</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: Styles.height / 10, // padding bottom
    left: Styles.width / 20,
    right: Styles.width / 20, // padding horizontal
    alignItems: "center",
    zIndex: 99999,
  },
  textWrap: {
    backgroundColor: "rgba(60,60,60,0.9)",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 5,
  },
  text: {
    color: "#FFFFFF",
  },
});
