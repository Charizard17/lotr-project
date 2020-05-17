import React, { Component } from 'react';
import "./Ring.css";

import ring from "./images/ring-text.png";

class Ring extends Component {
    render() {
        return (
            <div>
                <img className="ring-text" style={{ height: "800px" }} src={ring} alt="ring"/>
            </div>
        )
    }
}

export default Ring;