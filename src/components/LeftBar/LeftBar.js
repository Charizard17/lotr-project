import React, { Component } from "react";
import { Link } from "react-router-dom";

class LeftBar extends Component {
  render() {
    return (
      <div>
        <div className="list-group text-center" style={{ marginTop: "45%", width: "50%", marginLeft: "20%" }}>
          <Link
            to="/ring"
            className="list-group-item list-group-item-action bg-secondary text-white rounded-pill mb-4"
          >
            Ring
          </Link>
          <Link
            to="/legolas"
            className="list-group-item list-group-item-action bg-secondary text-white rounded-pill mb-4"
          >
            Legolas
          </Link>
          <Link
            to="/aragorn"
            className="list-group-item list-group-item-action bg-secondary text-white rounded-pill mb-4"
          >
            Aragorn
          </Link>
          <Link
            to="/gimli"
            className="list-group-item list-group-item-action bg-secondary text-white rounded-pill mb-4"
          >
            Gimli
          </Link>
          <Link
            to="/bilbo"
            className="list-group-item list-group-item-action bg-secondary text-white rounded-pill mb-4"
          >
            Bilbo
          </Link>
          <Link
            to="/gandalf"
            className="list-group-item list-group-item-action bg-secondary text-white rounded-pill mb-4"
          >
            Gandalf
          </Link>
          <Link
            to="/sauron"
            className="list-group-item list-group-item-action bg-secondary text-white rounded-pill mb-4"
          >
            Sauron
          </Link>
          <Link
            to="/frodo"
            className="list-group-item list-group-item-action bg-secondary text-white rounded-pill mb-4"
          >
            Frodo
          </Link>
        </div>
      </div>
    );
  }
}

export default LeftBar;
