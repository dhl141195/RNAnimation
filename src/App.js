import React, { Component } from 'react';
import { View } from 'react-native';

import TransformView from './TransformView'

export default class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightblue'
            }}>
                <TransformView />
            </View>
        )
    }
}
