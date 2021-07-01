// usecallback and usememo example
import React from 'react'
import Button from './Components/Button'
import Text from './Components/Text';
import Title from './Components/Title'
import {useState ,useCallback} from 'react'
function App() {
  const [count, setcount] = useState(0);
  const [age, setage] = useState(0);
   const handlecount =   useCallback(
     () => {
      setcount(count+1);
     },
     [count],
   ); 
   const handleage =   useCallback(
    () => {
     setage(age+1);
    },
    [age],
  ); 



  return (
    <div>
      <Title></Title>
      <Text text={count}>counter</Text>
      <Button handler={handlecount}>IncrementCount</Button>
      <Text text={age}>age</Text>
      <Button handler={handleage}>IncrementAge</Button>
    </div>
  )
}

export default App
