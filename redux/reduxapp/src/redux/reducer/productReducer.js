 const inisilaState ={product : [{
    id : 1,
    title :"tomato",
    type : "vegitable"
}]};
export const productReducer =(state= inisilaState , {type ,payload})=>{
       switch(type){
        case "ActionType.SET_PRODUCT" :
        return state;
        default :
        return state;

       }
}