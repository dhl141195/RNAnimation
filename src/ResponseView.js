
import React, { Component } from 'react';
import { View, Animated, Easing, Text } from 'react-native';

export default class SlideView extends Component {
    state = {
        x: null,
        y: null,
        marginLeft: new Animated.Value(0),
        marginTop: new Animated.Value(0)
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
        const { locationX, locationY } = event.nativeEvent;
        const { x, y } = this.state;

        const marginLeft = locationX - x;
        const marginTop = locationY - y;

        this.setState({
            marginLeft,
            marginTop
        })
    }

    onRelease = (event) => {
    }

    render() {
        const { marginLeft, marginTop } = this.state;

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
                <Animated.Image
                    style={{
                        height: 200,
                        width: 200,
                        marginLeft,
                        marginTop
                    }}
                    source={require('./media/test.jpg')}
                />
            </View>
        );
    }
}