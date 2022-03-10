import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "../utils/WillyThemeProvider";
import { global_theme, compassplus_colors } from "../utils/themeconfig";
import Intro from "../comps/compassplus/Intro";
import CaseStudy from "../comps/compassplus/CaseStudy";
import Development from "../comps/compassplus/Development";

const Page = styled.div`
    font-family: 'Ubuntu', sans-serif;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const CompassPlus = () => {
    return (
        <Page>
            <Intro />
            <CaseStudy />
            <Development />
        </Page>
    )
}

export default CompassPlus;