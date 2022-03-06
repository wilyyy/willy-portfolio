import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from "next/router";
import { global_theme, compassplus_colors } from "../utils/themeconfig";

import ProjectsInfo from "./ProjectsInfo";

const Container = styled.div`
    width: 80%;
    height: 600px;
    background-color: pink;
    display: flex;
`;

const SlideCont = styled.div`
    width: 80%;
    height: 400px;
    background-color
`;

const ProjectsSwiper = () => {
    const router = useRouter();

    return (
        <Container>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={true}
            >
                <SwiperSlide key={1}>
                    <ProjectsInfo 
                        title="CompassPlus"
                        bgcolor={compassplus_colors.CAROLINABLUE}
                        onButtonClick={() => router.push("../compassplus")}
                    />
                </SwiperSlide>           
                <SwiperSlide key={1}>
                    <ProjectsInfo 
                        title="Scout"
                        bgcolor="Orange"
                    />
                </SwiperSlide>           
            </Swiper>
        </Container>
    )
}

export default ProjectsSwiper;