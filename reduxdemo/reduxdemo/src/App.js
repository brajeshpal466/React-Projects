
import './App.css';
import {useSelector ,useDispatch} from 'react-redux'
import  {incNum ,decNum }from './action/index'

function App() {
  const mystate = useSelector(state => state.changeNumber)
 const dispatch = useDispatch()
  return (
    <div className="container" >
 <h3>Increment/Decrement</h3>
    <div>
    <h4>using react redux</h4>
 <p>{mystate}</p>
 <button onClick={()=>{dispatch(decNum(4))}} >Decrement</button>
 <button onClick={()=>{dispatch(incNum(5))}} >Increment</button>
    </div>
    </div> 
  );
}

export default App;
