import React, { Component } from "react";

import gandalf from "./images/gandalf.png";

class Gandalf extends Component {
  render() {
    return (
      <div>
        <img style={{ height: "800px" }} src={gandalf} alt="gandalf" />
      </div>
    );
  }
}

export default Gandalf;
