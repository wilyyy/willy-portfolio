import styled from "styled-components";
import Image from 'next/image';

import { useTheme } from "../utils/WillyThemeProvider";
import folderIconGlass from '../public/folderIconGlass.svg';
import folderIconOutline from '../public/folderIconOutline.svg';
import notepadIconGlass from '../public/notepadIconGlass.svg';
import notepadIconOutline from '../public/notepadIconOutline.svg';
import { global_theme } from "../utils/themeconfig";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${global_theme.text};
    font-family: "cartograph";
    width: auto;
    height: 118px;
`;

const Icon = ({
    folder,
    notepad,
    mail,
    onButtonClick=()=>{}
}) => {
    const {theme} = useTheme();

    //change stroke back to 6

    return (
        <>
            {folder && 
                <Container onClick={onButtonClick}>
                    <Image
                        src={theme === 'dark' ? folderIconGlass : folderIconOutline}
                        width='146'
                        height='118'
                    />
                    <p>Work</p>
                </Container>
            }

            {notepad &&
                <Container onClick={onButtonClick}>
                <Image
                    src={theme === 'dark' ? notepadIconGlass : notepadIconOutline}
                    width='150'
                    height='173'
                />
                <p>About</p>
                </Container>
            }

            {mail &&
                <p>Contact</p>
            }
        </>
    )
}

export default Icon;