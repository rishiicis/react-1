import { Link, NavLink } from "react-router-dom";
import ThemeButton from "./contextReceiver";

const Header = () =>{
    return(
        <div className="flex relative">
            <ul className="navBar bg-gray-400">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about' className={({isActive}) => (isActive ? 'active' : 'link' )}>About</NavLink></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <ThemeButton />
        </div>
    )
}
export default Header;