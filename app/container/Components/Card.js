import React from 'react';
import {View,TouchableWithoutFeedback} from 'react-native';



const Card = ({children,outerstyles,onPress}) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >

            <View style={[{
                backgroundColor: '#fff',
                elevation:3,
                margin:3,
                shadowRadius: 5,
                shadowOpacity: 0.2,
                shadowColor: '#000000',
                shadowOffset: {
                    width: 0,
                    height: 2
                },



            }, outerstyles]}>
                {children}
            </View>
        </TouchableWithoutFeedback>

    );
};



export default Card;
