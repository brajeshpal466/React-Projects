import React from 'react';
import {useRef ,useState} from 'react';
function Countdown() {
     const [time ,setTime] = useState(0);
     const input = useRef(null);
const starttimer = ()=>{
    const val = input.current.value;
    setTime(val);
    const settimer = setInterval( ()=>{
      if(time>0){
        setTime(time-1);
      }else{
          clearInterval(settimer);
      }
       
    },1000)
}
    return (
        <div>
       <input ref={input} type="number" id="inputCount" onKeyDown={starttimer}></input>  
       <h3>{time}</h3>   
        </div>
    )
}

export default Countdown;
