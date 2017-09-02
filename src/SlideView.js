import React, { Component } from 'react';
import { View, Animated, Easing, Text } from 'react-native';

export default class SlideView extends Component {
    state = {
        slideAnim: new Animated.Value(-1000)
    }

    componentDidMount() {
        Animated.spring(this.state.slideAnim, {
            toValue: 0,

            // K dùng chung với tension/friction
            // bounciness: 50, // Độ nảy, default: 8
            // speed: 100, // default: 12

            // K dùng chung với bounciness/speed
            tension: 500, // sức nén, default 40
            friction: 1 // độ ma sát,  default 7
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