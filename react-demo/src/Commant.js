import { Component } from "react";
  function Avatar(props) {
 <>
    <h3>{props.name}</h3>       
    <p>{props.url}</p>       
  </>
  }


function Commant(props) {
    const user ={
        name : props.name,
        url :"http/sgsh/hdj"
    }

    return(
        <div className="commants">
         <div className="userInfo">
             <Avatar userdetail ="props.user"></Avatar>
             </div>
             <p>{props.text}</p>        
        </div>
    );
}
export default Component