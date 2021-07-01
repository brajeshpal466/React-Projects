import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {useState,useEffect} from 'react'
import {uuid } from 'uuidv4';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
function App() {
 const LOCAL_STORAGE_KEY = "contacts";
  const [contacts ,setContact] = useState([]);
 
  useEffect(()=>{
   const retriewContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriewContact) setContact(retriewContact);
  },[])
  useEffect(()=>{ 
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts)); 
  },[contacts]);
  
 const addhandler =(contact)=>{
  setContact([...contacts,{ id: uuid(),...contact }]);
 }
 const removeContacthandler = (idd)=>{
  
   const removedContact =  contacts.filter(item => item.id !==idd );
   console.log(removedContact);
   setContact(removedContact);
  }
  return (
    <div className="ui container">
  
  
  <Header></Header>
  
      {/* <AddContact   addhandler={addhandler}></AddContact> */}
       <ContactList contact ={contacts}  removeContacthandler={removeContacthandler}></ContactList>
   
    </div>
  );
}

export default App;
