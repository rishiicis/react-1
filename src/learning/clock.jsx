import { useEffect, useState } from "react"

const DisplayClock = ()=>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date().toLocaleTimeString([],{hour12:true}));
        }, 1000);
        return ()=> {
            clearInterval(timer);
        }
    }, [])
    
    return(
        <div className="displayTime text-center">
            {time}
        </div>
    )
}
export default DisplayClock;