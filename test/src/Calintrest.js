import {useState} from 'react';
function Calinterest(){
  const [princeple ,setPrin] = useState(0);
  const [rate ,setRate] = useState(0);
  const [time ,setTime] = useState(0);
  const [intrest ,setIntrest] = useState(0);
   const updatePrin = (e)=>{
      setPrin(e.target.value);
   }
   const updateTime = (e)=>{
      setTime(e.target.value);
   }
   const updateRate = (e)=>{
      setRate(e.target.value);
   }
   function calInt(){
      const inter = princeple*rate*time/100;
      setIntrest(inter);
   }
   function calCom(){
       const  inter = princeple*(Math.pow((1+ rate/100),time))-princeple;
       const val=inter.toFixed(2);
       setIntrest(val);
   }
   
   return(
       <>
       <center>
       <h3>Calculate Interest</h3>
       <input type="number" placeholder='Princeple' onChange={updatePrin}></input>
       <input type="number" placeholder='Rate % ' onChange={updateRate}></input>
       <input type="number" placeholder='year' onChange={updateTime}></input>
      <button onClick={calInt}>Simple Intrest</button>
      <button onClick={calCom}>Compound Intrest</button>
      <h3>Intrest : {intrest}</h3>
       </center>
       </>
   );    
}
export default Calinterest;