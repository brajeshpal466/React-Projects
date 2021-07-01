import {Component} from 'react';
class Holyday extends Component {
    constructor(props){
      super(props);
      this.mycities = ['Goa(India)', 'Amsterdam(Netherlands)', 'New York(USA)', 'Darjeeling(India)', 'Tokyo(Japan)', 'Lonavala(India)'];
     this.state = {
       data :""
     }
   }
     componentWillMount(){
       const arr = this.mycities.filter((item)=>{
         if(item.includes("India")){
           return item;
         }
       })
       console.log(arr);
       const val= arr.map((city,index)=>{
       return(
         <li key={"location"+(index+1)}>{city}</li>
       )
     });
     
     this.state = {data : val}
       
    }
   render(){
   return(
   <div id="main">
   <ol>{this.state.data}</ol>
   </div>
   )
   }
   }
   export default Holyday;