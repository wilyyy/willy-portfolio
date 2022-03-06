import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Container = styled.div`
  font-size: ${props=>props.textsize};
`;

const TypewritterText = ({
    text="William Laurel Alvarez",
    textsize="16px",
    isLoop = false,
    delay,
    autoStart = true
}) => {
    return (
        <Container textsize={textsize}>
            <Typewriter
                options={{
                    strings: text,
                    autoStart: autoStart,
                    loop: isLoop,
                    delay: delay
                }}
            />
        </Container>
    )
}

export default TypewritterText;