import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import { global_theme } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider";
import Icon from "./Icon";

const Container = styled.div`
    width: 45vw;
    height: 536px;
    display: flex;
    padding: 5% 2%;
    line-height: 40px;
    color: ${props=>props.color};
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    background: linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.6), inset 0px 6px 4px rgba(0, 0, 0, 0.6);
    border-style: none;
    border-radius: 10px;
    font-family: "cartograph_extralight";
`;

const ProjectsInfoBox = ({web, mobile}) => {
    return (
        <Container>
            <Icon folder folderText="Projects" />
            <Icon folder folderText="Experiments" />
        </Container>
    )
}

export default ProjectsInfoBox;