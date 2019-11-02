import React, { Component } from 'react';
import {StyleSheet,View,Image} from 'react-native';
const mainLogo = require('../assets/logo.png');

export default class SplashScreen extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <View style = {styles.logoContainer}>
                    <Image 
                        style = {styles.logo}
                        source = {mainLogo}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:'#acb6e5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer:
    {
        alignItems: 'center',
        flex:1,
        justifyContent:'center',
    },
    logo:
    {
        width: 200,
        height:200,
    }
})