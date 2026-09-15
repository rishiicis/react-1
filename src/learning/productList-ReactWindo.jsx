import {FixedSizeList} from "react-window";
import {useState, useEffect} from "react";

const ProductRow = ({style, index, data})=> {
  const product = data[index];
  return(
    <div style={style}>
      <div className="card">
        <div className="card-img">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="card-desc">
          <h3> {product.title}</h3>
          <h4> Rs {product.price}</h4>
        </div>
      </div>
    </div>
  )
}

const ProductList = ()=>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [height, setHeight] = useState(window.innerHeight);

  // Update list height when browser window is resized
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(()=>{
    const controller = new AbortController();
    const fetchData = async()=>{
      try{
        setLoading(true);
        setError(null);
        const response = await fetch('https://dummyjson.com/products?limit=100',{
          signal:controller.signal
        });
        if(!response.ok){
          throw new Error(response.status);
        }
        const resData = await response.json();
        setData(resData.products);
      }
      catch(err){
        if(err.name !== "AbortError"){
          setError(err.message);
        }
      }
      finally{
        setLoading(false);
      }
    }

    fetchData();

    return ()=> controller.abort();
  },[]);

   if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  
  return(
    <>
    <FixedSizeList
      height={height}
      width="100%"
      itemSize={150}
      itemCount={data.length}
      itemData = {data}
    >
      {ProductRow}
    </FixedSizeList>
    </>
  )

}

export default ProductList;