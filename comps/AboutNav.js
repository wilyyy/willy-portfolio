import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import { global_theme } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider";

const Container = styled.div`
    width: 267px;
    height: 262px;
    text-shadow: 0px 0px 10px ${props=>props.textShadow};
    display: flex;
`;

const Column = styled.div`
    width: 224px;
    height: 262px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Link = styled(motion.button)`
    font-size: 20px;
    border-style: none;
    background: none;
    font-family: "cartograph_extralight";
    color: ${props=>props.color};
`;

const Dorito = styled(motion.div)`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12.5px 0 12.5px 25px;
    border-color: transparent transparent transparent #007bff;
`;

const AboutNav = ({onIntroClick, onExpClick, onAspClick, onMeClick}) => {
    const { theme } = useTheme();
    const [down, setDown] = useState("0");

    const ClickExp = () => {
        onExpClick();
        setDown("20%");
    }

    return (
        <Container
            textShadow={global_theme[theme].textShadow}
        >
            <Column>
                <Dorito 
                    initial={{ top: 0 }}
                    animate={{ top: down }}
                    transition={{type: "tween", duration: 1}}
                />
                <Link color={global_theme[theme].text} onClick={onIntroClick}>intro.txt</Link>
                <Link color={global_theme[theme].text} onClick={ClickExp}>experience.txt</Link>
                <Link color={global_theme[theme].text} onClick={onAspClick}>aspirations.txt</Link>
                <Link color={global_theme[theme].text} onClick={onMeClick}>me.png</Link>
            </Column>
        </Container>
    )
}

export default AboutNav;