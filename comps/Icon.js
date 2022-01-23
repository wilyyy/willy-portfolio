import styled from "styled-components";
import folderIconGlass from '../public/folderIconGlass.svg';
import folderIconOutline from '../public/folderIconOutline.svg';
import Image from 'next/image';
import { useTheme } from "../utils/WillyThemeProvider";

const Icon = ({
    folder,
    notepad
}) => {
    const {theme, setTheme} = useTheme();
    
    const bool = true;

    return (
        <>
            <button onClick={()=>{
                theme === 'light' ? 'dark' : 'light'
            }}>test</button>
            {folder && 
                <Image
                    src={theme === 'light' ? folderIconOutline : folderIconGlass}
                />
            }

            {notepad &&
                <p>Notepad</p>
            }
        </>
    )
}

export default Icon;