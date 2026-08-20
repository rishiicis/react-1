import { useEffect, useState, useRef } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);
    const [isCount, setIsCount] = useState(false);
    const timerRef = useRef(null);
    useEffect(()=>{
        if(isCount){
            timerRef.current = setInterval(()=>{
                setCount((prev) => prev + 1)
            },1000)
        }
        return()=>{
            clearInterval(timerRef.current);
        }
    },[isCount])

    const handleCounter = ()=>{
        setIsCount(true);
        setCount(0);
    }
    const stopCounter = ()=>{
        setIsCount(false);
    }
    const resumeCounter = () => {
        if (count > 0) { 
            setIsCount(true) 
        }
    }

    return(
        <>
         <h1 className="text-2xl">Count is: {count}</h1>
         <button type="button" onClick={handleCounter} className="border px-1 rounded-md cursor-pointer" >Start</button>
         <button type="button" onClick={stopCounter} className="border mx-2.5 px-1 cursor-pointer">Stop</button>
         <button type="button" onClick={resumeCounter} className="border px-1 cursor-pointer" >Resume</button>
        </>
    )
}
export default Counter;