import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";
import frodo from "./images/frodo.png";

const SlideInRightAnimation = keyframes`${slideInRight}`;
const SlideInRightDiv = styled.div`
  animation: 3s ${SlideInRightAnimation};
`;

class Frodo extends Component {
  render() {
    return (
      <SlideInRightDiv>
        <img style={{ height: "800px" }} src={frodo} alt="frodo" />
      </SlideInRightDiv>
    );
  }
}

export default Frodo;
