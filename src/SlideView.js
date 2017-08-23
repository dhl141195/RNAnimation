import React, { Component } from 'react';
import { View, Animated, Easing, Text } from 'react-native';

export default class SlideView extends Component {
    state = {
        transformAnim: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(this.state.transformAnim, {
            toValue: 1,
            duration: 1000
        }).start();
    }

    render() {
        const rotate = this.state.transformAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '60deg', '120deg']
        })

        return (
            <Animated.View
                style={{
                    width: 300,
                    height: 200,
                    backgroundColor: 'green',
                    transform: [{ rotateZ: rotate }]
                }}
            >
                <Text>I'm DHL</Text>
            </Animated.View>
        );
    }
}