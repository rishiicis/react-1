import React, { useEffect, useState } from "react";

const RatingsTabs = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("top");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch API
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getData = async ()=>{
      try{
          const fetchData = await fetch('https://fakestoreapi.com/products', { signal });
          const respData = await fetchData.json();
          setData(respData);
      }
      catch(err){
        if(err.name !== 'AbortError'){
          console.log('error is: ', err);
        }
      }
      finally{
        setLoading(false);
      }
    }
    getData();

    return()=>{
      controller.abort();
    }
  }, []);

  const handleClick = (value)=>{
    setActiveTab(value);
  }

  // Filter when tab OR data changes
  useEffect(() => {
    let result = [];
    
    if (activeTab === "top") {
      result = data.filter((item) => item.rating.rate > 4);
    } 
    else if (activeTab === "average") {
      result = data.filter((item) => item.rating.rate >= 3 && item.rating.rate <= 4);
    } 
    else {
      result = data.filter((item) => item.rating.rate < 3);
    }
    setFiltered(result);
  }, [activeTab, data]);

  return (
    <div className="m-2.5 p-2.5 border-2 border-gray-500">
      <div className="flex gap-5 mb-2">
        <button className={activeTab === "top" ? 'active text-green-500' : ""} 
          onClick={() => handleClick("top")}>Top Gainer</button>
        <button className={activeTab === "average" ? 'active text-blue-500' : ""} 
          onClick={() => handleClick("average")}>Average</button>
        <button className={activeTab === "poor" ? 'active text-red-500' : ""} 
          onClick={() => handleClick("poor")}>Poor</button>
      </div>
      {loading ?
      <p>Loading ...</p>
      :
      <ul>
        {
          filtered.map((item) => <li key={item.id}>Rating: <strong>{item.rating.rate}</strong>, {item.title} </li>)
        }
      </ul>
      }
    </div>
  );
};

export default RatingsTabs;
