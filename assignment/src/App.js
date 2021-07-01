// import React, { Component, useState } from "react";
// //import Holyday from './Holyday';
// // import States from './States'
// import './App.css';
// function App(){
//   return(
//     <>
//     {/* <Holyday></Holyday> */}
//     {/* <States></States> */}

// import { useCallback, useState } from "react";

//     </>
//   )
// }

// clock assignment
// import React, {Component, useState} from "react";
// import './App.css';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state ={ date :new Date()};
//   }
//  tick(){
//     this.setState({date : new Date});
//   }

//   componentDidMount(){
//    this.timer =  setInterval(()=>this.tick(),1000); 
//   }
//   componentWillUnmount(){
//     //console.log("unmounting..");
//       clearInterval(this.timer);

//   }

//     render(){
//         return(
//             <div className="Clock">
//                <h3 id="time">{this.state.date.toLocaleTimeString()}</h3>
//             </div>
//         );
//     }
// }
// export default App;

// assignment to correcct onClick and onDoubleClick
// import React, { useEffect, useState } from "react";
// import './App.css';

// const App = () => {

//   let [count, setCount] = useState(0);

//   return (
//     <div class="ball">
//       <h1 class="count" onDoubleClick = {() => { alert("cant edit it") }}>{count}</h1>
//       <button class='increment-button' onClick = {()=>{setCount(count+1)}}>Increment</button>
//     </div>
//   )
// }

// export default App;

// coundown counter
// import React, { Component, useState, useEffect } from "react";
// import './App.css';

// const App = () => {
//   const [count ,setCount] = useState(0);
//   const inter = setInterval(counter,1000);
//   const timer =(e)=>{
//     let val = e.target.value;

//    if(!isNaN(val) && val !== 0 ){
//     setCount(Math.floor(val) );
//    }else{
//     clearInterval(inter);    
//    }  
//   }

//   function counter(){
//     if(count >0){
//       setCount(count-1);
//     }else if(count === 0){

//       clearInterval(inter);

//     }
//   }
//      return (
//     <div className="wrapper">
//       <div id="whole-center">
//         <h1>
//           Reverse countdown for<input id="timeCount" onKeyPress ={timer} /> sec.
//         </h1>
//       </div>
//       <div id="current-time">{count}</div>
//     </div>
//   )
// }
// export default App;
//import Shape from './Sha  pe';
// import CurrencyConverter from './CorrencyConverter' ; 
// import {useState, useEffect} from 'react';


//  use state example
//   const App = ()=>{
//     const inputbox = useRef();
//   const changeDom = ()=>{
//     inputbox.current.style.width ="400px";
//     inputbox.current.value = 100;
//   }

//    return(
//      <>
//         {/* <Shape></Shape> */}
//         {/* <CurrencyConverter></CurrencyConverter> */}
//         {/* <Circle slide ={slides}></Circle> */}
// <h1>guggu</h1>
// <input ref={inputbox} style={{width:"100px"}} type="text"></input>
// <button onClick={changeDom}>change style</button>
//      </>
//    ); 
//    }  
//   export default App;


// assignment trending amazon slides 
// import Circle from './circle';
// const App = ()=>{

//   const slides = [
//     {
//       title: "Today's workout plan",
//       text: "We're gonna do 3 fundamental exercises.",
//     },
//     {
//       title: "First, 10 push-ups",
//       text: "Do 10 reps. Remember about full range of motion. Don't rush.",
//     },
//     {
//       title: "Next, 20 squats",
//       text: "Squats are important. Remember to keep your back straight.",
//     },
//     {
//       title: "Finally, 15 sit-ups",
//       text: "Slightly bend your knees. Remember about full range of motion.",
//     },
//     {
//       title: "Great job!",
//       text: "You made it, have a nice day and see you next time!",
//     },
//   ];
//    return(
// <>
// <Circle slides={slides}></Circle>
// </>
//    );
// }
// export default App;


