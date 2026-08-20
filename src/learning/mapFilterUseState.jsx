// 1. A list of colors composed of "red" and "green" elements.
// 2. A "Square" component that renders a square of a given color and executes a click method.

// Implement a parent component named "App" that:
//     1. Uses the given Square component to render all squares from the "colors" list
//     2. Exposes the following functionality:
//   - click green  => change current element to "red" + add 1 new "green" element at the end of the list
//   - click red    => delete current element
import { useState } from "react";

const Square = ({ index, color, handleClick }) => {
  return (
    <div style={{background: color, width: "20px", height: "20px", margin: "10px"}} 
    onClick={() => handleClick(index)}></div>
  );
};

const colors = ["red", "green", "red"];
const MapFilterUseState = () => {
  const [state, setState] = useState(colors);
  const handleClick = (index) => {
    setState((prev) => {
      // click green => turn it red + add a new green at the end
      if (prev[index] === "green") {
        const updated =  prev.map((c, i) => (i === index ? 'red' : c));
        return [...updated, 'green']
      }
      // click red => delete the element
      if (prev[index] === "red") {
        return prev.filter((_, i) => i !== index);
      }
      return prev;
    });
  };
  
  return (
    <div style={{ display: "flex" }}>
      { 
        state.map((c, i) => (
        <Square key={i} index={i} color={c} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default MapFilterUseState;
