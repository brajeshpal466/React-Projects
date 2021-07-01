import React from 'react'
import {useState } from 'react'
import {useHistory}  from 'react-router-dom'
function Signup() {
   const history =  useHistory()
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [mobile, setmobile] = useState()
    const [pass, setpass] = useState()
    const [cpass, setcpass] = useState()
    const [error,seterror] = useState()
    const signuphandler = (e) => {
        e.preventDefault();
        if(!name || !email || !mobile || !pass || !cpass){
            seterror("Value must be filled")
        }else if(!email.includes('@')  ){
            seterror("Email should be valid")
        }
        else{
       const newuser ={
           name,email,mobile,pass
       }
     fetch('http://localhost:5500/signup/consumer',{
         method :"POST",
         headers : {
             'Content-Type' : 'application/json'
         },
         body: JSON.stringify(newuser)
     }).then((response)=> response.json()).then((data)=>{
       if(data.status === 422 || !data){
         return  seterror("invalid registation")
       }
       history.push('/login')
       console.log(data.mes);
       return seterror(data.mes)
     }).catch((error)=>{
         seterror(error.message)
     })
      
    }
      
   }

 
    return (
        <>
            <center><div className="response">{error}</div></center> 
        <div className="signup-body">
         
            <div className="signup-form">
        
        <i className="fa fa-user"></i>
        <input placeholder="Name" value={name} onChange={(e) => { setname(e.target.value) }}></input>
                <input placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }}></input>
                <input placeholder="Mobile No" value={mobile} onChange={(e) => { setmobile(e.target.value) }}></input>
                <input placeholder="Password" value={pass} onChange={(e) => { setpass(e.target.value) }}></input>
                <input placeholder="Password Confirm" value={cpass} onChange={(e) => { setcpass(e.target.value) }}></input>
        <button className="btn btn-success btn-sm" onClick={signuphandler}>SignUp</button>
            </div>
        </div>
        </>
    )
}

export default Signup
