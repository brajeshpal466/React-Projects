

const inilialState ={
   leftslots : 150,
   bookedslots:0,
   usermess:"",
   BookedUser : []
}
 export const bookingReducer = ( state= inilialState ,{type ,payload})=>{
     switch (type) {
         case "useraction.BOOK_APPOINMENT":
             if(state.leftslots!==0 || state.bookedslots===150){
                state.usermess ="slots are not avaible";
                return state; 
            }
             state.leftslots = state.leftslots-1;
             state.bookedslots = state.bookedslots+1;
             state.BookedUser =[...state.BookedUser,payload];
             state.usermess ="Your slot is Booked"
            return  state;
     
         default:
             return state;
     }
 }