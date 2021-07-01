import   Commant from './Commant';
// import {  Component, useState } from 'react';
import './App.css';
import './Portfolio.css'
//  import  Live  from './live'
 import Person from './person'
//import Portfolio from './Portfolio'
function App() {
  // const [ data , setdata] = useState("");
  // function btn() {
  //  setdata(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
  //  </p>)
  // }
 
  // return(
  //   <div id="main">
  //   <button id="click" onClick={btn}>click</button>
  //    {data}
  //   </div>
 // );
 return (
   <div>
     {/* <Live></Live> */}
     <switch> 
     <table>
       <tr>
         <td>
         <Person name="brajesh" age="21"></Person>
         </td>
         <td>
         <Person name="divakar" age="20"></Person>
         </td>
         <td>
           <Person name="sehdev" age="22"></Person>
         </td>
       </tr>
     </table>
     </switch>
<Commant name="brajesh" text='student'></Commant>





</div>

{/* <Portfolio></Portfolio> */}
   </div>
 );
}
export default App;
