import Image from 'next/image'
import styled from 'styled-components';
import { useState, useEffect } from "react";
import TypewritterText from '../comps/TypewritterText';

const LoadingPage = styled.div`
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
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const LoadPage = () => {
      setLoading(true);
    }
    setTimeout(LoadPage, 5000);
  }, [])

  return (
    <>
      {loading === false ? (
        <LoadingPage>
          <TypewritterText text='william laurel alvarez' textsize='16px'/>
        </LoadingPage>
      ) : (
        <div>asdasd</div>
      )}
    </>
  )
}

export default Home;
