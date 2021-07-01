import React from 'react'
import {useState}  from 'react'
export default function Login(props) {
    const [username, setusename] = useState()
    const [password, setpassword] = useState()
    const loginhandler =(e)=>{
     e.preventDefault();
       if(username == props.userdata.username && password == props.userdata.password){
           alert("user is login")
       }else{
           alert("please enter right username and password")
       }
    }
    return (
        <div>
           UserName <input onChange={(e)=>{setusename(e.target.value)}}></input>
           Password <input onChange={(e)=>{setpassword(e.target.value)}}></input>
        <button onClick={loginhandler}>Login</button>
        </div>
    )
}
