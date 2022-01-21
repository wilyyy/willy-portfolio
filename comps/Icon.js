import styled from "styled-components";

const Icon = ({
    folder,
    notepad
}) => {

    return (
        <>
            {folder && 
                <p>Folder</p>
            }

            {notepad &&
                <p>Notepad</p>
            }
        </>
    )
}

export default Icon;