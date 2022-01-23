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
`;

const Preloader = () => {
    return (
        <Container>
            <TypewritterText text="npm start willy-portfolio" delay={40} />
        </Container>
    )
}

export default Preloader;