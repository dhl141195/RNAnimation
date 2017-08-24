import React, { Component } from 'react';
import { View } from 'react-native';

import FadeView from './FadeView';
import ResponseView from './ResponseView'

export default class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'stretch',
                backgroundColor: 'lightblue'
            }}>
                <ResponseView />
            </View>
        )
    }
}
