import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounceInUp } from "react-animations";
import legolas from "./images/legolas.png";

const BounceInUpAnimation = keyframes`${bounceInUp}`;
const BounceInUpDiv = styled.div`
  animation: 2s ${BounceInUpAnimation};
`;

class Legolas extends Component {
  render() {
    return (
      <BounceInUpDiv>
        <img style={{ height: "800px" }} src={legolas} alt="legolas" />
      </BounceInUpDiv>
    );
  }
}

export default Legolas;
