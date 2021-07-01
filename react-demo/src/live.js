import {useState} from 'react';
function Live(){
    let data = "brajesh";
    const [d ,setData] = useState(data);
    function liveData(event){
      data = event.target.value;
      setData(data);
      console.log(data);
    };
 
    return(
<div className="container">
    <h3>{d}</h3>
    <input className="input" onChange ={liveData} placeholder="search.."></input>
</div>
);
}
export default Live;