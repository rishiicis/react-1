import { useEffect, useState, createContext} from "react";
export const Newcontext = createContext();

const ThemeProvider = ({children})=>{
    // const [theme, setTheme] = useState('light');
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    const toogleTheme = ()=>{
        setTheme((prev)=> prev === 'light' ? 'dark' : 'light')
    }
    useEffect(()=>{
        //document.body.classList.remove("light", "dark");
        //document.body.classList.add(theme);
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme])

    return(
        <Newcontext.Provider value={{theme, toogleTheme}}>
            {children}
        </Newcontext.Provider>
    )
}
export default ThemeProvider;