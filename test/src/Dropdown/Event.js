import {useState} from 'react';
function Event(){
  const [bool , setBool] = useState(true);
  const [name , setName] = useState('');
  const [count , setCount] = useState(0);
  const toggle = (e)=>{
    setBool(!bool);
    
  }
  const livetext = (name,event)=>{
      
      setTimeout( ()=>{
        setName(event.target.value);
      },1000)
  }
  const increment =()=>{
    setCount(count+1);   
  }
  const decrement =()=>{
    setCount(count-1);   
  }
    return(
<>

  <h1>{name}</h1>
  <h2>{count}</h2>
<input onChange = {(e)=>livetext('name', e)} type="text" placeholder="enter text"></input>
<button onClick={toggle}>{bool ? 'On' : 'Off' }</button>
<button onClick={increment}>Increment</button>
<button onClick={decrement} disabled = {count === 0}>Decrement</button>
</>
    );
}
export default Event;