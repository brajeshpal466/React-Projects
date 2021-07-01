import mongoose from 'mongoose'
const URL = 'mongodb+srv://vegi:vegi@cluster0.uvims.mongodb.net/vegi?retryWrites=true&w=majority'

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then((response)=>{
    if(response){
        console.log("database is connect succesfully")
    }else{
        console.log("some error is occer during ")
    }
}).catch((error)=>{
    console.log("error is occering while connecting")
})