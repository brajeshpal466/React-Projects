const inisialState = 0;
const changeNumber =( state = inisialState ,action)=>{
      switch(action.type){
          case "INCREMENT": return state+ action.payload;
          case "DECREMENT": return state- action.payload;
          default : return state;
      }
}
export default changeNumber;