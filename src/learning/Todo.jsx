import { useState } from "react"

const Todo = ()=>{
    const[newInput, setNewInput] = useState("");
    const[todo, setTodo] = useState([]);
    const[editId, setEditId] = useState(null);

    const handleTodoInput = (e)=>{
        setNewInput(e.target.value);
    }

    const handleTodo = (e)=>{
        e.preventDefault();
        if(newInput.trim() === "") return;
        if(editId !== null){
            setTodo((prev)=> prev.map((item, index)=>
                index === editId ? newInput : item
            ))
            setEditId(null);
        }
        else if(!todo.includes(newInput)){
            setTodo(prev=> [...prev, newInput])
        }
        setNewInput("");
        return;
    }

    const updateTodo = (todoIndex)=>{
        setEditId(todoIndex);
        setNewInput(todo[todoIndex])
    }

    const deleteTodo = (todoIndex)=>{
       setTodo((prev)=> prev.filter((item, index)=> index !== todoIndex));
       setNewInput("");
       setEditId(null);
    }

    return(
        <>
            <form onSubmit={handleTodo}>
                <input type="text" value={newInput} onChange={handleTodoInput} className=" border" />
                <button type="submit" className="border border-gray-400">{editId === null ? "Add Todo" : "Update"}</button>
            </form>
            <div className="border-gray-500 p-2 border min-h-20">
                <ul>
                    {todo.map((item, index)=>
                        <li key={index} >
                            <p>{item}</p>
                            <button onClick={()=> updateTodo(index)} className="border border-gray-400 mr-2">Edit</button>
                            <button onClick={()=> deleteTodo(index)} className="border border-gray-400">Delete</button>
                        </li>
                    )}
                </ul>
            </div>

        </>
    )
}
export default Todo;