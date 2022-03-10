import styled from "styled-components";
import { global_theme, compassplus_colors } from "../../utils/themeconfig";

const Page = styled.div`
    background-color: ${compassplus_colors.SPACECADET};
    color: ${compassplus_colors.CAROLINABLUE};
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const Development = () => {
    return (
        <Page>
            Development
        </Page>
    )

}

export default Development;