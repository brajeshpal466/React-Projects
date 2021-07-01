 export const incNum =(num)=>{
    return {type :"INCREMENT",
            payload : num   }
}
export const decNum =(dec)=> {
 return  { type:"DECREMENT",
           payload : dec}
}
