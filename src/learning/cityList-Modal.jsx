import { useEffect, useState } from "react";

const Modal = ({name, address, onClose})=>{
    return(
        <div className="modalBackdrop" onClick={onClose}>
            <div className="modal" onClick={(e)=> e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                <p>Name: {name}</p>
                <p>City: {address?.city}, Zip code: {address?.zipcode}, Lat: {address?.geo?.lat}</p>
            </div>
        </div>
    )
}

const CityListModal = ()=>{
    const [list, setList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=>{  
      const getUser = async ()=>{
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!res.ok){
                throw new Error(`${res.status}: Failed to fetch User`);
            }
            const data = await res.json();
            setList(data);
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    getUser();

    },[])

    if(error) return <p>{error}</p>;
    if(loading) return <p>Loading ...</p>;
    return(
    <>
    <h1 className="text-xl">Open Modal On click of city</h1>
        <ul>
            {list.map((val, index) =>
                <li key={val.id} onClick={()=> setSelectedUser(val)}>{val.address?.city}</li>
            )}
        </ul>
        {selectedUser && <Modal {...selectedUser} onClose={()=>setSelectedUser(null)}/>}
    </>
    )
}
export default CityListModal;