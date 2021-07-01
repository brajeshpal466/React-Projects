import express from 'express'
import Consumer from '../model/consumerdata.js'
import bcrpty from    'bcryptjs'
import dotenv from 'dotenv'
import jsonwebtoken from 'jsonwebtoken'
dotenv.config({path:"config.env"})
const secretkey = process.env.SECRET_KEY;
const router = express.Router();
// to check if data is fetching
router.get('/',(req,res)=>{
  res.send("this the home page")
})
//get consumer data
router.get('/get/consumer', async(req,res)=>{
  let userdata = await Consumer.find({});
  res.json(userdata);
})
// creating post method for register user
router.post('/signup/consumer', async (req,res)=>{
    const {name , email, mobile,pass} = req.body;
    try{
   const exist  = await Consumer.findOne({email})
   if(exist){
    console.log("already exist email")
    return res.json({mes:"email is alredy exis !"})
   }
      const password = await bcrpty.hash(pass ,10);
       const newconsumer = {name, email,mobile,password}
       const user = Consumer(newconsumer);
       await user.save()
    res.status(200).json({mes:"User is signup successfully signup"})
  }catch(error){
      res.status(500).json({mes :"internal server error"})
  }
    })

    // login handle api
router.post('/login/consumer', async(req,res)=>{
  const {email,password} = req.body;
  console.log(email ,password)
  try{
  const consum = await Consumer.findOne({email});
  if(consum){
   const validpass = await bcrpty.compare( password,consum.password)
   if(!validpass){
      return res.status(400).json({mes:"userid and password incorrect"})
   }
    //console.log(validpass);
// jwt for create the token for the user 
   const token = jsonwebtoken.sign({
       id:consum.id}
     , "secretkey")
     //console.log(token , consum);
     // send the token and username though reponse
     res.cookie('cookiesName',token, { maxAge: 900000, httpOnly: true });
      //res.send("user is login with cookes")
     res.status(200).json({mes : "user is loged from db "})
   
  }
  return res.json({mes :"Acount doesn't exist"})
}catch(error){
  res.status(500).json({error :"internal server error"})
}  
})
export default router; 