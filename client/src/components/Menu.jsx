import React, { Component } from 'react';

class Menu extends Component {
  render() {
    var text = "consume more!"
    return (
    <div class = "info">
      <div class = "icon LI">
        <a href = "https://www.linkedin.com/in/luke-yeom/">
          <img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"></img>
        </a>
      </div>
      <div class = "icon twitter">
        <a href = "https://twitter.com/LukeYeom">
          <img src = "https://www.pinclipart.com/picdir/big/74-740310_transparent-background-twitter-logo-clipart.png"></img>
        </a>
      </div>
    </div>
    );
  }
}

export default Menu;