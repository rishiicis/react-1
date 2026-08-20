import { useState } from "react"

const UserByNameRole = ()=>{
    const [val, setVal] =useState("");
    const [userRole, setUserRole] = useState("all");
    const userData =[
        { id: 1, name: "John", role: "admin" },
        { id: 2, name: "Jane", role: "user" }, 
        { id: 3, name: "Sam", role: "admin" }
    ];
    
    const filterUser = userData.filter(u=>{
        const filterName = u.name.toLowerCase().includes(val);
        const filterRole = userRole === "all" || u.role === userRole;
        return filterName && filterRole;
    })
    //const filterName = userData.filter(user => user.name.toLowerCase().includes(val));
    //const filterRole = userData.filter(user => user.role === userRole);

    return(
    <>
        <hr></hr>
        <input type="text" value={val} onChange={(e)=> setVal(e.target.value)} placeholder="Search By Name..."/>
        <select value={userRole} onChange={(e)=> setUserRole(e.target.value)}>
            <option value="all">Select</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
        </select>
        <hr></hr>
        {filterUser.map(user => <p>Name: {user.name}, Role: {user.role}</p>)}
    </>
    )
}
export default UserByNameRole;