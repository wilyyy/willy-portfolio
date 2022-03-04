import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import { global_theme } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider";
import { interpolateAs } from "next/dist/shared/lib/router/router";

const Container = styled.div`
    width: 45vw;
    height: 536px;
    padding: 1% 5%;
    line-height: 40px;
    color: ${props=>props.color};
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    background: linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 100%, rgba(255, 255, 255, 0) 100%);
    box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.9), inset 0px 6px 4px rgba(0, 0, 0, 0.9);
    border-style: none;
    border-radius: 10px;
    font-family: "cartograph_extralight";
    overflow-y: scroll;
    overflow-x: hidden;
`;

const AboutInfoBox = ({infoState}) => {
    const { theme } = useTheme();
    
    return (
        <Container>
            {infoState === "intro" && 
                <>
                    <p>
                    Hi there! I am William and I’m a web and mobile developer, currently living in Vancouver BC. Having built a variety of cross platform applications using design thinking methodologies in agile environments, I am currently seeking a career in front end development and engineering.
                    </p>
                    <p>In my free time, I enjoy reading a variety of literature, playing volleyball, esports and learning about psychology related topics.</p>
                </> 
            }
            {infoState === "experience" && 
                <>
                    <p>Although my primrary skills and aspirations lie in programming, I have experience with UI/UX design and consider myself a developer and designer hybrid. </p>
                    <p>Starting from a young age, I have over a decade worth of experience with design and digital media ranging from creating graphics with Photoshop to 3D modeling with 3DS Max and because of the time I’ve spent on these creative hobbies I’ve built a solid foundation and great intuition for visual design. My two years of computer science helped me obtain a good understanding of programming fundamentals and two more years at BCIT’s Digital Design and Development program helped me discover my passion and aptitude for application development. </p>
                </> 
            }
            {infoState === "aspirations" && 
                <>
                    <p>With aspirations of becoming a Full Stack Developer / Engineer in the future, here are some technologies I aim to explore in 2022: </p>
                    <ul>
                        <li>Further mastery of Express and MongoDB</li>
                        <li>Tailwind</li>
                        <li>Typescript</li>
                        <li>Redux</li>
                        <li>D3.js</li>
                        <li>PostgreSQL</li>
                        <li>Prisma</li>
                        <li>Python into Flask or Django</li>
                        <li>GO</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>Amazon Web Services</li>
                        <li>Angular</li>
                    </ul>
                    <p>Having worked with many skilled product and UX designers, I’ve also recently developed an obsession for product design and hope to read more about the concept of design thinking and implementing those ideologies in my future endeavours.</p>
                </> 
            }
            {infoState === "me" && 
                <>
                    <div style={{background: "#000", width: "425px", height: "450px"}}>cute pic of me C:</div>
                </> 
            }
        </Container>
    )
}

export default AboutInfoBox;