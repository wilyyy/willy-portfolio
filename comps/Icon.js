import styled from "styled-components";
import Image from 'next/image';

import { useTheme } from "../utils/WillyThemeProvider";
import folderIconGlass from '../public/folderIconGlass.svg';
import folderIconOutline from '../public/folderIconOutline.svg';
import { global_theme } from "../utils/themeconfig";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${global_theme.text};
    font-family: "cartograph";
    width: 146px;
    height: 118px;
`;

const Icon = ({
    folder,
    notepad
}) => {
    const {theme} = useTheme();

    return (
        <>
            {folder && 
                <Container>
                    <Image
                        src={theme === 'dark' ? folderIconGlass : folderIconOutline}
                        width='146'
                        height='118'
                    />
                    <p>Work</p>
                </Container>
            }

            {notepad &&
                <p>Notepad</p>
            }
        </>
    )
}

export default Icon;