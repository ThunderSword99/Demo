import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import styles from "./styles";

import logo from "../../../assets/logo.png"

export default class Demo extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.TopBar}>
          <Text style={styles.LogoText}>
            H·I·T
            </Text>
        </View>
        <View style={styles.SeperatingBar}>

        </View>
        <View style={styles.Main}>
          <View style={styles.MainView}>
          
            <TouchableHighlight onPress={() => this.props.navigation.openDrawer()}>
                <Text>dpsfkpodskp</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.MainView}>
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
          </View>
          <View style={styles.MainView}>
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
          </View>
          <View style={styles.MainView}>
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
            <Image
              style={{ width: 70, height: 70 }}
              source={logo}
            />
          </View>
        </View>
        <View style={styles.BottomBar}>
          <Text style={styles.BottomTextBar}>
            This is a production of H·I·T club
              </Text>
        </View>
      </View>
    );
  }
}