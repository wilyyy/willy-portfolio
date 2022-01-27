import styled from "styled-components";
import Image from 'next/image';

import { useTheme } from "../utils/WillyThemeProvider";
import folderIconGlass from '../public/folderIconGlass.svg';
import folderIconOutline from '../public/folderIconOutline.svg';

const Icon = ({
    folder,
    notepad
}) => {
    const {theme, setTheme} = useTheme();

    return (
        <>
            <button onClick={()=>{
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }}>test</button>

            {folder && 
                <Image
                    src={theme === 'dark' ? folderIconGlass : folderIconOutline}
                    width='146'
                    height='118'
                />
            }

            {notepad &&
                <p>Notepad</p>
            }
        </>
    )
}

export default Icon;