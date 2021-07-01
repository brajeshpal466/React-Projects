import React from 'react'
import {NavLink}  from 'react-router-dom'
import  {useState} from 'react'
function Login() {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [error, seterror] = useState()
 //   const [loged, setloged] = useState()
    const loginhandler = async ()=>{
       if(!email || !password){
          seterror('Please fill details')
       }else if(!email.includes('@')){
           seterror('Email must be valid')
       }else{
           const logdata = {
             email,password
           }
       const response= await fetch('http://localhost:5500/login/consumer',{
            method :"POST",
            headers :{
                'Content-Type' :'application/json'
            },
            body : JSON.stringify(logdata)
        })
        const usermes = await response.json();
         //console.log(usermes.mes);   
        seterror(usermes.mes);  
   
        //     setloged(usermes.username);
//        alert(loged);
       }
    }
    return (
        <>
         <center><div className="response">{error}</div></center> 
        <div className="login-form">
            
        <div className="form-body">
     
        <i class="fa fa-lock " ></i>
        <input type="text" placeholder="Email" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
        <button className="btn btn-primary btn-sm" onClick={loginhandler}>Login</button>
        <div>don't have account <NavLink to='/signup'>SignUp</NavLink></div>
        </div>
 
        </div>
        </>
    )
}
export default Login;