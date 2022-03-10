import styled from "styled-components";
import { global_theme, compassplus_colors } from "../../utils/themeconfig";

const Page = styled.div`
    background-color: ${compassplus_colors.CAROLINABLUE};
    color: ${compassplus_colors.ALICEBLUE};
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const CaseStudy = () => {
    return (
        <Page>
            Case Study
        </Page>
    )

}

export default CaseStudy;