import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    } 
    catch (err) {
      console.log(err);
    }

    return typeof initialValue === "function"
      ? initialValue()
      : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

// I want you to design a custom React hook called `useLocalStorage`. 
// It should behave similarly to `useState`, but the value should also persist in the browser's localStorage.

//use Case
export default function GetUserData() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <h1>Hello {name || "Guest"}!</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <button onClick={() => setName("")}>
        Clear Name
      </button>
    </div>
  );
}


