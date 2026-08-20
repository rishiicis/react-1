import { useState } from "react"

export const useArray = (value = [])=>{
    const [array, setArray] = useState(value);
    const push = (item)=>{
        setArray(pre => [...pre, item]);
    }
    const remove = (index)=>{
        setArray(pre => pre.filter((item, i)=> i !== index));
    }
    const clear = ()=>{
        setArray([]);
    }
    const update = (index, newItem)=>{
        setArray(pre => pre.map((val,i)=> i === index ? newItem : val))
    }
    return {array, push, remove, clear, update};
}