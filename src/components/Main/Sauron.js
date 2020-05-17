import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import sauron from "./images/sauron.png";

const ZoomInAnimation = keyframes`${zoomIn}`;
const ZoomInDiv = styled.div`
  animation: 3s ${ZoomInAnimation};
`;

class Sauron extends Component {
  render() {
    return (
      <ZoomInDiv>
        <img style={{ height: "800px" }} src={sauron} alt="sauron" />
      </ZoomInDiv>
    );
  }
}

export default Sauron;
