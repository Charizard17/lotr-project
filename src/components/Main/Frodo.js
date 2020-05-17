import React, { Component } from "react";

import frodo from "./images/frodo.png";

class Frodo extends Component {
  render() {
    return (
      <div>
        <img style={{ height: "800px" }} src={frodo} alt="frodo" />
      </div>
    );
  }
}

export default Frodo;
