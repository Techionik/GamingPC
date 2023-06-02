import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Feather"
import InputBasic from './InputBasic';
import ViewLabel, {MIN_HEIGHT} from '../ViewLabel';
import {padding, margin, borderRadius} from '../../../config/spacing';
import {Color, Constants} from "../../../common";
import ViewLabelPhone from "../ViewLabelPhone";
import AntDesign from "react-native-vector-icons/AntDesign";
import CountryPicker from 'react-native-country-picker-modal'

class InputPhoneNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContrydialog: false,
            selectedCountryCode: '+92',
            isSecure: props.secureTextEntry,
            isHeading: props.value || props.defaultValue,
        };
        this.input = React.createRef();

    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                isHeading: this.props.value,
            });
        }
    }

    handleFocus = data => {
        this.setState({isHeading: true});
        if (this.props.onFocus) {
            this.props.onFocus(data);
        }
    };
    onChange = value => {
        this.setState(
            {
                value,
            },
            () => {
                if (this.props.onChangeText) {
                    this.props.onChangeText(value);
                }
            },
        );
    };
    handleBlur = data => {
        const {isHeading} = this.state;
        this.setState({isHeading: isHeading || (!this.input.current && this.input.current._lastNativeText)});
        if (this.props.onBlur) {
            this.props.onBlur(data);
        }
    };

    render() {
        const {
            label,
            error,
            viewLabelStyle,
            labelBackground,
            secureTextEntry,
            editable,
            style,

            multiline,
            ...rest
        } = this.props;
        const {isSecure, isHeading} = this.state;
        return (
            <ViewLabelPhone viewLabelStyle={viewLabelStyle} label={label} labelBackground={labelBackground}
                            error={error} isHeading={isHeading}>
                <View style={[styles.viewInput]}>
                    <TouchableOpacity onPress={() => {
                        this.setState({showContrydialog: true})
                    }} style={{backgroundColor: "#fff", borderRadius: 10, padding: 5, marginHorizontal: 10}}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={{
                                color: "#000",
                                fontFamily: Constants.fontFamilyRegular,
                                fontSize: 16
                            }}>{this.state.selectedCountryCode}</Text>
                            <AntDesign name={"down"} color={"#000"} size={15}/>
                        </View>
                    </TouchableOpacity>
                    <CountryPicker
                        withFlagButton={false}
                        onClose={() => {
                            this.setState({showContrydialog: false})
                        }}
                        countryCode={'PK'}
                        withFilter={true}
                        withCallingCode={true}
                        onSelect={(value) => {
                            this.props.onCountryCodeChange('+'+value.callingCode)
                            this.setState({showContrydialog: false,selectedCountryCode:'+'+value.callingCode})
                        }}
                        visible={this.state.showContrydialog}
                    />
                    <InputBasic
                        {...rest}
                        inputRef={this.input}
                        editable={editable}
                        testID="RN-text-input"
                        onBlur={this.handleBlur}
                        keyboardType="number-pad"
                        onFocus={this.handleFocus}
                        secureTextEntry={isSecure}
                        multiline={multiline}
                        style={[

                            styles.input,
                            !multiline && {
                                height: MIN_HEIGHT,
                            },
                            style && style,
                        ]}
                    />
                    {secureTextEntry && (
                        <Icon
                            name={isSecure ? 'eye' : 'eye-off'}
                            color={isSecure ? Color.textColor : Color.primary}
                            size={15}
                            // containerStyle={styles.viewIcon}
                            style={styles.icon}
                            // underlayColor="transparent"
                            onPress={() =>
                                this.setState({
                                    isSecure: !isSecure,
                                })
                            }
                        />
                    )}
                </View>
            </ViewLabelPhone>
        );
    }
}

const styles = StyleSheet.create({
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 5,
    },
    input: {
        flex: 1,
        color:"#fff",
        paddingHorizontal: padding.large,
    },
    viewIcon: {
        marginRight: margin.large,
    },
    icon: {
        paddingVertical: padding.base,
        marginRight: margin.large,
    },
});

export default InputPhoneNumber;
