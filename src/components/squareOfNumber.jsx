import { useState } from "react"
import { useSquare } from "../customHooks/useSquare";

const SquareOfNumber = ()=>{
    const [val, setval] = useState();
    const sqrt = useSquare(val);
    const handleInput = (e)=>{
        const input = Number(e.target.value);
        setval(input);
    }

    return(
        <>
        <h1>Square  Root of Number: {sqrt}</h1>
        <input type="text" value={val} onChange={handleInput} />
        </>
    )
}
export default SquareOfNumber;