import styled from "styled-components";
import { motion } from "framer-motion";

import { global_theme } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider";

const Container = styled.div`
    width: 55vw;
    height: 186px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: "cartograph_extralight";
    text-shadow: 0px 0px 10px rgba(51, 69, 185, 0.75);
`;

const ProjectInfoContainer = () => {
    return (
        <Container>
            
        </Container>
    )
}

export default ProjectInfoContainer;