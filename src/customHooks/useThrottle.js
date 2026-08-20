import { useCallback, useRef } from "react"

const useThrottle = (fn, delay)=>{
    let lastCall = useRef(0);
    return useCallback((...arg)=>{
        let now = Date.now();
        if(now - lastCall.current >= delay){
            lastCall.current = now;
            fn(...arg);
        }

    },[fn, delay])
}
export default useThrottle;
