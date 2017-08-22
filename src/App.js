import React, { Component } from 'react';
import { View } from 'react-native';

import FadeView from './FadeView';
import SlideView from './SlideView'

export default class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightblue'
            }}>
                <SlideView />
            </View>
        )
    }
}
