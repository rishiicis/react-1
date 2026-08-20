import { useEffect } from "react"
import useThrottle from "../customHooks/useThrottle"

const ScrollWindow = ()=>{
    const handleScroll = useThrottle(()=>{
        console.log("scroll:", window.scrollY);
    }, 1000);

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    },[handleScroll])

    return(
        <div style={{height: '300vh'}}>windo scroll Section</div>
    )
}
export default ScrollWindow;