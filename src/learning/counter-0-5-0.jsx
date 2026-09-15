import { useState } from 'react';
//each click +1 untill reach 5 each click -1 until reach 0
const  Counter_050 = ()=> {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  // const [increas, setIncreas] = useState(true);

  const handleClick = ()=>{
    const next = count + step;
    setCount(next);
    if(next >= 5){
      setStep(-1)
    }
    else if(next <= 0){
      setStep(1);
    }

    // if(increas){
    //   if(count < 5){
    //     setCount(c  => c + 1)
    //   }
    //   else{
    //     setIncreas(false);
    //     setCount(c => c - 1)
    //   }
    // }
    // else{
    //   if(count > 0){
    //     setCount(c => c - 1)
    //   }
    //   else{
    //     setIncreas(true);
    //     setCount(c => c + 1)
    //   }
    // }
  }
  return (
    <div>
      <p>{count}</p>
      {/* <p>{increas}</p> */}
      <button onClick={handleClick} > Click</button>
    </div>
  );
}
export default Counter_050;