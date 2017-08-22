import React, { Component } from 'react';
import { View, Animated, Easing, Text } from 'react-native';

export default class SlideView extends Component {
    state = {
        slideAnim: new Animated.Value(-1000)
    }

    componentDidMount() {
        Animated.timing(this.state.slideAnim, {
            toValue: 0,
            duration: 2000,
            easing: Easing.bounce
        }).start();
    }

    render() {
        const marginLeft = this.state.slideAnim;
        console.log(marginLeft);

        return (
            <Animated.View
                style={{
                    width: 300,
                    height: 200,
                    backgroundColor: 'green',
                    marginLeft
                }}
            >
                <Text>I'm DHL</Text>
            </Animated.View>
        );
    }
}