import {useState } from "react";
import useDebounce from "../customHooks/useDebounce";

const SearchCountry = ()=>{
    const countries = ["India", "Nepal", "Srilanka", "Australia", "United states"];
    const [search, setSearch] = useState("");
    const debounce = useDebounce(search.trim(), 500);

    const handleInput = (e)=>{
        setSearch(e.target.value);
    }
    
    const filterCountry = countries.filter((country) => 
        country.toLowerCase().includes(debounce.toLowerCase())
    );
    return(
        <>
            <h1 className="text-2xl">Search Country</h1>
            <input type="text" value={search} 
                onChange={handleInput} 
                placeholder="Search country..." 
                className="border"/>
            <ul>
                {debounce && filterCountry.map((country) =>
                    <li key={country}>{country}</li>
                )}
            </ul>
        </>
    )
}
export default SearchCountry;
