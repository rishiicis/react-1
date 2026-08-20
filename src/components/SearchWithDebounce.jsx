import { useEffect, useState } from "react"
import useDebounce from "../customHooks/useDebounce";

const SearchWithDebounce =()=>{
    const [inputVal, setInputVal] = useState('');

    const debounceInput = useDebounce(inputVal, 500);

    const handleChange = (e) =>{
        setInputVal(e.target.value);
    }

    useEffect(()=>{
        if(debounceInput){
            console.log('Searching for', debounceInput)
        }
    },[debounceInput])

    return(
        <>
            <input type="text" value={inputVal} onChange={handleChange} placeholder="Search here ..." />
            <p>Searching for: {debounceInput}</p>
        </>
    )
}
export default SearchWithDebounce;


//Debounce Logic without Custom Hook
const Srch = () =>{
    const [inputValue, setInputValue] = useState('');
    const [final, setFinal] = useState('');

    const handleInput = (e)=>{
       setInputValue(e.target.value)
    }

    useEffect(()=>{
        const dBounce = setTimeout(()=>{
            setFinal(inputValue);
        },500)
        
        return()=> clearTimeout(dBounce);
    },[inputValue])

    return(
        <>
        <input type="text" value={inputValue} onChange={handleInput} placeholder="Search Input ..."/>
        <p>Searching for: {final}</p>
        </>
        
    )
}
// export default Srch;
