import styled from "styled-components";
import { motion, AnimatePresence } from 'framer-motion';
import useMousePosition from '../utils/hooks/useMousePosition';

const Pointer = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: pink;
    position: fixed;
    left: ${props=>props.left};
    top: ${props=>props.top};
`;

const CursorDefault = () => {
    const {x, y} = useMousePosition();

    return (
        <>
            <Pointer left={`${x}px`} top={`${y}px`} />
        </>
    )
}

export default CursorDefault;