import styled from "styled-components";
import { motion } from "framer-motion";
import { useTheme } from "../utils/WillyThemeProvider";
import { global_theme } from "../utils/themeconfig";

const Container = styled(motion.button)`
    width: 200px;
    height: 70px;
    color: ${props=>props.color};
    background: linear-gradient(152.97deg, rgba(11, 15, 19, 0.83) 0%, rgba(30, 52, 72, 0.65) 100%);
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    border-style: none;
    border: 1px solid rgba(47, 50, 61, 0.5);
    border-radius: 16px;
    font-family: "cartograph_extralight";
    font-size: 24px;

    :hover{
        filter: drop-shadow(0px 0px 4px rgba(125, 151, 219, 0.6));
        outline: none;
        transition: 0.5s;
    }
`;

const Button = ({onClick, text}) => {
    const { theme } = useTheme();

    return (
        <Container
            color={global_theme[theme].text}
            onClick={onClick}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.9}}
            transition={{type: "spring", stiffness: 500}}
        >
            {text}
        </Container>
    )
}

export default Button;