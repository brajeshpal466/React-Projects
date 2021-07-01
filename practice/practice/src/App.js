// taking data and deletion throigh the usecontex and usereducer
import {React,useReducer} from 'react' 
import Providers from './GlobalProvider'
import Menu from './components/Menu'
import './components/menu.css'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import About from './components/About'
import Contact from './components/About'
import Home  from './components/Home'
import Login from './components/Login'
const inisialvalue = [

] ;
function  reducer(state,action){
   switch(action.type ){
     case 'ADD':
       return ([...state, action.data]);
     case 'DEL':
      return (
          state.filter((item)=> item.id != action.id) );
      }
}

function App() {
  
  const [state, dispatch] = useReducer(reducer, inisialvalue);
  
  return (
    <Providers.Provider value={{state,dispatch}}>
    <div>
      <Router>
      <Menu></Menu>
      <Switch>
        <Route exact path="/">
          <Home ></Home>
        </Route >
        <Route exact path="/about">
          <About ></About>
        </Route>
        <Route exact path="/contact" >
          <Contact ></Contact>
        </Route>
        <Route exact path="/login" >
          <Login></Login>
        </Route>
        <Route path="*">
      <h2>404</h2>
        </Route>
      </Switch>
      </Router>

    </div>
    </Providers.Provider>
   
  )
}

export default App

