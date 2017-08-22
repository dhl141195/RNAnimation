import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';

export default class FadeView extends Component {
    state = {
        fadeAnim: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 5000
        }).start();
    }

    render() {
        const opacity = this.state.fadeAnim;
        console.log(opacity);

        return (
            <Animated.View
                style={{
                    width: 300,
                    height: 200,
                    backgroundColor: 'green',
                    opacity
                }}
            >
                <Text>I'm DHL</Text>
            </Animated.View>
        );
    }
}