import styled from "styled-components";
import { motion } from "framer-motion";
import { global_theme, compassplus_colors } from "../utils/themeconfig";

const Container = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 11px;
    background-color: ${props=>props.bgcolor};
    display: flex;
`;

const ProjectsInfo = ({
    title,
    bgcolor,
    stack,
    icon,
    type,
    onButtonClick
}) => {
    return (
        <Container onClick={onButtonClick} bgcolor={bgcolor}>
            {title}
        </Container>
    )
}

export default ProjectsInfo;