import styled from "styled-components";

const MobileIcon = ({
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

export default MobileIcon;