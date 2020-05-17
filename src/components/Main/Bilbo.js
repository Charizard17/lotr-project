import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";
import bilbo from "./images/bilbo.png";

const FlashAnimation = keyframes`${flash}`;
const FlashDiv = styled.div`
  animation: 1s ${FlashAnimation};
`;

class Bilbo extends Component {
  render() {
    console.log("bilbooo");
    return (
      <FlashDiv>
        <img style={{ height: "800px" }} src={bilbo} alt="bilbo" />
      </FlashDiv>
    );
  }
}

export default Bilbo;
