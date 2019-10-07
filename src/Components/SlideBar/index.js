import React, { Component } from 'react';
import { View, Image, } from 'react-native';
import styles from "./styles";

const iconHome = require("../../../assets/iconHome.png")

export default class Demo extends Component {
  render() {
    return (
      <View style={styles.Container}>
         <Image
            style={{ width: 70, height: 70 }}
            source={iconHome}
          />
      </View>
    );
  }
}