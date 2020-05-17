import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Aragorn from "./Aragorn";
import Bilbo from "./Bilbo";
import Gimli from "./Gimli";
import Legolas from "./Legolas";
import Ring from "./Ring";
import Frodo from "./Frodo";
import Gandalf from "./Gandalf";
import Sauron from "./Sauron";

class Main extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "5%" }} >
        <Switch>
          <Route exact path="/ring" component={Ring} />
          <Route exact path="/legolas" component={Legolas} />
          <Route exact path="/aragorn" component={Aragorn} />
          <Route exact path="/gimli" component={Gimli} />
          <Route exact path="/bilbo" component={Bilbo} />
          <Route exact path="/gandalf" component={Gandalf} />
          <Route exact path="/sauron" component={Sauron} />
          <Route exact path="/frodo" component={Frodo} />
        </Switch>
      </div>
    );
  }
}

export default Main;
