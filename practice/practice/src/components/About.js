import React from 'react'
import Providers from '../GlobalProvider'
import {useContext,useState}  from 'react'
import Contact from './Contact'
function About() {
  const [cand, setname] = useState()
  const [amt, setamount] = useState()
  
  const value = useContext(Providers)
  console.log(value.state);
  
const submit =(e)=>{
  e.preventDefault();
  const trid = Math.floor(Math.random()*1000000);
  const obj = {
    name : cand,
    amount :amt,
    id : trid
  }
  value.dispatch({type : "ADD", data : obj})
  //console.log(obj);

}
//console.log(value.state);
    return (
        <>
     
       Name :<input type="text" value={cand} onChange={(e)=>{setname(e.target.value)}}></input>
       Amount :<input type="number" value={amt} onChange={(e)=>{setamount(e.target.value)}}></input>
       <button type="submit" onClick={submit}>submit</button>
   

            <h3>Name  : Donation</h3>
          {value.state.map((candi,index)=> <div id={candi.name+index} className="trans-list">{candi.name} : {candi.amount}
          &nbsp;<p id={candi.id} className="del-list" onClick={(e)=>{value.dispatch({type :"DEL", id : e.target.id}) }}>Delete<i/></p></div>)}
        </>
    )
}

export default About

