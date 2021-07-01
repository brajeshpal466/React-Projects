import useraction from "./actionType";

export const bookslot = (bookingdata)=>{
     return{
        type : useraction.BOOK_APPOINMENT,
        payload : bookingdata
     }
}