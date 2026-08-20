import { useState, useEffect } from "react";

const LoadMoreData = ()=>{
    const [data, setData] = useState([]);
    const [visibleItem, setVisibleItem] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const loadNext = 2;
    const API_URL = "https://dummy-json.mock.beeceptor.com/comments";

    useEffect(()=>{
    const fetchData = async ()=>{
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            if(!res.ok){
                throw new Error("fail to fetch data " + res.status)
            }
            const userData = await res.json();
            setData(userData);
            setVisibleItem(userData.slice(0, 10));
            setIndex(10);
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    fetchData();
    },[])

    const handleLoadMore = ()=>{
        const nextItems = data.slice(index, index + loadNext)
        setVisibleItem(pre => [...pre, ...nextItems]);
        setIndex(i => i + loadNext);
    }
    
    return(
        <>
        <p>{error ? error : `item ${visibleItem.length} of ${data.length}`}</p>
        {loading ? <p>Loading ...</p> :
        <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
            <tbody>
                {visibleItem.map((item)=> 
                <tr key={item.id}>
                    <td>id: {item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                </tr>
                )}
            </tbody>
        </table>
        }
        {index < data.length  &&
            (<button onClick={handleLoadMore} className="border">Load More</button>)
        }
        </>
    )
}
export default LoadMoreData;