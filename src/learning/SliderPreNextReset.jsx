import { useState } from "react";

const listData = [
  {
    title: 'Slide 1',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    title: 'Slide 2',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    title: 'Slide 3',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    title: 'Slide 4',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

const Slides = ({data})=>{
    const [index, setIndex]= useState(0);
    
    const pre = ()=> {
        setIndex(i => i - 1);
        // setIndex(i => (i === 0 ? data.length -1 : i -1))
    };
    const next = ()=> {
        setIndex(i => i + 1);
        // setIndex(i => (i === data.length -1 ? 0 : i +1))
    };
    const reset = ()=> setIndex(0);
    return(
        <div className="border p-2 m-2">
            <button className="border px-2" onClick={pre} disabled={index === 0}>Previous</button>
            <button className="border mx-2 px-2" onClick={next} disabled={index === data.length-1}>Next</button>
            <button className="border px-2" onClick={reset} disabled={index === 0}>Reset</button>
            <div>
                <h1 className="text-2xl">{data[index].title}</h1>
                <p>{data[index].description}</p>
            </div>
        </div>
    )
}

const SliderPreNextReset = ()=>{
    return(
        <Slides data={listData}/>
    )
}
export default SliderPreNextReset;