import React, { Component } from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';
import {Button,Input} from "native-base";

import styles from './styles'

const mainLogo = require('../../../assets/logo.png');

export default class Login extends Component
{
    render()
    {
        return(
            <View style = {styles.container}>
                <View style = {styles.logoContainer}>
                    <Image 
                        style = {styles.logo}
                        source = {mainLogo}
                    />
                </View>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>
                        Login
                    </Text>
                </View>
                <View style = {styles.inputContainer}>
                    <View style = {styles.inputAccContainer}>
                        <Input
                            placeholder = "Username or email"
                            style = {styles.inputAcc}
                        />
                    </View>
                    <View style = {styles.inputPassContainer}>
                        <Input
                            placeholder = "Password"
                            style = {styles.inputPass}
                        />
                    </View>
                    <View style = {styles.loginButtonContainer}>
                         <Button style = {styles.loginButton}>
                            <Text style = {styles.textLoginButton}>Sign in</Text>
                        </Button>
                    </View>
                </View>
                <View style = {styles.symbolContainer}>
                    
                </View>
            </View>
        );
    }
}