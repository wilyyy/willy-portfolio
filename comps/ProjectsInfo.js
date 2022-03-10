import styled from "styled-components";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { global_theme, compassplus_colors } from "../utils/themeconfig";

import CompassHome from '../public/CompassHome.png';
import ScoutHome from '../public/ScoutHome.png';

const Container = styled(motion.div)`
    border-radius: 11px;
    background-color: ${props=>props.bgcolor};
    display: flex;
`;

const ProjectsInfo = ({
    bgcolor,
    width,
    height,
    compassPlus,
    scout,
    steady,
    vigilant,
    townsquare
}) => {
    
    return (
        <Container  
        >
            {compassPlus &&
                <Image src={CompassHome} width={width} height={height} />
            }

            {scout && 
                <Image src={ScoutHome} width={width} height={height} />
            }
        </Container>
    )
}

export default ProjectsInfo;