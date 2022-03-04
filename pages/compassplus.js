import styled from "styled-components";
import { motion } from "framer-motion";
import { useTheme } from "../utils/WillyThemeProvider";
import { global_theme, compassplus_colors } from "../utils/themeconfig";

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${compassplus_colors.CAROLINABLUE};
    font-family: 'Ubuntu', sans-serif;
    display: flex;
`;

const CompassPlus = () => {
    return (
        <Page>
            <h1>CompassPlus</h1>
        </Page>
    )
}

export default CompassPlus;