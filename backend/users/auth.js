const express=require("express")
const bcrypt=require("bcrypt")
const db=require("../db")
const router=express.Router()

router.post("/",(req,res)=>{
    const {email,password}=req.body
const query="SELECT FROM user WHERE  email=?";
db.query(query,[email],async(err,result)=>{
if(err)  return res.status(500).send("eror loging in ")
const user=result[0];
const match =await bcrypt.compare(password,user.password)
if(!match) return res.status(401).send("invalid password")
    res.send('login successfull')
})
})


router.post("/",async(req,res)=>{
    const {name,email,password,role}=req.body
    const hashpasword= await bcrypt.hash(password,10)

    const query="INSERT INTO users (username,email,password,role) VALUES(?,?,?,?)"
    db.query(query,[name,email,hashpasword,role],(err,result)=>{
        if(err) return res.status(500).send({message:"error in  resgistring user"})
            res.send("user registered succcefully ")
    })
})

module.exports=router