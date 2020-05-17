import React, { Component } from "react";

import bilbo from "./images/bilbo.png";

class Bilbo extends Component {
  render() {
    console.log("bilbooo");
    return (
      <div>
        <img style={{ height: "800px" }} src={bilbo} alt="bilbo" />
      </div>
    );
  }
}

export default Bilbo;
