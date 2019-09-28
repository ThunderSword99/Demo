import React, { Component } from 'react';
import {Text, View, Image, } from 'react-native';
import {Button} from "native-base";
import styles from "./styles";

export default class Demo extends Component {
  render() {
    return (
      <View style = {styles.Container}>
          <View style = {styles.TopBar}>
            <Text style = {styles.LogoText}>
              H·I·T
            </Text>
          </View>
          <View style = {styles.SeperatingBar}>

            </View>
          <View style = {styles.Logo}>

          </View>
          <View style = {styles.Main}>

          </View>
          <View style = {styles.BottomBar}>
              <Text style ={styles.BottomTextBar}>
                This is a production of H·I·T club
              </Text>
          </View>
      </View>
    );
  }
}