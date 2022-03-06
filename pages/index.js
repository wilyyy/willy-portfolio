import styled from 'styled-components';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
//..
import { useTheme } from '../utils/WillyThemeProvider';
import { useWindowDimensions } from '../utils/hooks/useWindowDimensions';
import { global_theme } from '../utils/themeconfig';
import { modalBg, slideInFromBottom, fadeIn } from '../utils/ModalSettings';
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
  text-shadow: 0px 0px 8px ${props=>props.textShadow};
  overflow: hidden;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${props=>props.width};
  height: ${props=>props.height};
`;

const Row = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props=>props.width};
  height: ${props=>props.height};
  z-index: 1;
`;

const Text = styled(motion.p)`
  text-align: center;
  
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
  background: rgba(0, 0, 0, 0.0);
  backdrop-filter: blur(5px) saturate(164%);
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
    setTimeout(() => setLoading(true), 4500); //switch to 3000 in final
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
          textShadow={global_theme[theme].textShadow}
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
              <ModalBg 
                variants={modalBg} 
                initial="hidden" 
                animate="visible" 
                exit="exit"
                onClick={() => setModal("none")}
              />
            </>
          }
          {modal === "about" &&
            <>
              <ModalCont>
                <AboutModal
                  onCloseClick={() => setModal("none")}
                />
              </ModalCont>
              <ModalBg 
                variants={modalBg} 
                initial="hidden" 
                animate="visible" 
                exit="exit"
                onClick={() => setModal("none")}
              />
            </>
          }
          {modal === "tools" &&
          <>
            <ModalCont>
              <ToolsModal
                onCloseClick={() => setModal("none")}
              />
            </ModalCont>
            <ModalBg 
              variants={modalBg} 
              initial="hidden" 
              animate="visible" 
              exit="exit"
              onClick={() => setModal("none")}
            />
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
              <ModalBg 
                variants={modalBg} 
                initial="hidden" 
                animate="visible" 
                exit="exit"
                onClick={() => setModal("none")}
              />
            </>
          }
          <Column width="40%" height="250px">
            <Text Para textsize="20px" color={global_theme[theme].text}>
              <TypewritterText 
                text='The practice of William Laurel Alvarez, a web / mobile developer based in Vancouver, Canada' 
                delay={0}
              />
            </Text>
            <Row 
              width="auto" 
              height="auto"
            >
              <Icon folder folderText="Work" onButtonClick={() => setModal("projects")}/>
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