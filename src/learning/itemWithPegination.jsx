import React, { useState, useEffect } from "react";

const PaginatedList = () => {
    const [data, setData] = useState([]);         // Items for the current page
    const [page, setPage] = useState(1);          // Current page number
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasNext, setHasNext] = useState(true); // If next page exists
    const ITEMS_PER_PAGE = 10;

    const fetchData = async (pageNumber) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.example.com/items?_page=${pageNumber}&_limit=${ITEMS_PER_PAGE}`);
            const result = await response.json();
            setData(result);

            // If returned items are less than page size, no next page
            if (result.length < ITEMS_PER_PAGE) {
                setHasNext(false);
            }
            else {
                setHasNext(true);
            }
        }
        catch (err) {
            console.error("Fetching error:", err);
            setError("Failed to fetch data.");
        }
        finally {
            setLoading(false);
        }
    };

    // Fetch data whenever page changes
    useEffect(() => {
        fetchData(page);
    }, [page]);

    const handleNext = () => {
        if (hasNext) {
            setPage((p) => p + 1);
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage((p) => p - 1);
        }
    };

    return (
        <div>
            <h1>Paginated List</h1>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>

            <div style={{ marginTop: "20px" }}>
                <button onClick={handlePrevious} disabled={page === 1 || loading}>
                    Previous
                </button>
                <span style={{ margin: "0 10px" }}>Page {page}</span>
                <button onClick={handleNext} disabled={!hasNext || loading}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedList;