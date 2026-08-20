import { useEffect, useRef, useState } from "react";
const DisplayMeals = ()=>{
    const [list, setList] = useState([]);
    const [val , setVal] = useState("");
    const [dbInput, setDbInput] = useState("");
    const [isLoad, setIsLoad] = useState(false);
    const [isError, setIsError] = useState(null);
    const cache = useRef({});

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDbInput(val);
        },300)
        
        return()=> clearTimeout(timer);
    },[val]);
    
    useEffect(()=>{
        const controler = new AbortController();
        const fetchData = async ()=>{
            if(!dbInput.trim()){
                setList([]);
                return;
            }

            if(cache.current[dbInput]){
                setList(cache.current[dbInput]);
                return;
            }
            
            setIsLoad(true);
            try{
                const res =  await fetch(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${dbInput}`,
                    {signal: controler.signal}
                );
                const data = await res.json();
                const meal = data.meals || [];
                setList(meal);
                cache.current[dbInput] = meal;
            }
            catch(err){
                setIsError(err);
            }
            finally{
                setIsLoad(false)
            }
        }

        fetchData();

        return()=> controler.abort();
    },[dbInput])

    if(isError){
        return <p>{isError.message}</p>;
    }

    return(
        <>
        <h1 className="text-2xl">Display Meal List</h1>
        {isLoad && <p> Loading...</p>}
        <input type="text" className="border" value={val} onChange={(e)=> setVal(e.target.value)} />
        <ul>
            {
                list.map((item)=> <li key={item.idMeal}>{item.strMeal}</li>
            )}
        </ul>
            
        </>
    )

}
export default DisplayMeals;


// Build a search component that queries a public API with the following requirements:
// Create an input box
// Call API only after user stops typing for 300ms (debounce)
// Display: Loading state, Results list
// Avoid unnecessary API calls:
// If the same query was already searched → return cached result
// const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);