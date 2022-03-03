import styled from 'styled-components';
import Image from 'next/image';
// muh name, github, linkedin, current day & time api & dark mode switch

import DateTime from './Datetime';
import { useTheme } from '../utils/WillyThemeProvider';
import { global_theme } from '../utils/themeconfig';
import { Calendar } from '@styled-icons/bootstrap/Calendar';
import { Location } from '@styled-icons/ionicons-sharp/Location';
import { Clock } from '@styled-icons/bootstrap/Clock';
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
`;

const Column = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    width: ${props=>props.width};
    height: ${props=>props.height};
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
        <Container textShadow={global_theme[theme].textShadow}>
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
                <Row width="131px" height="24px">
                    <ClockIcon color={global_theme[theme].text} />
                    <Spacer />
                    <DateTime time />
                </Row>
            </Column>
            <Row width="" ></Row>
            <Column width="39px" height="109px">
                <Image
                    src={theme === 'dark' ? lightswitch_dark : lightswitch_outline}
                    alt="Light Switch"
                    width={39}
                    height={88}
                    onClick={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}
                />
                <p>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</p>
            </Column>
        </Container>
    )
}

export default TopInfo;