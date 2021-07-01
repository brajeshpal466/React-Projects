import { useState } from "react";

function Cities(props){
    return(
 <>
 {
     props.city.map((ct,index)=>{
    return <>
      <div key={index+1}>{ct.name}</div>
      <Town town={ct.towns}></Town>
    </>
     })
 }
 </>
    );
 }
function Town(props){
    return(
        <>
        {
            props.town.map((town,index)=>{
                return <>
                <div key={index}>{town.name}</div>
                </>
            }
            )
        }
        </>
    )
}

function States(props){
    const [boolst ,setBoolst] = useState(false); 


return(
    <>
    {props.state.map((st, index)=>{
        return <>
        <div  key={index}>{st.name}</div>
        <Cities city={st.cities}></Cities>
        </>
    })}
    </>
);
}
export default States;