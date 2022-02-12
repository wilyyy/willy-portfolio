import styled from "styled-components";
import { motion } from "framer-motion";

import { CloseOutline } from "styled-icons/evaicons-outline";
import { global_theme } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider";
import { dropIn } from "../utils/ModalSettings";

const Stroke = styled(motion.div)`
    width: 70vw;
    height: 652px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(109.11deg, #2F323D 0%, rgba(196, 196, 196, 0) 51.68%, #2F323D 100.23%);
    border-radius: 16px;
`;

const Container = styled.div`
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    background: linear-gradient(152.97deg, #151A1F 0%, #1C2024 0.01%, rgba(11, 12, 13, 0.65) 100%);
    border-top: 1px solid linear-gradient(90deg, #4F5466 0%, rgba(196, 196, 196, 0) 100%);
    border-left-color: linear-gradient(90deg, #4F5466 0%, rgba(196, 196, 196, 0) 100%);
    font-family: "cartograph_extralight";
    width: 99.9%;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0px 0px 20px rgba(46, 50, 75, 0.25);
    text-shadow: 0px 0px 10px rgba(51, 69, 185, 0.75);
    padding-bottom: 2%;
`;

const H1 = styled.p`
    font-size: 31px;
    align-self: flex-start;
    position: relative;
    left: 4%;
`;

const InputCont = styled.div`
    min-width: 70%;
    max-width: 70%;
    height: ${props=>props.height};
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    color: ${props=>props.color};
    width: auto;
    height: 55px;
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    background: linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.6), inset 0px 6px 4px rgba(0, 0, 0, 0.6);
    border-style: none;
    border-radius: 5px;
    padding: 2%;
    font-family: "cartograph_extralight";

    :focus{
        filter: drop-shadow(0px 0px 4px rgba(125, 151, 219, 0.6));
        outline: none;
        transition: 0.5s;
    }
`;

const TextArea = styled.textarea`
    color: ${props=>props.color};
    min-width: 100%;
    max-width: 100%;
    min-height: 80px;
    padding: 2%;
    border-radius: 5px;
    border-style: none;
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    background: linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.6), inset 0px 6px 4px rgba(0, 0, 0, 0.6);
    font-family: "cartograph_extralight";

    :focus{
        filter: drop-shadow(0px 0px 4px rgba(125, 151, 219, 0.6));
        outline: none;
        transition: 0.5s;
    }

    ::-webkit-scrollbar {
        background-color: #000;
    }

    ::-webkit-scrollbar-track {
        background-color: #000; 
    }

    ::-webkit-scrollbar-thumb {
        background-color: #fff; 
    }
`;

const Button = styled.button`
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

const Close = styled(CloseOutline)`
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 100;
    top: 2.5%;
    right: 2%;
    color: ${props=>props.color};
`;

const ContactModal = ({onSubmitClick, onCloseClick}) => {
    const { theme } = useTheme();

    return (
        <Stroke 
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"  
        >
            <Container>
                <Close color={global_theme[theme].text} onClick={onCloseClick}/>
                <H1>Hit me up!</H1>
                <InputCont height="100px">
                    <p>Name</p>
                    <Input color={global_theme[theme].text}/>
                </InputCont>
                <InputCont height="100px">
                    <p>Email</p>
                    <Input color={global_theme[theme].text}/>
                </InputCont >
                <InputCont height="200px">
                    <p>Message</p>
                    <TextArea color={global_theme[theme].text}/>
                </InputCont>
                <Button 
                    color={global_theme[theme].text}
                    onClick={onSubmitClick}
                >
                    Submit
                </Button>
            </Container>
        </Stroke>
    )
}

export default ContactModal;