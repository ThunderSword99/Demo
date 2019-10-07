import React, { Component } from "react";
import Home from "../../Components/Home";

export default class HomeContainer extends Component {
  render() {
    return (
      <Home navigation={this.props.navigation}/>
    );
  }
}