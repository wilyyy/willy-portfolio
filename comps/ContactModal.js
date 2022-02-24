import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import emailjs, { init } from '@emailjs/browser';

import { CloseOutline } from "styled-icons/evaicons-outline";
import { global_theme } from "../utils/themeconfig";
import { useTheme } from "../utils/WillyThemeProvider";
import { dropIn } from "../utils/ModalSettings";
import Button from "./Button";

init("user_xDZUA2dRiLfXxCojRewvB");

const Stroke = styled(motion.div)`
    width: 70vw;
    height: 652px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(109.11deg, ${props=>props.modalStrokeOuter} 0%, ${props=>props.modalStrokeInner} 51.68%, ${props=>props.modalStrokeOuter2} 100.23%);
    border-radius: 16px;
`;

const Container = styled.form`
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    background: linear-gradient(152.97deg, ${props=>props.modalFill1} 0%, ${props=>props.modalFill2} 100%);
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
    text-shadow: 0px 0px 10px ${props=>props.textShadow};
    padding-bottom: 2%;
    border: 1px solid ${props=>props.border};
`;

const Row = styled.div`
    width: 70%;
    height: 100px;
    display: flex;
    justify-content: space-between;
`;

const H1 = styled.p`
    font-size: 31px;
    align-self: flex-start;
    position: relative;
    left: 4%;
`;

const InputCont = styled.form`
    width: ${props=>props.width};
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

    -webkit-autofill,
    -webkit-autofill:hover, 
    -webkit-autofill:focus,
    -webkit-autofill:active {
        backdrop-filter: blur(9px) saturate(164%);
        -webkit-backdrop-filter: blur(9px) saturate(164%);
        background: linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
        box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.6), inset 0px 6px 4px rgba(0, 0, 0, 0.6);
    }

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
    const [sentEmail, setSentEmail] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_awzl0lt', 'template_nwb72xd', form.current, 'user_xDZUA2dRiLfXxCojRewvB')
          .then((result) => {
              console.log(result.text);
              setSentEmail(true);
              alert("email send");
              e.target.reset();
          }, (error) => {
              console.log(error.text);
              alert("error");
          });
    };

    const { theme } = useTheme();

    return (
        <Stroke 
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            modalStrokeOuter={global_theme[theme].modalStrokeOuter}
            modalStrokeOuter2={global_theme[theme].modalStrokeOuter}
            modalStrokeInner={global_theme[theme].modalStrokeInner}
        >
            <Container
                modalFill1={global_theme[theme].modalFillValue1}
                modalFill2={global_theme[theme].modalFillValue2}
                border={global_theme[theme].modalBorder}
                textShadow={global_theme[theme].textShadow}
                onSubmit={sendEmail}
                ref={form}
            >
                <Close color={global_theme[theme].text} onClick={onCloseClick}/>
                <H1>Hey there, let's talk!</H1>
                <Row>
                    <InputCont width="45%" height="100px">
                        <p>Name</p>
                        <Input color={global_theme[theme].text} name="name"/>
                    </InputCont>
                    <InputCont width="45%" height="100px">
                        <p>Subject</p>
                        <Input color={global_theme[theme].text} name="subject"/>
                    </InputCont>
                </Row>
                <InputCont width="70%" height="100px">
                    <p>Email Address</p>
                    <Input color={global_theme[theme].text} type="email" name="email_address"/>
                </InputCont >
                <InputCont width="70%" height="200px">
                    <p>Message</p>
                    <TextArea color={global_theme[theme].text} name="message"/>
                </InputCont>
                <input type='submit' value='Send' />
                <Button onClick={onSubmitClick} text="Submit" />
            </Container>
        </Stroke>
    )
}

export default ContactModal;