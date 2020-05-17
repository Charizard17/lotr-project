import React, { Component } from 'react';
import "./Ring.css";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import ring from "./images/ring-text.png";

const PulseAnimation = keyframes`${pulse}`;
const PulseDiv = styled.div`
  animation: 1s ${PulseAnimation};
`;

class Ring extends Component {
    render() {
        return (
            <PulseDiv style={{ height: "90vh" }} >
                <img className="ring-text" style={{ height: "750px" }} src={ring} alt="ring"/>
            </PulseDiv>
        )
    }
}

export default Ring;