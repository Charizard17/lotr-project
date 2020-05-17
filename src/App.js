import React from "react";
import "./App.css";
import LeftBar from "./components/LeftBar/LeftBar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-3" style={{ height: "100vh" }}>
            <LeftBar />
          </div>
          <div className="col-9" style={{ height: "100vh" }}>
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
