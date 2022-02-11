import styled from "styled-components";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from "../utils/WillyThemeProvider";
import folderIconGlass from '../public/folderIconGlass.svg';
import folderIconOutline from '../public/folderIconOutline.svg';
import notepadIconGlass from '../public/notepadIconGlass.svg';
import notepadIconOutline from '../public/notepadIconOutline.svg';
import { global_theme } from "../utils/themeconfig";

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: "cartograph";
    width: auto;
    height: 118px;
`;

const Icon = ({
    folder,
    notepad,
    gear,
    mail,
    onButtonClick=()=>{}
}) => {
    const {theme} = useTheme();

    //change stroke back to 6

    return (
        <>
            {folder && 
                <Container 
                    whileHover={{scale: 1.5}}
                    whileTap={{scale: 0.8}}
                    onClick={onButtonClick}
                >
                    <Image
                        src={theme === 'dark' ? folderIconGlass : folderIconOutline}
                        width='146'
                        height='118'
                    />
                    <p>Work</p>
                </Container>
            }

            {notepad &&
                <Container 
                    whileHover={{scale: 1.5}}
                    whileTap={{scale: 0.8}}
                    onClick={onButtonClick}
                >
                <Image
                    src={theme === 'dark' ? notepadIconGlass : notepadIconOutline}
                    width='150'
                    height='173'
                />
                <p>About</p>
                </Container>
            }

            {gear &&
                <Container 
                    whileHover={{scale: 1.5}}
                    whileTap={{scale: 0.8}}
                    onClick={onButtonClick}
                >
                <Image
                    src={theme === 'dark' ? notepadIconGlass : notepadIconOutline}
                    width='150'
                    height='173'
                />
                <p>Tools</p>
                </Container>
            }

            {mail &&
                <Container 
                    whileHover={{scale: 1.5}}
                    whileTap={{scale: 0.8}}
                    onClick={onButtonClick}
                >
                <Image
                    src={theme === 'dark' ? notepadIconGlass : notepadIconOutline}
                    width='150'
                    height='173'
                />
                <p>Contact</p>
                </Container>
            }
        </>
    )
}

export default Icon;