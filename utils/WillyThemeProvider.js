import {useContext, createContext, useState} from 'react';
//import global color values from themeconfig here when set up

const initialStates = {
    theme: "default",
    setTheme: ()=>{}
}

const MyContext = createContext(initialStates);

//default provider
const WillyThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialStates.theme);

    return (
        <MyContext.Provider>
            {children}
        </MyContext.Provider>
    )
}

export default WillyThemeProvider;

//theme hook
export const useTheme = () => {
    const {theme, setTheme} = useContext(MyContext);
    return {theme, setTheme};
}

