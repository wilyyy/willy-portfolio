import styled from "styled-components";
import { motion } from "framer-motion";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// https://mui.com/components/accordion/
//https://mui.com/system/styled/

import { CloseOutline } from "styled-icons/evaicons-outline";
import { dropIn } from "../utils/ModalSettings";
import { global_theme } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider"
import ProjectsInfoBox from "./ProjectsInfoBox";

const Stroke = styled(motion.div)`
    width: 70vw;
    height: 652px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(109.11deg, ${props=>props.modalStrokeOuter} 0%, ${props=>props.modalStrokeInner} 51.68%, ${props=>props.modalStrokeOuter2} 100.23%);
    border-radius: 16px;
    font-family: "cartograph_extralight";
`;

const Container = styled.div`
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    background: linear-gradient(152.97deg, ${props=>props.modalFill1} 0%, ${props=>props.modalFill2} 100%);
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
    text-shadow: 0px 0px 10px ${props=>props.textShadow};
    padding-bottom: 5%;
    border: 1px solid ${props=>props.border};
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
            modalStrokeOuter={global_theme[theme].modalStrokeOuter}
            modalStrokeOuter2={global_theme[theme].modalStrokeOuter}
            modalStrokeInner={global_theme[theme].modalStrokeInner}
        >
            <Container
                modalFill1={global_theme[theme].modalFillValue1}
                modalFill2={global_theme[theme].modalFillValue2}
                border={global_theme[theme].modalBorder}
                textShadow={global_theme[theme].textShadow}
            >
                <Close color={global_theme[theme].text} onClick={onCloseClick}/>
                <Text H1>My Work</Text>
                <ProjectsInfoBox />
            </Container>
        </Stroke>
    )
}

export default ProjectsModal;