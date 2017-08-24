import React, { Component } from 'react';
import { View } from 'react-native';

import VegetablesView from './VegetablesView'

export default class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'stretch',
                backgroundColor: 'lightblue'
            }}>
                <VegetablesView />
            </View>
        )
    }
}
