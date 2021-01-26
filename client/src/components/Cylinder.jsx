import React, { Component } from 'react';


class Cylinder extends Component {
  render() {
    var text = "consume more!"
    return (
    <div class = "cylinder">
      <div class = "axis">
        <div class = "face one">{text}</div>
        <div class = "face two">{text}</div>
         <div class = "face three">{text}</div>
        <div class = "face four">{text}</div>
        <div class = "face five">{text}</div>
        <div class = "face six">{text}</div>
        <div class = "face seven">{text}</div>
        <div class = "face eight">{text}</div>
        <div class = "face nine">{text}</div>
        <div class = "face ten">{text}</div>
        <div class = "face eleven">{text}</div>
        <div class = "face twelve">{text}</div>
      </div>
    </div>

    );
  }
}

export default Cylinder;