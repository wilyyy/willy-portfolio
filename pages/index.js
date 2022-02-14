import styled from 'styled-components';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from '../utils/WillyThemeProvider';
import { useWindowDimensions } from '../utils/useWindowDimensions';
import { global_theme } from '../utils/themeconfig';
import { modalBg } from '../utils/ModalSettings';
import bgimage from "../public/darkbg.png";
import Preloader from '../comps/Preloader';
import Icon from '../comps/Icon';
import TopInfo from '../comps/TopInfo';
import ProjectsModal from '../comps/ProjectsModal';
import ContactModal from '../comps/ContactModal';
import ToolsModal from '../comps/ToolsModal';
import AboutModal from '../comps/AboutModal';
import TypewritterText from '../comps/TypewritterText';

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
  justify-content: space-between;
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

const Text = styled.p`
  text-align: center;
  text-shadow: 0px 0px 10px rgba(51, 69, 185, 0.75);
  ${({ H1 }) => H1 && `
      font-size: 31px;
  `}

  ${({ Para }) => Para && `
      font-size: ${props=>props.textsize};
      color: ${props=>props.color};
  `}
`;

const ModalCont = styled(motion.div)`
  position: absolute;
  z-index: 200;
`;

const ModalBg = styled.div`
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(9px) saturate(164%);
  -webkit-backdrop-filter: blur(9px) saturate(164%);
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
            transition={{type: "tween", duration: 1}}
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
                  opacity: 1,
                  transition:{type: "tween", duration: 1}
              },
          }}
        >
          <TopCont>
            <TopInfo />
          </TopCont>
          {modal === "projects" &&
            <>
              <ModalCont>
                <ProjectsModal
                  onCloseClick={() => setModal("none")}
                />
              </ModalCont>
              <ModalBg variants={modalBg} initial="hidden" animate="visible" exit="exit"/>
            </>
          }
          {modal === "about" &&
            <>
              <ModalCont>
                <AboutModal
                  onCloseClick={() => setModal("none")}
                />
              </ModalCont>
              <ModalBg variants={modalBg} initial="hidden" animate="visible" exit="exit"/>
            </>
          }
          {modal === "tools" &&
          <>
            <ModalCont>
              <ToolsModal
                onCloseClick={() => setModal("none")}
              />
            </ModalCont>
            <ModalBg variants={modalBg} initial="hidden" animate="visible" exit="exit"/>
          </>
          }
          {modal === "contact" &&
            <>
              <ModalCont>
                <ContactModal
                  onCloseClick={() => setModal("none")}
                  onSubmitClick={() => setModal("none")}
                />
              </ModalCont>
              <ModalBg variants={modalBg} initial="hidden" animate="visible" exit="exit"/>
            </>
          }
          <Column width="40%" height="250px">
            <Text Para textsize="20px" color={global_theme[theme].text}>
              <TypewritterText text='The practice of William Laurel Alvarez, a web / mobile developer based in Vancouver, Canada' delay={40}/>
            </Text>
            <Row width="auto" height="auto">
              <Icon folder onButtonClick={() => setModal("projects")}/>
              <Icon notepad onButtonClick={() => setModal("about")}/>
              <Icon gear onButtonClick={() => setModal("tools")}/>
              <Icon mail onButtonClick={() => setModal("contact")}/>
            </Row>
          </Column>
        </Page>
      )}
    </>
  )
}

export default Home;