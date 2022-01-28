import styled from 'styled-components';

import TypewritterText from './TypewritterText';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "consolas";
    /* text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.7); */
`;

const Row = styled.p`
    display: flex;
`;

const Text = styled.p`
    color: ${props=>props.color};
`;

const Preloader = () => {
    return (
        <Container>
            <Row>
                <Text color='green'>william_laurel@alvarez</Text>
                <Text color='purple'> ~/: </Text>
            </Row>
            <TypewritterText text="npm start willy-portfolio" delay={40} />
        </Container>
    )
}

export default Preloader;