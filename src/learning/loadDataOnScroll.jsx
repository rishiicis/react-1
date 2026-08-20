import { useState, useEffect } from "react";

const LoadOnScroll = ()=>{
    const [data, setData]= useState([]);
    const [displayed, setDisplayed] = useState([])
    const [index, setIndex] = useState(0);
    const [load, setLoad] = useState(false);
    const [hasMoreData, setHasMoreData] = useState(true);
    const loadNext = 5;

    useEffect(()=>{
    const fetchPost = async ()=>{
        try{
            setLoad(true);
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const postData = await res.json();
            setData(postData);
            setDisplayed(postData.slice(0, 10));
            setIndex(10);
        }
        catch(err){
            console.log(err.message);
        }
        finally{
            setLoad(false);
        }
    }
    fetchPost();
    },[])

    useEffect(()=>{
        const handleScroll = () =>{ 
            if(window.scrollY + window.innerHeight >= document.documentElement.offsetHeight - 10){
                const nextItems = data.slice(index, index + loadNext);
                if(nextItems.length === 0){
                    setHasMoreData(false);
                    return;
                }
                setDisplayed(pre => [...pre, ...nextItems]);
                setIndex(i => i + loadNext);
            }
            
        }

        window.addEventListener("scroll", handleScroll);
        return()=> window.removeEventListener("scroll", handleScroll);
    },[data, index, hasMoreData])


    return(
        <>
            {load ? <p>Loading...</p> :
            <div className="border p-2">
                {displayed.map( p=>
                <div key={p.id} className="border p-1">
                    <p>user id: {p.userId}</p>
                    <p>{p.title}</p>
                    <p>{p.body}</p>
                </div>
                )}
                <p>{hasMoreData ? "Load More ..." : "No More Data"}</p>
            </div>
            }
        </>
    )
}
export default LoadOnScroll;