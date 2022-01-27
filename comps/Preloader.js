import styled from 'styled-components';
import { useState, useEffect } from "react";

import TypewritterText from './TypewritterText';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    font-family: "consolas";
    text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.7);
`;

const Preloader = () => {
    return (
        <Container>
            <TypewritterText text="npm start willy-portfolio" delay={40} />
            <TypewritterText text="work in progress" delay={40} />
        </Container>
    )
}

export default Preloader;