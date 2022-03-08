import styled from "styled-components";
import { useRouter } from "next/router";
import Carousel from 'react-elastic-carousel'

import { global_theme, compassplus_colors } from "../utils/themeconfig";
import ProjectsInfo from "./ProjectsInfo";

const Container = styled.div`
    width: 90%;
    height: 500px;
    display: flex;

    .rec.rec-arrow {
        border-radius: 0;
    }
`;

const ProjectCont = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-between;
`;


const ProjectsSwiper = () => {
    const router = useRouter();

    return (
        <Container>
            <Carousel 
                itemsToShow={2}
                itemsToScroll={3}
            >
                <ProjectCont>
                    <ProjectsInfo 
                        title="CompassPlus"
                        bgcolor={compassplus_colors.CAROLINABLUE}
                        width="214px"
                        height="463px"
                    />
                </ProjectCont>

                <ProjectCont>
                    <ProjectsInfo 
                        title="Scout"
                        bgcolor="Orange"
                        width="500px"
                        height="500px"
                    />
                </ProjectCont>

                <ProjectCont>
                    <ProjectsInfo 
                        title="Scout"
                        bgcolor="Orange"
                        width="500px"
                        height="500px"
                    />
                </ProjectCont>
                
            </Carousel>
        </Container>
    )
}

export default ProjectsSwiper;