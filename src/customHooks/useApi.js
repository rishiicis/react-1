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