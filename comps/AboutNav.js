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
    align-items: flex-end;
`;

const Row = styled.div`
    width: 230px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const Link = styled(motion.button)`
    font-size: 20px;
    border-style: none;
    background: none;
    font-family: "cartograph_extralight";
    color: ${props=>props.color};
`;

const Dorito = styled(motion.div)`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12.5px 0 12.5px 25px;
    border-color: transparent transparent transparent ${props=>props.color};
`;

const AboutNav = ({onIntroClick, onExpClick, onAspClick, onMeClick}) => {
    const { theme } = useTheme();
    const [dorito, setDorito] = useState("intro");

    const ClickIntro = () => {
        setDorito("intro");
        onIntroClick();
    }

    const ClickExp = () => {
        setDorito("exp");
        onExpClick();
    }

    const ClickAsp = () => {
        setDorito("asp");
        onAspClick();
    }

    const ClickMe = () => {
        setDorito("me");
        onMeClick();
    }

    return (
        <Container>
            <Column>
                <Row>
                    {dorito === "intro" &&
                        <Dorito
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: {type: "tween", duration: 0.5} }}
                            color={global_theme[theme].text}
                        />
                    }
                    <Link 
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 500}}
                        color={global_theme[theme].text} 
                        onClick={ClickIntro}
                    >
                        intro.txt
                    </Link>
                </Row>
                <Row>
                    {dorito === "exp" &&
                        <Dorito
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: {type: "tween", duration: 0.5} }}
                            color={global_theme[theme].text}
                        />
                    }
                    <Link 
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 500}}
                        color={global_theme[theme].text} 
                        onClick={ClickExp}
                    >
                        experience.txt
                    </Link>
                </Row>
                <Row>
                    {dorito === "asp" &&
                        <Dorito
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: {type: "tween", duration: 0.5} }}
                            color={global_theme[theme].text}
                        />
                    }
                    <Link 
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 500}}
                        color={global_theme[theme].text} 
                        onClick={ClickAsp}
                    >
                        aspirations.txt
                    </Link>
                </Row>
                <Row>
                    {dorito === "me" &&
                        <Dorito
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: {type: "tween", duration: 0.5} }}
                            color={global_theme[theme].text}
                        />
                    }
                    <Link 
                        whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 500}}
                        color={global_theme[theme].text} 
                        onClick={ClickMe}
                    >
                        me.png
                    </Link>
                </Row>
            </Column>
        </Container>
    )
}

export default AboutNav;