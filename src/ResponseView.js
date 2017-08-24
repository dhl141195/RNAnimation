
import React, { Component } from 'react';
import { View, Animated, Easing, Text } from 'react-native';

export default class SlideView extends Component {
    state = {
        x: null,
        y: null
    }

    onPress = (event) => {
        const { locationX, locationY } = event.nativeEvent;
        console.log(locationX, locationY);

        this.setState({
            x: locationX,
            y: locationY
        })
    }

    onMove = (event) => {

    }

    onRelease = (event) => {

    }

    render() {

        return (
            <View
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={this.onPress}
                onResponderMove={this.onMove}
                onResponderRelease={this.onRelease}
                style={{
                    flex: 1,
                    backgroundColor: 'yellow'
                }}
            >
            </View>
        );
    }
}