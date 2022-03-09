import styled from 'styled-components';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
// muh name, github, linkedin, current day & time api & dark mode switch

import DateTime from './DateTime';
import { useTheme } from '../utils/WillyThemeProvider';
import { global_theme } from '../utils/themeconfig';
import { Calendar } from '@styled-icons/bootstrap/Calendar';
import { Location } from '@styled-icons/ionicons-sharp/Location';
import { Clock } from '@styled-icons/bootstrap/Clock';
import { Github } from '@styled-icons/bootstrap/Github';
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { LinkedinBox } from '@styled-icons/remix-line/LinkedinBox';
import {StyledIconBase} from '@styled-icons/styled-icon';
import lightswitch_dark from '../public/lightswitch_light.svg';
import lightswitch_outline from '../public/lightswitch_outline.svg';

const Container = styled.div`
    width: 95vw;
    height: 10vw; //temp
    text-shadow: 0px 0px 10px ${props=>props.textShadow};
    font-family: "cartograph_extralight";
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${StyledIconBase} {
        color: ${props=>props.color};
    }
`;

const Column = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${({ SwitchCont }) => SwitchCont && `
        align-items: center;
    `}
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    width: ${props=>props.width};
    height: ${props=>props.height};

    ${({right}) => right && `
        justify-content: space-between;
        align-items: flex-start;
    `}

    ${({innerright}) => innerright && `
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
        top: 18%;
    `}
`;

const Spacer = styled.div`
    width: 10px;
`;

const Text = styled.p`
    ${({ H1 }) => H1 && `
        font-size: 31px;
    `}

    ${({ Para }) => Para && `
        font-size: ${props=>props.textsize};
    `}
`;

const CalendarIcon = styled(Calendar)`
    width: 20px;
    height: 22px;
    color: ${props=>props.color};
`;

const LocationIcon = styled(Location)`
    width: 20px;
    height: 29px;
    color: ${props=>props.color};
`;

const ClockIcon = styled(Clock)`
    width: 20px;
    height: 20px;
    color: ${props=>props.color};
`;

const TopInfo = () => {
    const {theme, setTheme} = useTheme();
    return (
        <Container 
            textShadow={global_theme[theme].textShadow}
            color={global_theme[theme].text}
        >
            <Column width="247px" height="109px">
                <Row width="243px" height="24px">
                    <CalendarIcon color={global_theme[theme].text} />
                    <Spacer />
                    <DateTime date />
                </Row>
                <Row width="193px" height="29px">
                    <LocationIcon color={global_theme[theme].text} />
                    <Spacer />
                    <Text Para textsize="16px">Vancouver, BC</Text>
                </Row>
                <Row width="140px" height="24px">
                    <ClockIcon color={global_theme[theme].text} />
                    <Spacer />
                    <DateTime time />
                </Row>
            </Column>
            <Row width="170px" height="109px" right>
                <Row width="100px" height="109px" innerright>
                    {theme === 'dark' ? (
                        <AnimatePresence>
                            <motion.a
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1, transition: {type: "tween", duration: 2} }}
                                exit={{ opacity: 0 }}
                                whileHover={{scale: 1.3}}
                                transition={{type: "spring", stiffness: 500}}
                                href="https://github.com/wilyyy"
                                target="_blank"
                            >
                                <Github size={40}/>
                            </motion.a>
                        </AnimatePresence>
                    ) : (
                        <AnimatePresence>
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: {type: "tween", duration: 2} }}
                                exit={{ opacity: 0 }}
                                whileHover={{scale: 1.3}}
                                transition={{type: "spring", stiffness: 500}}
                                href="https://github.com/wilyyy"
                                target="_blank"
                            >
                                <GithubOutline size={40}/>
                            </motion.a>
                        </AnimatePresence>
                    )}                    
                    {theme === 'dark' ? (
                        <AnimatePresence>
                            <motion.a
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1, transition: {type: "tween", duration: 2} }}
                                exit={{ opacity: 0 }}
                                whileHover={{scale: 1.3}}
                                transition={{type: "spring", stiffness: 500}}
                                href="https://www.linkedin.com/in/william-alvarez-76b806149/"
                                target="_blank"
                            >
                                <LinkedinSquare size={45}/>
                            </motion.a>
                        </AnimatePresence>
                    ) : (
                        <AnimatePresence>
                            <motion.a
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: {type: "tween", duration: 2} }}
                                exit={{ opacity: 0 }}
                                whileHover={{scale: 1.3}}
                                transition={{type: "spring", stiffness: 500}}
                                href="https://www.linkedin.com/in/william-alvarez-76b806149/"
                                target="_blank"
                            >
                                <LinkedinBox size={45}/>
                            </motion.a>
                        </AnimatePresence>
                    )}
                </Row>
                
                <Column width="39px" height="109px" SwitchCont>
                    <motion.div
                        whileHover={{scale: 1.3}}
                        transition={{type: "spring", stiffness: 500}}
                    >
                        <Image
                            src={theme === 'dark' ? lightswitch_dark : lightswitch_outline}
                            alt="Light Switch"
                            width={49}
                            height={98}
                            onClick={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}
                        />
                    </motion.div>
                    <p>{theme === 'dark' ? 'Dark' : 'Light'}</p>
                </Column>
            </Row>
            
        </Container>
    )
}

export default TopInfo;