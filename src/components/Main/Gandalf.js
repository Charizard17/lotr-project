import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { rotateIn } from "react-animations";
import gandalf from "./images/gandalf.png";

const RotateInAnimation = keyframes`${rotateIn}`;
const RotateInDiv = styled.div`
  animation: 2s ${RotateInAnimation};
`;

class Gandalf extends Component {
  render() {
    return (
      <RotateInDiv>
        <img style={{ height: "800px" }} src={gandalf} alt="gandalf" />
      </RotateInDiv>
    );
  }
}

export default Gandalf;
