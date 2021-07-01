
import './App.css';
import CovidApi from './api/CovidApi';
import {useEffect} from 'react'
function App() {
  useEffect(() => {
   CovidApi()
  }, [])
  return (
    <div >

    </div>
  );
}

export default App;
