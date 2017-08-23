import React, { Component } from 'react';
import { View, Animated, Easing, Text } from 'react-native';

export default class TransformView extends Component {
    state = {
        bgcAnim: new Animated.Value(0),
    }

    componentDidMount() {
        const anim1 = Animated.timing(
            this.state.bgcAnim,
            {
                toValue: 1,
                duration: 1000
            }
        );
        const anim2 = Animated.timing(
            this.state.bgcAnim,
            {
                toValue: 0,
                duration: 1000
            }
        )
        const composedAnim =  Animated.sequence([anim1, anim2]);
        Animated.loop(composedAnim).start();
    }

    render() {
        const backgroundColor = this.state.bgcAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['blue', 'red']
        });

        return (
            <View>
                <Animated.View
                    style={{
                        width: 300,
                        height: 150,
                        backgroundColor
                    }}
                >
                    <Text>I'm DHL</Text>
                </Animated.View>
            </View>
        );
    }
}