import styled from "styled-components";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { global_theme, compassplus_colors } from "../utils/themeconfig";

const Container = styled(motion.div)`
    width: ${props=>props.width};
    height: ${props=>props.height};
    border-radius: 11px;
    background-color: ${props=>props.bgcolor};
    display: flex;

    /* -webkit-filter: grayscale(100%);
    filter: grayscale(100%);

    :hover{
        -webkit-filter: grayscale(0%); 
        filter: grayscale(0%);
        transition: 1s;
    } */
`;

const ProjectsInfo = ({
    title,
    bgcolor,
    width,
    height,
    onButtonClick=()=>{}
}) => {
    
    return (
        <Container 
            onClick={onButtonClick} 
            bgcolor={bgcolor}
            width={width}
            height={height}
        >
            {title}
        </Container>
    )
}

export default ProjectsInfo;