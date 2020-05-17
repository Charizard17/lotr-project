import React, { Component } from "react";

import legolas from "./images/legolas.png";

class Legolas extends Component {
  render() {
    return (
      <div>
        <img style={{ height: "800px" }} src={legolas} alt="legolas" />
      </div>
    );
  }
}

export default Legolas;
