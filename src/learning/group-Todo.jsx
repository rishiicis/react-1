import { useState, useEffect } from "react";

const GropuTodo = ()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
    const getData = async ()=>{
        try{
            setLoading(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const resData = await res.json();
            setData(resData)
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }
    getData();
    },[]);

    //extract Unique Ids
    const uiqueIds = [...new Set(data.map(item => item.userId))];

    return(
      <div className="todoWrap">
        {loading && <p>Please Wait ...  </p>}
        {uiqueIds.map(uid => {
            const userTodo = data.filter(todo=> todo.userId === uid);
            
            return(<div className="userBlock" key={uid}>
            <h3 className="text-2xl">User Id: {uid}</h3>
            <ul>
                {userTodo.map(todo => 
                    <li className={todo.completed ? "completed" : "na"}>{todo.title}</li>
                )}
            </ul>
            </div>)

        })}

    </div>
)
}
export default GropuTodo;