import styled from 'styled-components';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from '../utils/WillyThemeProvider';
import { global_theme } from '../utils/themeconfig';
import Preloader from '../comps/Preloader';
import Icon from '../comps/Icon';
import ProjectsModal from '../comps/ProjectsModal';

const Page = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: ${global_theme.base};
  color: ${global_theme.text};
  font-family: "cartograph";
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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

const Home = ({isVisible}) => {
  const {theme, setTheme} = useTheme();
  const [loading, setLoading] = useState(false); //set 2 false later
  const [modal, setModal] = useState("none");

  useEffect(()=>{
    const LoadPage = () => {
      setLoading(true);
    }
    setTimeout(LoadPage, 3000);
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
          <button 
            onClick={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}
            style={{position: "absolute", right: '2%', top:'2%', width: '100px', height: '50px'}}
          >test</button>
          <Column width='650px' height='126px'>
            <h1>William Laurel Alvarez</h1>
            <h3>Web / Mobile Developer</h3>
          </Column>
          <Temp>
            <ProjectsModal />
          </Temp>
          <Row width="auto" height="auto">
            <Icon folder onButtonClick={()=> alert("clicked")}/>
            <Icon notepad />
            <Icon mail />
          </Row>
          
        </Page>
      )}
    </>
  )
}

export default Home;
