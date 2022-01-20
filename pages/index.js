import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import { useState, useEffect } from "react";

const Test = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const [changeText, setChangeText] = useState(false);
  const generateText = () => {
    setChangeText(!changeText);
  }
  return (
    <>
    asdsad
    </>
  )
}
