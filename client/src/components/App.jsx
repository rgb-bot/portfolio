import React, { Component } from 'react';
import Cylinder from './Cylinder.jsx';
import Menu from './Menu.jsx';


class App extends Component {
  render() {
    var text = "consume more!"
    return (
    <div class = "wrapper">
      <Cylinder/>
      <Menu/>
    </div>
    );
  }
}

export default App;