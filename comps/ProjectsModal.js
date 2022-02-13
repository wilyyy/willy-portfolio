import styled from "styled-components";
import { motion } from "framer-motion";

import { CloseOutline } from "styled-icons/evaicons-outline";
import { dropIn } from "../utils/ModalSettings";
import { global_theme } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider"

const Stroke = styled(motion.div)`
    width: 70vw;
    height: 652px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(109.11deg, #2F323D 0%, rgba(196, 196, 196, 0) 51.68%, #2F323D 100.23%);
    border-radius: 16px;
    font-family: "cartograph_extralight";
`;

const Container = styled.div`
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    background: linear-gradient(152.97deg, #151A1F 0%, #1C2024 0.01%, rgba(11, 12, 13, 0.65) 100%);
    border-top: 1px solid linear-gradient(90deg, #4F5466 0%, rgba(196, 196, 196, 0) 100%);
    border-left-color: linear-gradient(90deg, #4F5466 0%, rgba(196, 196, 196, 0) 100%);
    font-family: "cartograph_extralight";
    width: 99.9%;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0px 0px 20px rgba(46, 50, 75, 0.25);
    text-shadow: 0px 0px 10px rgba(51, 69, 185, 0.75);
    padding-bottom: 5%;
`;

const Text = styled.p`
    ${({ H1 }) => H1 && `
        font-size: 31px;
    `}

    ${({ H2 }) => H2 && `
        font-size: 20px;
    `}

    ${({ Para }) => Para && `
        font-size: ${props=>props.textsize};
    `}
`;

const Close = styled(CloseOutline)`
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 100;
    top: 2.5%;
    right: 2%;
    color: ${props=>props.color};
`;

const ProjectsModal = ({onCloseClick}) => {
    const { theme } = useTheme();

    return (
        <Stroke
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <Close color={global_theme[theme].text} onClick={onCloseClick}/>
                <Text H1>Projects</Text>
            </Container>
        </Stroke>
    )
}

export default ProjectsModal;