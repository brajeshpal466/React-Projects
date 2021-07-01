import React from 'react'
import {useHistory,BrowserRouter as Router,Switch,Route} from 'react-router-dom'
//import { useRef } from 'react'
import Slots from './Slots';
import {useState} from 'react'
function Userdata() {
const history = useHistory();
   const [name, setname] = useState();
   const [dec, setdec] = useState();
    const btnhandler =(e)=>{
          if(!name || !dec){
              alert("fill the details")
              return
          }
          const user = {name,dec};
                   history.push('/calender')          
    }
 

    return (
        <div className="container">
              <h1>Meeting Room Booking</h1>
            <div className="form-group">
                <label for="meeting-room" >Meeting Room</label>
          <select id="meeting-room" className="form-control">

              <option value="training">Training</option>
           </select>
          <label for="name">Name</label>
          <input id="name" className=" form-control" type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter Your Name" ></input>
         <label for="meeting-des">Meeting Description</label>
          <input id="meeting-des" className="form-control" type="text" value={dec} onChange={(e)=>{setdec(e.target.value)}} placeholder="Enter Meeting Description"></input>
        <label for="date"></label>
          <input id="date" type="date" className="form-control"></input>
          <Slots></Slots>
          <button onClick={btnhandler}>Submit</button>
            </div>
           
        </div>
    )
}

export default Userdata
