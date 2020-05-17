import React, { Component } from "react";

import aragorn from "./images/aragorn.png";

class Aragorn extends Component {
  render() {
    return (
      <div>
        <img style={{ height: "800px" }} src={aragorn} alt="aragorn" />
      </div>
    );
  }
}

export default Aragorn;
