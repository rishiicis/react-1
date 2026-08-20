import { useArray } from "../customHooks/useArray";

const ArrayOperation = () =>{
    const arr = [1,2,3,4,5];
    const {array, push, remove, clear, update} = useArray(arr);
    const addItem = ()=>{
        push("New Item");
    }
    const removeItem = ()=>{
        remove(0);
    }
    const clearAll = ()=>{
        clear();
    }
    const updateItem = (index, newItem)=>{
        update(0, 100)
    }

    return(
        <>
            <button className="border px-1" onClick={addItem}>add</button>
            <button className="border px-1" onClick={removeItem}>remove</button>
            <button className="border px-1" onClick={clearAll}>clear</button>
            <button className="border px-1" onClick={updateItem}>update</button>
            {
                array.map((val, i)=> <p key={i}>{val}</p>)
            }
        </>
    )
}
export default ArrayOperation;