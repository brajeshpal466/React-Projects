import './component.css'
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const Menu = ()=>{
    return(
        <Router>
        <>
        <div  className="main_menu_bar">
      <div className="brand_name">HolyMaker</div>
     <div className="menu_list">
         <ul>
             <li> 
                 <NavLink to="/">Home</NavLink>
             </li>
             <li>
                 <NavLink to="/about">About</NavLink>
             </li>
             <li>
                 <NavLink to="/Services">Services</NavLink>
             </li>
             <li>
                 <NavLink to="/contact">Contact</NavLink>
             </li>
            
         </ul>
     </div>
        </div>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/about">
                <About></About>
            </Route>
            <Route exact path="/services">
                <Services></Services>
            </Route>
            <Route exact path="/contact">
                <Contact></Contact>
            </Route>
        </Switch>
        </>
        </Router>
    );
}
export default Menu;