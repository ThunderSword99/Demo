import React, { Component } from 'react';
import {Text, View, Image, } from 'react-native';
import {Button} from "native-base";
import styles from "./styles";

const logo = require("../../../assets/logo.png");
const finger = require('../../../assets/Finger.png');

export default class Demo extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.Bar}>
          <Image
            style={{ width: 70, height: 70 }}
            source={logo}
          />
        </View>
        <View style={styles.Finger}>
          <Image
            style={{ width: 150, height: 150 }}
            source={finger}
          />
        </View>
        <View style={styles.Text}>
          <View style={styles.TextView1}>
            <Text style={styles.TextTitle}>Enable Fingerprint</Text>
          </View>
          <View style={styles.TextView2}>
            <Text style={styles.TextNote}>If you enable to touch ID, you don't need
            to enter your password when you login.</Text>
          </View>
        </View>
        <View style={styles.Button}>
          <Button onPress={() => Alert.alert('Simple Button pressed')}
            style={styles.btnContinue}>
            <Text style={styles.btnContinueText}>Continue</Text>
          </Button>
          <Button onPress={() => Alert.alert('Simple Button pressed')}
            style={styles.btnCancel}>
            <Text style={styles.btnCancelText}>Cancel</Text>
          </Button>
        </View>
      </View>
    );
  }
}