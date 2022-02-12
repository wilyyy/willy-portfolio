import styled from 'styled-components';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from '../utils/WillyThemeProvider';
import { global_theme } from '../utils/themeconfig';
import bgimage from "../public/darkbg.png";
import Preloader from '../comps/Preloader';
import Icon from '../comps/Icon';
import TopInfo from '../comps/TopInfo';
import ProjectsModal from '../comps/ProjectsModal';
import ContactModal from '../comps/ContactModal';
import ToolsModal from '../comps/ToolsModal';
import AboutModal from '../comps/AboutModal';

const Page = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  font-family: "cartograph_extralight";
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: crosshair;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props=>props.width};
  height: ${props=>props.height};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props=>props.width};
  height: ${props=>props.height};
  z-index: 1;
`;

const Temp = styled.div`
  position: absolute;
  z-index: 200;
`;

const TopCont = styled.div`
  position: absolute;
  top: 1%;
`;

const Home = () => {
  const {theme, setTheme} = useTheme();
  const [loading, setLoading] = useState(false); //set 2 false later
  const [modal, setModal] = useState("none"); //3 modes based on string

  useEffect(()=>{
    setTimeout(() => setLoading(true), 3000);
  }, [])

  return (
    <>      
      {loading === false ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Preloader />
          </motion.div>
        </AnimatePresence>
      ) : (
        <Page
          initial="pageInitial" 
          animate="pageAnimate" 
          variants={{
              pageInitial: {
                  opacity: 0
              },
              pageAnimate: {
                  opacity: 1
              },
          }}
        >
          <TopCont>
            <TopInfo />
          </TopCont>

          {modal === "projects" &&
            <Temp>
              <ProjectsModal
                onCloseClick={() => setModal("none")}
              />
            </Temp>
          }

          {modal === "about" &&
            <Temp>
              <AboutModal
                onCloseClick={() => setModal("none")}
              />
            </Temp>
          }

          {modal === "tools" &&
            <Temp>
              <ToolsModal
                onCloseClick={() => setModal("none")}
              />
            </Temp>
          }

          {modal === "contact" &&
            <Temp>
              <ContactModal 
                onSubmitClick={() => setModal("none")}
                onCloseClick={() => setModal("none")}
              />
            </Temp>
          }
          <Row width="auto" height="auto">
            <Icon folder onButtonClick={() => setModal("projects")}/>
            <Icon notepad onButtonClick={() => setModal("about")}/>
            <Icon gear onButtonClick={() => setModal("tools")}/>
            <Icon mail onButtonClick={() => setModal("contact")}/>
          </Row>
          
        </Page>
      )}
    </>
  )
}

export default Home;