import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import { Button, Input } from "native-base"; 4
import { KeyboardAvoidingView } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

import styles from './styles'

const bg = require('../../../assets/background.png');
const mainLogo = require('../../../assets/logo.png');
const accLogo = require('../../../assets/account.png')
const passLogo = require('../../../assets/password.png')
const fbLogo = require('../../../assets/facebook.png')
const twitterLogo = require('../../../assets/twitter.png')
const helpLogo = require('../../../assets/help.png')



export default class Login extends Component {
    render() {
        return (


            <View style={styles.container}>
                <ImageBackground style={styles.background} source={bg}>
                <InputScrollView>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={mainLogo}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Login
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputViewContainer}>
                            <View style={styles.inputView}>

                                <View style={styles.iconView}>
                                    <Image
                                        style={styles.Icon}
                                        source={accLogo}
                                    />
                                </View>
                                <View style={styles.inputAccView}>
                                    <Input
                                        placeholder="Username or gmail"
                                        style={styles.inputAcc}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.inputPassContainer}>
                            <View style={styles.inputViewContainer}>
                                <View style={styles.inputView}>
                                    <View style={styles.iconView}>
                                        <Image
                                            style={styles.Icon}
                                            source={passLogo}
                                        />
                                    </View>
                                    <View style={styles.inputAccView}>
                                        <Input
                                            placeholder="Password"
                                            style={styles.inputAcc}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.loginButtonContainer}>
                            <Button style={styles.loginButton} onPress={() => this.props.navigation.navigate('Home')}>
                                <Text style={styles.textLoginButton}>Sign in</Text>
                                
                            </Button>
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={styles.iconViewContainer}>
                            <Image
                                style={styles.mediaIcon}
                                source={fbLogo}
                            />
                            <Image
                                style={styles.mediaIcon}
                                source={twitterLogo}
                            />
                            <Image
                                style={styles.mediaIcon}
                                source={helpLogo}
                            />
                        </View>

                    </View>
                    </InputScrollView>
                </ImageBackground>
            </View>
        );
    }
}