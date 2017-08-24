
import React, { Component } from 'react';
import { View, Animated, Easing, Text, Dimensions } from 'react-native';

import h1 from './media/1.jpg';
import h2 from './media/2.jpg';
import h3 from './media/3.jpg';
import h4 from './media/4.jpg';
import h5 from './media/5.jpg';

const { width } = Dimensions.get('window');

export default class VegetablesView extends Component {
    state = {
        x: null,
        rotate: new Animated.Value(0)
    }

    onPress = (event) => {
        const { locationX } = event.nativeEvent;

        this.setState({
            x: locationX,
        })

    }

    onMove = (event) => {
        const { locationX } = event.nativeEvent;
        const { x } = this.state;

        const deg = 1.8 * (locationX - x) / width;
        this.setState({
            rotate: new Animated.Value(deg)
        });

    }

    onRelease = (event) => {
        Animated.timing(
            this.state.rotate,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.bounce
            }
        ).start();
    }

    render() {
        const rotate = this.state.rotate.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: ['-30deg', '0deg', '30deg']
        });

        const opacity = this.state.rotate.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [0, 1, 0]
        });

        return (
            <View
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={this.onPress}
                onResponderMove={this.onMove}
                onResponderRelease={this.onRelease}
                style={{
                    flex: 1,
                    backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Animated.Image
                    style={{
                        height: 200,
                        width: 150,
                        transform: [{ rotate }],
                        opacity
                    }}
                    source={h1}
                />
            </View>
        );
    }
}