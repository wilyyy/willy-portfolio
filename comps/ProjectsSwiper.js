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
    align-items: center;

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
    align-items: center;
    width: ${props=>props.width};
    height: 500px;
`;

const Row = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

const Column = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
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
                        compassPlus
                        width="230px"
                        height="466px"
                    />
                    <Info width="50%">
                        <h1>Compass Plus</h1>
                        <h4>Role: Full Stack Developer</h4>
                        <p>An all in one native mobile application for Translink's Compass Card system</p>
                        <p>React Native, PHP, MySQL, Firebase</p>
                        <Button text="View Case Study" onClick={()=>router.push("../compassplus")}/>
                    </Info>
                </ProjectCont>

                <ProjectCont>
                    <ProjectsInfo 
                        scout
                        width="480px"
                        height="277px"
                    />
                    <Info width="35%">
                        <h1>Scout</h1>
                        <h4>Role: Project Manager & Full Stack Developer</h4>
                        <p>Next generation anime database that aims to solve many common pain points of anime viewers</p>
                        <p>React.js / Next.js, Express, Mongoose, MongoDB</p>
                        <Button text="View Case Study" onClick={()=>router.push("../scout")}/>
                        <a href="https://scout-delta.vercel.app/" target="_blank">
                            <Button text="View Site" />
                        </a>
                    </Info>
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