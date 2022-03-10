import styled from "styled-components";
import { useRouter } from "next/router";
import Image from 'next/image';
import { global_theme, compassplus_colors } from "../../utils/themeconfig";

const Page = styled.div`
    background-color: ${compassplus_colors.ALICEBLUE};
    color: ${compassplus_colors.CAROLINABLUE};
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const Intro = () => {
    return (
        <Page>
            <h1>CompassPlus</h1>
        </Page>
    )

}

export default Intro;