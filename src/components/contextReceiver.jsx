import { useContext } from "react"
import { Newcontext } from "./contextProvider"

const ThemeButton = ()=>{
    const {theme, toogleTheme} = useContext(Newcontext);
    return(
        <button onClick={toogleTheme} className="themeButton">{theme==='light'? 'Light' : 'Dark'}</button>
    )
}
export default ThemeButton;