import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import Text from "./text/Text";
import { margin, padding, borderRadius } from './../../config/spacing';
import fonts, { sizes, lineHeights } from './../../config/fonts';
import {Color, Constants} from '../../common';

const MIN_HEIGHT = 46;
const TOP = 8;
const BOTTOM = margin.base - 8;

class ViewLabel extends React.Component {
    UNSAFE_componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.isHeading ? 1 : 0);
    }
    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
            toValue: this.props.isHeading ? 1 : 0,
            duration: 120,
            useNativeDriver:false
        }).start();
    }

    render() {
        const {
            label,
            error,
            viewLabelStyle,
            labelBackground,
            children,
        } = this.props;
        const paddingHorizontal = padding.large - margin.small;
        const topCenter = (MIN_HEIGHT - lineHeights.base) / 2;
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [topCenter, -TOP],
            }),
            ...fonts.regular,
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [sizes.base, 10],
            }),
            lineHeight: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [lineHeights.base, 15],
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [error?Color.red:Color.lightgrey, error?Color.red:Color.blackTextSecondary],
            }),
            zIndex: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 9999],
            }),
            backgroundColor: labelBackground??"white",
            paddingHorizontal: paddingHorizontal,
            marginHorizontal: margin.small,
        };
        return (
            <>
                <View
                    style={[
                        styles.container,
                        {
                            borderColor: error?Color.red:Color.lightgrey,
                        },
                        viewLabelStyle
                    ]}>
                    {typeof label === 'string' ? (
                        <Animated.Text  style={[labelStyle]} numberOfLines={1}>
                            {label}
                        </Animated.Text>
                    ) : null}
                    {children}
                </View>
                {typeof error === 'string' ? (
                    <Text
                        style={[
                            styles.textError,
                            {
                                color: Color.red,
                            },
                        ]}>
                        {error}
                    </Text>
                ) : null}
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minHeight: MIN_HEIGHT,
        borderWidth: 1,

        borderRadius: borderRadius.large,
        marginTop: TOP,
        marginBottom: BOTTOM,
    },
    textError: {
        fontSize: 10,
        lineHeight: 15,
        marginBottom: BOTTOM,
        fontFamily:Constants.fontFamilyMedium
    },
});

ViewLabel.defaultProps = {
    isHeading: false,
    visit: 'center',
};

export default ViewLabel;
export {MIN_HEIGHT};
