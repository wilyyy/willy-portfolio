import styled from "styled-components";
import { useRouter } from "next/router";
import Carousel from 'react-elastic-carousel'

import { global_theme, compassplus_colors } from "../utils/themeconfig";
import ProjectsInfo from "./ProjectsInfo";
import Button from "./Button";

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
    justify-content: space-evenly;
    align-items: center;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    height: 500px;
`;

const ProjectsSwiper = () => {
    const router = useRouter();

    return (
        <Container>
            <Carousel 
                itemsToShow={1}
            >
                <ProjectCont>
                    <ProjectsInfo 
                        title="CompassPlus"
                        bgcolor={compassplus_colors.CAROLINABLUE}
                        width="214px"
                        height="463px"
                    />
                    <Info>
                        <h1>Compass Plus</h1>
                        <p>An all in one native mobile application for Translink's Compass Card system</p>
                        <p>React Native, PHP, MySQL, Firebase</p>
                        <Button text="View More" onClick={()=>router.push("../compassplus")}/>
                    </Info>
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
                        title="Steady"
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