// usRef use in react 
// import {useRef} from 'react';  
// function App(){
//   const element  = useRef();
//   const create = ()=>{
//     console.log(element.current);
//     const h = document.createElement('h1');
//     h.innerText="heading added";
//     element.current.appendChild(h);
//     console.log(h);
//   } 

//   return (
//     <>
// <div ref={element}>here this element is select for the button command </div>
// <button onClick={create}>create </button>
//     </>
//   );
// }
// export default App;
// diffrent between event and useaRef
// import {useRef} from 'react';

//   const App =()=>{
// const  element = useRef(null);
//     function createEle(e){
//       const newDiv = document.createElement('div');
//       newDiv.innerText ="this is new div added inside the div element"
//      const  divref = element.current;
//       const divtar = e.target;
//        divref.appendChild(newDiv);
//     }
//     return (
//       <>
//       <div onClick = {createEle} ref={element} id='divele'>this is main div</div>
//       <button >create</button>
//       </>
//     )
//   }
// 

//  routing example 
// import {BrowserRouter as Router ,Link, Route, Switch} from 'react-router-dom';
// import Circle from './circle';
// import Comp1 from './router/Comp1';
// import Comp2 from './router/Comp2';
// import Comp3 from './router/Comp3';
// import Comp4 from './router/Comp4';
// import Notfound from './router/Notfound';

//  function App(){
//    return (<>
//      <Router>
//       <center>
//          <nav>
//          <ul>
//            <li>
//              <Link to='/'>Home</Link>
//            </li>
//            <li>
//              <Link to='/comp1'>Comp1</Link>
//            </li>
//            <li>
//              <Link to='/comp2'>Comp2</Link>
//            </li>
//            <li>
//              <Link to='/comp3'>Comp3</Link>
//            </li>
//            <li>
//              <Link to='/comp4'>Comp4</Link>
//            </li>
//          </ul>
//          </nav>
//        </center>

// <Switch>
//   <Route  exact path='/'>
//     Home
//   </Route>
//   <Route path='/comp1'>
//     <Comp1></Comp1>
//   </Route>
//   <Route path='/comp2'>
//     <Comp2></Comp2>
//   </Route>
//   <Route path='/comp3'>
//     <Comp3></Comp3>
//   </Route>
//       <Route path='/comp4'>
//         <Comp4></Comp4>
//       </Route>
//       <Route path='*'>
//         <Notfound></Notfound>
//       </Route>
// </Switch> 

//      </Router>
//    </>
//    )
//  }
//  export default App;
import React from 'react'
import {useState ,useRef} from 'react';
// import Countdown from './cowndowns/Countdown'
const App =()=> {
  var arr  = ["Siblings","Friends","Love","Affection","Marriage","Enemy","Please Enter valid input"];
  const [getrel ,setRel ] = useState();
  
  const calRelation = () => {
    let input1 = document.querySelector('#inputfirst').value;
  let input2 = document.querySelector('#inputlast').value;
    if (input1 === "" || input2 === "") {
      setRel(6);
    } else {    
     input1 = input1.toLowerCase();
     input2 = input2.toLowerCase();
      function match(input1, input2) {
        let count = 0;
        for (let i in input1){
          if(input2.includes(input1[i])){
          ++count;  
          }
        }
        return count;
      }
      const comm = match(input1,input2);
      let l1 = Number(input1  .length);
      let l2 = Number(input2.length);
      let len = Number(comm);
       let n  = l1+l2-len*2;
       setRel(n%6);
    }
  }
  const clearRelation = () => {
     document.querySelector('#inputfirst').value="";
     document.querySelector('#inputlast').value="";
     setRel("");

  }
  return (
    <div id="main">
      <label>First Name</label><input type="text" data-testid="input1" id="inputfirst"></input> <br></br>
      <label>Last Name</label><input type="text" data-testid="input2" id="inputlast"></input><br></br>
      <button data-testid="calculate_relationship" onClick={calRelation} >Calculate Relationship Future</button>
      <button data-testid="clear" onClick={clearRelation}>Clear inputs and relationship status</button>
      <h3 data-testid="answer" id="relation">{arr[getrel]}</h3>
    </div>
  )
}
export default App
