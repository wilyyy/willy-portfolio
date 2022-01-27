import styled from 'styled-components';
import { useState, useEffect } from "react";

import { useTheme } from '../utils/WillyThemeProvider';
import { global_theme } from '../utils/ThemeConfig';
import Preloader from '../comps/Preloader';
import Icon from '../comps/Icon';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${global_theme.base};
  color: #fff;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [loading, setLoading] = useState(false); //set 2 false later

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
