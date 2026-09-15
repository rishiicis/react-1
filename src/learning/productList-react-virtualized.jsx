import { AutoSizer, List, WindowScroller } from "react-virtualized";
import { useEffect, useState } from "react";
// import "react-virtualized/styles.css";

const ProductRow = ({ product, style }) => {
  return (
    <div style={style}>
      <div className="card">
        <div className="card-img">
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className="card-desc">
          <h3>{product.title}</h3>
          <h4>Rs {product.price}</h4>
        </div>
      </div>
    </div>
  );
};

const ProductListV = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://dummyjson.com/products?limit=100", {
            signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        const result = await response.json();
        setData(result.products);
      } 
      catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } 
      finally {
        setLoading(false);
      }
    };
    fetchData();
    
    return () => controller.abort();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <WindowScroller>
      {({ height, isScrolling, onChildScroll, scrollTop, }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              autoHeight
              height={height}
              width={width}
              rowCount={data.length}
              rowHeight={150}
              rowRenderer={({ index, key, style }) => (
                <ProductRow
                  key={key}
                  product={data[index]}
                  style={style}
                />
              )}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
              isScrolling={isScrolling}
            />
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
};

export default ProductListV;