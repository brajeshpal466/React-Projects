
function Person(props){
 return(
     <div>
         <div className="card">
        <p>{props.name}</p>
        <p>{props.age}</p>
         </div>
     </div>
 );
}
export default Person;