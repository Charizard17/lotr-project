import React, { Component } from "react";

import gimli from "./images/gimli.png";

class Gimli extends Component {
  render() {
    return (
      <div>
        <img style={{ height: "800px" }} src={gimli} alt="gimli" />
      </div>
    );
  }
}

export default Gimli;
