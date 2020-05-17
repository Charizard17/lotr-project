import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import gimli from "./images/gimli.png";

const SlideInLeftAnimation = keyframes`${slideInLeft}`;
const SlideInLeftDiv = styled.div`
  animation: 3s ${SlideInLeftAnimation};
`;

class Gimli extends Component {
  render() {
    return (
        <SlideInLeftDiv>
          <img style={{ height: "800px" }} src={gimli} alt="gimli" />
        </SlideInLeftDiv>
    );
  }
}

export default Gimli;
