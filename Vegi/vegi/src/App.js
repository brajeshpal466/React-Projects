import './App.css';
import './components/menu.css'
import './components/home.css'
import './components/cart.css'
import './components/login.css'
import './components/signup.css'
import Menu from './components/Menu'
import Home from './components/Home'
import Item from './components/Items'
import Login from './components/Login'
import Signup from './components/Signup'
import Cart from   './components/Cart'
import {BrowserRouter as Router ,Switch,Route,NavLink} from 'react-router-dom'
function App() {
  return (  
<Router>
<div >
      <Menu></Menu>
      
      <div className="space"></div>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route exact path='/login'>
        <Login  ></Login>
        </Route>
        <Route exact path='/cart'>
          <Cart></Cart>
        </Route>
        <Route exact path='/signup'>
          <Signup></Signup>
        </Route>
        {/* <Item></Item> */}
          
    </Switch>
    </div>
    </Router>
  );
}

export default App;
