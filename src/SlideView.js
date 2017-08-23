import React, { Component } from 'react';
import { View, Animated, Easing, Text } from 'react-native';

export default class SlideView extends Component {
    state = {
        slideAnim1: new Animated.Value(-1000),
        slideAnim2: new Animated.Value(-1000),
        slideAnim3: new Animated.Value(-1000)
    }

    componentDidMount() {
        const anim1 = Animated.timing(this.state.slideAnim1, {
            toValue: 0,
            duration: 2000,
            easing: Easing.bounce
        });
        const anim2 = Animated.timing(this.state.slideAnim2, {
            toValue: 0,
            duration: 2000,
            easing: Easing.bounce
        });
        const anim3 = Animated.timing(this.state.slideAnim3, {
            toValue: 0,
            duration: 2000,
            easing: Easing.ease
        });

        // Animated.sequence([anim1, anim2, anim3]).start();
        // Animated.parallel([anim1, anim2, anim3]).start();
        Animated.stagger(1000, [anim1, anim2, anim3]).start();
    }

    render() {
        const marginLeft1 = this.state.slideAnim1;
        const marginLeft2 = this.state.slideAnim2;
        const marginLeft3 = this.state.slideAnim3;

        return (
            <View>
                <Animated.View
                    style={{
                        width: 300,
                        height: 150,
                        backgroundColor: 'green',
                        marginBottom: 30,
                        marginLeft: marginLeft1
                    }}
                >
                    <Text>I'm DHL</Text>
                </Animated.View>
                <Animated.View
                    style={{
                        width: 300,
                        height: 150,
                        backgroundColor: 'green',
                        marginBottom: 30,
                        marginLeft: marginLeft2
                    }}
                >
                    <Text>I'm DHL</Text>
                </Animated.View>
                <Animated.View
                    style={{
                        width: 300,
                        height: 150,
                        backgroundColor: 'green',
                        marginLeft: marginLeft3
                    }}
                >
                    <Text>I'm DHL</Text>
                </Animated.View>
            </View>
        );
    }
}