import styled from "styled-components";
import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from '../utils/hooks/useMousePosition';

const Pointer = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: pink;
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
`;

const CursorDefault = () => {
    const {x, y} = useMousePosition();

    return (
        <>
            <Pointer 
                left={`${x}px`} 
                top={`${y}px`} 
            />
        </>
    )
}

export default CursorDefault;