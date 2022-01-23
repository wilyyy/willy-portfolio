import Image from 'next/image'
import styled from 'styled-components';
import { useState, useEffect } from "react";
import TypewritterText from '../comps/TypewritterText';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-size: 60px;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Page>
      <TypewritterText text='npm install william portfolio' textsize='16px'/>
    </Page>
  )
}

export default Home;
