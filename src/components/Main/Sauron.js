import React, { Component } from "react";

import sauron from "./images/sauron.png";

class Sauron extends Component {
  render() {
    return (
      <div>
        <img style={{ height: "800px" }} src={sauron} alt="sauron" />
      </div>
    );
  }
}

export default Sauron;
