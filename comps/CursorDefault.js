import styled from "styled-components";
import { motion, AnimatePresence } from 'framer-motion';

import useMousePosition from '../utils/hooks/useMousePosition';
import { global_theme } from '../utils/themeconfig';
import { useTheme } from '../utils/WillyThemeProvider';

const Pointer = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: ${props=>props.bgcolor};
    position: fixed;
    left: ${props=>props.left};
    top: ${props=>props.top};
    pointer-events: none;
    transform: translate(-50%, -50%);
    -webkit-transition-duration: 100ms;
    transition-duration: 100ms;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    will-change: width, height, transform, border;
    z-index: 9999;
    box-shadow: 0px 0px 8px ${props=>props.boxShadow};
`;

const CursorDefault = () => {
    const {theme, setTheme} = useTheme();
    const {x, y} = useMousePosition();

    return (
        <>
            <Pointer 
                left={`${x}px`} 
                top={`${y}px`}
                bgcolor={global_theme[theme].text}
                boxShadow={global_theme[theme].textShadow}
            />
        </>
    )
}

export default CursorDefault;