import Image from 'next/image'
import styled from 'styled-components';
import { useState, useEffect } from "react";

import { useTheme } from '../utils/WillyThemeProvider';
import TypewritterText from '../comps/TypewritterText';
import Preloader from '../comps/Preloader';
import Icon from '../comps/Icon';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  color: #fff;
  font-size: 60px;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const LoadPage = () => {
      setLoading(true);
    }
    setTimeout(LoadPage, 5000);
  }, [])

  return (
    <Page>
      {loading === false ? (
        <Preloader />
      ) : (
        <Icon folder />
      )}
    </Page>
  )
}

export default Home;
