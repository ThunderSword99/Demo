import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import { Button, Input } from "native-base"; 4
import { KeyboardAvoidingView } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

import styles from './styles'

export default class Home extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>Hello world</Text>
            </View>
        );
    }
}