import React from 'react'
import {useReducer , useContext} from 'react'
const  reducer =(action ,state)=>{
      switch(action){
          case 'ADD':
              return [...state ,action.payload]
          case 'DEL':
              return  state.filter( (item)=> item.type === action.payload)
         
      }
}
const initialState  = [];
function Item() {
     const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
                
        </div>
    )
}

export default Item
