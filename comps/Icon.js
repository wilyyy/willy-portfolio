import styled from "styled-components";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from "../utils/WillyThemeProvider";
import folderIconGlass from '../public/folderIconGlass.svg';
import folderIconOutline from '../public/folderIconOutline.svg';
import notepadIconGlass from '../public/notepadIconGlass.svg';
import notepadIconOutline from '../public/notepadIconOutline.svg';
import gearIconGlass from '../public/gearIconGlass.svg';
import gearIconOutline from '../public/gearIconOutline.svg';
import mailIconGlass from '../public/mailIconGlass.svg';
import mailIconOutline from '../public/mailIconOutline.svg';

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: "cartograph";
    width: auto;
    height: 118px;
`;

const Icon = ({folder, notepad, gear, mail, onButtonClick}) => {
    const {theme} = useTheme();

    return (
        <>
            {folder && 
                <Container 
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.8}}
                    onClick={onButtonClick}
                    transition={{type: "spring", stiffness: 500}}
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
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.8}}
                    onClick={onButtonClick}
                    transition={{type: "spring", stiffness: 500}}
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
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.8}}
                    onClick={onButtonClick}
                    transition={{type: "spring", stiffness: 500}}
                >
                <Image
                    src={theme === 'dark' ? gearIconGlass : gearIconOutline}
                    width='150'
                    height='173'
                />
                <p>Tools</p>
                </Container>
            }

            {mail &&
                <Container 
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.8}}
                    onClick={onButtonClick}
                    transition={{type: "spring", stiffness: 500}}
                >
                <Image
                    src={theme === 'dark' ? mailIconGlass : mailIconOutline}
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