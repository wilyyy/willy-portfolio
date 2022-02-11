import styled from "styled-components";
import { motion } from "framer-motion";

import { CloseOutline } from "styled-icons/evaicons-outline";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";
import { Javascript } from "@styled-icons/fluentui-system-filled/Javascript";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Sass } from "@styled-icons/boxicons-logos/Sass";
import { Php } from "@styled-icons/simple-icons/Php";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Express } from "@styled-icons/simple-icons/Express";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Adobephotoshop } from "@styled-icons/simple-icons/Adobephotoshop";
import { Adobeillustrator } from "@styled-icons/simple-icons/Adobeillustrator";
import { DigitalOcean } from "@styled-icons/fa-brands/DigitalOcean";
import { Autodesk } from "@styled-icons/simple-icons/Autodesk";
import { Adobeaftereffects } from "@styled-icons/simple-icons/Adobeaftereffects";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
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
    font-family: "cartograph_extralight";
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
    padding-bottom: 5%;
`;

const H1 = styled.p`
    font-size: 31px;
    align-self: flex-start;
    position: relative;
    left: 4%;
`;

const H2 = styled.p`
    font-size: 20px;
    align-self: flex-start;
    position: relative;
    left: 4%;
`;

const ToolCont = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    width: 88%;
    height: 200px;
    backdrop-filter: blur(9px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    background: linear-gradient(152.97deg, rgba(28, 76, 121, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.6), inset 0px 6px 4px rgba(0, 0, 0, 0.6);
    border-style: none;
    border-radius: 5px;
    padding: 4% 2% 2% 1%;
    overflow: hidden;
    overflow-x: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(15, 15, 15, 0.4);
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(152.97deg, rgba(8, 29, 48, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
        border: 1px solid rgba(47, 50, 61, 0.5);
        backdrop-filter: blur(9px) saturate(164%);
        -webkit-backdrop-filter: blur(9px) saturate(164%);
        border-radius: 16px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(152.97deg, rgba(131, 183, 232, 0.06) 0%, rgba(255, 255, 255, 0) 100%);
    }
`;
//icons
const IconCont = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    width: 134px;
    height: 100px;
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

const ReactIcon = styled(LogoReact)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const JSIcon = styled(Javascript)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const HTMLIcon = styled(Html5)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const CSSIcon = styled(Css3)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const SassIcon = styled(Sass)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const PHPIcon = styled(Php)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const MySQLIcon = styled(Mysql)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const FirebaseIcon = styled(Firebase)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const ExpressIcon = styled(Express)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const NextIcon = styled(Nextdotjs)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const FigmaIcon = styled(Figma)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const PSIcon = styled(Adobephotoshop)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const IllIcon = styled(Adobeillustrator)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const DgOcean = styled(DigitalOcean)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const AutodeskIcon = styled(Autodesk)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const AEIcon = styled(Adobeaftereffects)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const MongoIcon = styled(Mongodb)`
    color: ${props=>props.color};
    width: 70px;
    height: 70px;
`;

const ToolsModal = ({onCloseClick=()=>{}}) => {
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
                <H1>My Toolbox</H1>
                <H2>Development</H2>
                <ToolCont>
                    <IconCont>
                        <JSIcon color={global_theme[theme].text}/>
                        <p>Javascript</p>
                    </IconCont>
                    <IconCont>
                        <ReactIcon color={global_theme[theme].text}/>
                        <p>React.js</p>
                    </IconCont>
                    <IconCont>
                        <NextIcon color={global_theme[theme].text}/>
                        <p>Next.js</p>
                    </IconCont>
                    <IconCont>
                        <ReactIcon color={global_theme[theme].text}/>
                        <p>React Native</p>
                    </IconCont>
                    <IconCont>
                        <HTMLIcon color={global_theme[theme].text}/>
                        <p>HTML5</p>
                    </IconCont>
                    <IconCont>
                        <CSSIcon color={global_theme[theme].text}/>
                        <p>CSS</p>
                    </IconCont>
                    <IconCont>
                        <SassIcon color={global_theme[theme].text}/>
                        <p>SASS</p>
                    </IconCont>
                    <IconCont>
                        <ExpressIcon color={global_theme[theme].text}/>
                        <p>Express.js</p>
                    </IconCont>
                    <IconCont>
                        <MongoIcon color={global_theme[theme].text}/>
                        <p>MongoDB</p>
                    </IconCont>
                    <IconCont>
                        <PHPIcon color={global_theme[theme].text}/>
                        <p>PHP</p>
                    </IconCont>
                    <IconCont>
                        <MySQLIcon color={global_theme[theme].text}/>
                        <p>MySQL</p>
                    </IconCont>
                    <IconCont>
                        <FirebaseIcon color={global_theme[theme].text}/>
                        <p>Firebase</p>
                    </IconCont>
                    <IconCont>
                        <DgOcean color={global_theme[theme].text}/>
                        <p>Digital Ocean</p>
                    </IconCont>
                </ToolCont>
                <H2>Design</H2>
                <ToolCont>
                    <IconCont>
                        <FigmaIcon color={global_theme[theme].text}/>
                        <p>Figma</p>
                    </IconCont>
                    <IconCont>
                        <PSIcon color={global_theme[theme].text}/>
                        <p>Photoshop</p>
                    </IconCont>
                    <IconCont>
                        <IllIcon color={global_theme[theme].text}/>
                        <p>Illustrator</p>
                    </IconCont>
                    <IconCont>
                        <AutodeskIcon color={global_theme[theme].text}/>
                        <p>3DS Max</p>
                    </IconCont>
                    <IconCont>
                        <AEIcon color={global_theme[theme].text}/>
                        <p>After Effects</p>
                    </IconCont>
                </ToolCont>
            </Container>
        </Stroke>
    )
}

export default ToolsModal;