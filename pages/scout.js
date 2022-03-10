import { useRouter } from "next/router";
import styled from "styled-components";

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const Scout = () => {
    const router = useRouter();

    return (
        <Page>
            <button onClick={()=>router.push("/")}>go back</button>
        </Page>
    )
}

export default Scout;