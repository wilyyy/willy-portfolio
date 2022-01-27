import {useContext, createContext, useState} from 'react';
import { global_theme } from './ThemeConfig';

const initialStates = {
    theme: "dark",
    setTheme: ()=>{}
}

const MyContext = createContext(initialStates);

//default provider
const WillyThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialStates.theme);

    return (
        <MyContext.Provider value={{theme, setTheme}}>
            <style jsx global>
                {`
                    body {
                        background-color:${global_theme[theme].base};
                        transition: all 0.5s linear;
                    }
                `}
            </style>
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

