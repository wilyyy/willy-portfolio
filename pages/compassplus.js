import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "../utils/WillyThemeProvider";
import { global_theme, compassplus_colors } from "../utils/themeconfig";
import Intro from "../comps/compassplus/Intro";

const Page = styled.div`
    font-family: 'Ubuntu', sans-serif;
    display: flex;
`;

const CompassPlus = () => {
    return (
        <Page>
            <Intro />
        </Page>
    )
}

export default CompassPlus;