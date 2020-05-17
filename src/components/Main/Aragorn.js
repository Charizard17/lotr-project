import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { flipInY } from "react-animations";
import aragorn from "./images/aragorn.png";

const FlipInYAnimation = keyframes`${flipInY}`;
const FlipInYDiv = styled.div`
  animation: 1s ${FlipInYAnimation};
`;

class Aragorn extends Component {
  render() {
    return (
      <FlipInYDiv>
        <img style={{ height: "800px" }} src={aragorn} alt="aragorn" />
      </FlipInYDiv>
    );
  }
}

export default Aragorn;
