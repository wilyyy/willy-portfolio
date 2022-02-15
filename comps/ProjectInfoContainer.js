import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import { global_theme } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider";
import test from "../public/darkbg.png";

const Container = styled.div`
    width: 1076px;
    height: 186px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: "cartograph_extralight";
    text-shadow: 0px 0px 10px rgba(51, 69, 185, 0.75);
    border-radius: 11px;
    overflow: hidden;
`;

const ProjectInfoContainer = () => {
    return (
        <Container>
            <Image src={test} width={1076} height={186}/>
        </Container>
    )
}

export default ProjectInfoContainer;