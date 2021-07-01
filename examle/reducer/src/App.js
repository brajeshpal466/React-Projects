import './App.css';
import './components/header.css';
import Header from './components/Header';
import Userdata from './components/Userdata';
import Calender from './components/Calender';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div>
   <Router>
     <Header></Header>
     <Switch>
       <Route exact path='/'>
       <Userdata></Userdata>
       </Route>
    <Route exact path='/calender'>
    <Calender></Calender>
    </Route>
 
     </Switch>
   
   </Router>
 
    </div>
  );
}

export default App;
