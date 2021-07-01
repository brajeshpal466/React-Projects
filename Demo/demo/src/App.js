import React from 'react'
import {useState} from 'react'
import Login from './Login'
function App(){
  const [logper , setlogper] =useState(false);
  const [ name , setname] = useState()
  const [username, setusername] = useState()
  const [pass, setpass] = useState()
  const [dob, setdob] = useState()  
  const [user,setuser] = useState({});
  const submithandler =(e)=>{
   e.preventDefault()
   if( name == "" || username ==  "" || dob =="" || pass ==""){
     alert("all details menoty");
   }else{
    const user ={
       name : name,
       username : username,
       password : pass,
       DOB : dob 
     }
     setuser(user);
     setlogper(true);
   }
}


  return(
    <>
    UserName <input type="text" onChange={(e)=>{setusername(e.target.value)}} ></input>
    Name<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}></input>
    Password<input type="password" value={pass} onChange={(e)=>{setpass(e.target.value)}}></input>
    Date of Birth<input type="date" value={dob} onChange={(e)=>{setdob(e.target.value)}}></input>
    <button onClick={submithandler}>Submit</button>
  { logper && <Login userdata = {user}></Login>}
    </>
  )
}

export default App;