import { useRef } from "react";

export const useSquare =(num) =>{
    const cache = useRef({});
    let square;
    if(typeof num !== "number"){
        return;
    }

    if(cache.current[num]){
        return cache.current[num];
    }

    square = num * num;
    cache.current[num] = square;
    return square;
}