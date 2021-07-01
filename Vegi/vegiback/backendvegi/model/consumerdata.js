import mongoose from 'mongoose'
 
// create scema of mongoose for decide filed
const scemacon = new mongoose.Schema({
    name:{
      type: String,
      required :true    
    },
    email:{
        type: String,
        required :true    
      },
      mobile:{
        type: Number,
        required :true    
      },
      password:{
        type: String,
        required :true    
      },
      roll :{
          type: String,
          require :false
      }

});
//create model/table in db
const Consumer = mongoose.model("vegiuser",scemacon);

export default Consumer;