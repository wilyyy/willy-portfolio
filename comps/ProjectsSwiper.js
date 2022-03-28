// https://sag1v.github.io/react-elastic-carousel/
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Carousel from "react-elastic-carousel";
import { StyledIconBase } from "@styled-icons/styled-icon";

import { Github } from "@styled-icons/bootstrap/Github";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { Php } from "@styled-icons/simple-icons/Php";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Storybook } from "@styled-icons/simple-icons/Storybook";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Express } from "@styled-icons/simple-icons/Express";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { DigitalOcean } from "@styled-icons/fa-brands/DigitalOcean";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { global_theme, compassplus_colors } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider";
import ProjectsInfo from "./ProjectsInfo";
import Button from "./Button";

const Container = styled.div`
   width: 90%;
   height: auto;
   display: flex;
   align-items: center;

   .rec.rec-arrow {
      border-radius: 0;
   }

   ${StyledIconBase} {
      color: ${(props) => props.color};
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
   width: ${(props) => props.width};
   height: ${(props) => props.height};
`;

const Text = styled.p`
   margin: 5px;
   ${({ H1 }) =>
      H1 &&
      `
        font-size: 22px;
        font-weight: 700;
        text-decoration: underline;
    `}

   ${({ H2 }) =>
      H2 &&
      `
        font-size: 16px;
    `}

    ${({ Para }) =>
      Para &&
      `
        font-size: 14px;
    `}

    ${({ Icon }) =>
      Icon &&
      `
        font-size: 12px;
    `}
`;

const Row = styled.div`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   display: flex;
   justify-content: space-around;
   align-items: center;
`;

const Column = styled.div`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   display: flex;
   flex-direction: column;

   ${({ Center }) =>
      Center &&
      `
        justify-content: center;
        align-items: center;
        text-align: center;
    `}
`;

const StackCont = styled.div`
   width: 100%;
   height: 120px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   background: ${(props) => props.bgcolor};
   border-radius: 4px;
   border: 1px solid ${(props) => props.border};
`;

const ProjectsSwiper = () => {
   const router = useRouter();
   const { theme } = useTheme();

   return (
      <Container>
         <Carousel itemsToShow={1}>
            <ProjectCont>
               <ProjectsInfo compassPlus width="230px" height="466px" />
               <Info width="50%" height="560px">
                  <Column width="100%" height="60px">
                     <Text H1>CompassPlus</Text>
                     <Text H2>
                        <b>Role:</b> Full Stack Developer
                     </Text>
                  </Column>
                  <Text Para>
                     An all in one native mobile application for Translink's Compass Card
                     system.
                  </Text>
                  <Column width="100%" height="150px">
                     <Text H2>
                        <b>Stack:</b>
                     </Text>
                     <StackCont
                        border={theme === "dark" ? "#2F323D" : "#000"}
                        bgcolor={theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "none"}
                     >
                        <Column width="20px" height="auto" Center>
                           <LogoReact size={30} />
                           <Text Icon>React Native</Text>
                        </Column>
                        <Column width="20px" height="auto" Center>
                           <Firebase size={30} />
                           <Text Icon>Firebase</Text>
                        </Column>
                        <Column width="20px" height="auto" Center>
                           <Php size={30} />
                           <Text Icon>PHP</Text>
                        </Column>
                        <Column width="20px" height="auto" Center>
                           <Mysql size={30} />
                           <Text Icon>MySQL</Text>
                        </Column>
                        <Column width="20px" height="auto" Center>
                           <DigitalOcean size={30} />
                           <Text Icon>Digital Ocean</Text>
                        </Column>
                     </StackCont>
                  </Column>
                  <Row width="100%" height="70px">
                     <Button
                        text="View Case Study"
                        onClick={() => router.push("../compassplus")}
                     />
                     <motion.a
                        initial={{ opacity: 1 }}
                        animate={{
                           opacity: 1,
                           transition: { type: "tween", duration: 2 },
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        href="https://github.com/wilyyy/CompassPlus"
                        target="_blank"
                     >
                        <Column width="auto" height="auto" Center>
                           <Github size={40} />
                           <Text Icon>Client</Text>
                        </Column>
                     </motion.a>
                     <motion.a
                        initial={{ opacity: 1 }}
                        animate={{
                           opacity: 1,
                           transition: { type: "tween", duration: 2 },
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        href="https://github.com/wilyyy/CompassPlus-Serverside"
                        target="_blank"
                     >
                        <Column width="auto" height="auto" Center>
                           <Github size={40} />
                           <Text Icon>Server</Text>
                        </Column>
                     </motion.a>
                  </Row>
               </Info>
            </ProjectCont>

            <ProjectCont>
               <ProjectsInfo scout width="450px" height="260px" />
               <Info width="45%" height="600px">
                  <Column width="100%" height="60px">
                     <Text H1>Scout - In Development</Text>
                     <Text H2>
                        <b>Role:</b> Project Manager, Full Stack Developer
                     </Text>
                  </Column>
                  <Text Para>
                     An anime database using machine learning to recommend anime to users
                     based on their behaviour
                  </Text>
                  <Column width="100%" height="150px">
                     <Text H2>
                        <b>Stack:</b>
                     </Text>
                     <StackCont
                        border={theme === "dark" ? "#2F323D" : "#000"}
                        bgcolor={theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "none"}
                     >
                        <Column width="20px" height="auto" Center>
                           <LogoReact size={30} />
                           <Text Icon>React.js</Text>
                        </Column>
                        <Column width="20px" height="auto" Center>
                           <Nextdotjs size={30} />
                           <Text Icon>Next.js</Text>
                        </Column>
                        <Column width="20px" height="auto" Center>
                           <Express size={30} />
                           <Text Icon>Express.js</Text>
                        </Column>
                        <Column width="20px" height="auto" Center>
                           <Mongodb size={30} />
                           <Text Icon>MongoDB</Text>
                        </Column>
                        <Column width="20px" height="auto" Center>
                           <Nodejs size={30} />
                           <Text Icon>Node.js</Text>
                        </Column>
                     </StackCont>
                  </Column>
                  <Row width="100%" height="70px">
                     <Button
                        text="View Case Study"
                        onClick={() => router.push("../scout")}
                        width="133px"
                        height="47px"
                        fontsize="14px"
                     />
                     <a href="https://scout-delta.vercel.app/" target="_blank">
                        <Button
                           text="View Site"
                           width="133px"
                           height="47px"
                           fontsize="14px"
                        />
                     </a>
                     <motion.a
                        initial={{ opacity: 1 }}
                        animate={{
                           opacity: 1,
                           transition: { type: "tween", duration: 2 },
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        href="https://github.com/wilyyy/Scout"
                        target="_blank"
                     >
                        <Column width="auto" height="auto" Center>
                           <Github size={40} />
                           <Text Icon>Client</Text>
                        </Column>
                     </motion.a>
                     <motion.a
                        initial={{ opacity: 1 }}
                        animate={{
                           opacity: 1,
                           transition: { type: "tween", duration: 2 },
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 500 }}
                        href="https://github.com/wilyyy/scout-serverside"
                        target="_blank"
                     >
                        <Column width="auto" height="auto" Center>
                           <Github size={40} />
                           <Text Icon>Server</Text>
                        </Column>
                     </motion.a>
                  </Row>
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
   );
};

export default ProjectsSwiper;
