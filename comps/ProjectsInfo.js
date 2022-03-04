import styled from "styled-components";
import { global_theme, compassplus_colors } from "../utils/themeconfig";

const Container = styled.div`
    width: 300px;
    height: 200px;
    border-radius: 11px;
    background-color: ${props=>props.bgcolor};
    display: flex;
`;

const ProjectsInfo = ({
    title="CompassPlus"
}) => {
    return (
        <Container bgcolor={compassplus_colors.CAROLINABLUE}>
            {title}
        </Container>
    )
}

export default ProjectsInfo;