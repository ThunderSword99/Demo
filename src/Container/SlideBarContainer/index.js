import React, { Component } from "react";
import SlideBar from "../../Components/SlideBar";

export default class SlideBarContainer extends Component {
  render() {
    return (
      <SlideBar navigation={this.props.navigation}/>
    );
  }
}