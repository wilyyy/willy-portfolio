import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Container = styled.div`
  color: #fff;
  font-size: ${props=>props.textsize};
`;

const TypewritterText = ({
    text="William Laurel Alvarez",
    textsize="60px",
    isLoop = false
}) => {

    return (
        <Container textsize={textsize}>
            <Typewriter
                options={{
                    strings: text,
                    autoStart: true,
                    loop: isLoop,
                }}
            />
        </Container>
    )
}

export default TypewritterText;