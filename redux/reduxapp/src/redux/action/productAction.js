import {ActionType} from '../contant/action-type'
export const setProduct =(product)=>{
   return{
       type : ActionType.SET_PRODUCTS,
       payload : product 
   }    
}
export const selectProduct =(product)=>{
    return{
        type : ActionType.SELECTED_PRODUCTS,
        payload : product 
    }
 }