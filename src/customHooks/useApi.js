import { useEffect, useState } from "react"

const useApi = (url)=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        let controller = new AbortController;
        const fetchData = async()=>{
            try{
                setLoading(true);
                setError(null);
                const res = await fetch(url, {signal: controller.signal});
                if(!res.ok){
                    throw new Error(`Http error : ${res.status}`);
                }
                const resData = await res.json();
                setData(resData);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false)
            }
        }

        fetchData();

        return()=>{
            controller.abort();
        }
    },[url])
    return {data, loading, error};
}

export default useApi;

 
//Use case
// import useFetch from "./useFetch";
function DisplayUser() {
  const {
    data: users,
    loading,
    error,
  } = useApi("https://jsonplaceholder.typicode.com/users");
 
  if (loading) {
    return <h2>Loading...</h2>;
  }
 
  if (error) {
    return <h2>{error}</h2>;
  }
 
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}