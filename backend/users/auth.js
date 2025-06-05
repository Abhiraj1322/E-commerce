const express=require("express")
const bcrypt=require("bcrypt")
const db=require("../db")
const jwt=require('jsonwebtoken')
const router=express.Router()
const SECRET_KEY="1a2b3c4d5e6f7g8h9i0jK!@#QwErTyUiOp"
router.post("/login",(req,res)=>{
    const {email,password}=req.body
const query="SELECT * FROM users WHERE  email=?";
db.query(query,[email],async(err,result)=>{
    console.log(err)
if(err)  return res.status(401).send("eror loging in ")
if(result.length==0){
    return res.status(401).send("user not found");
}
const user=result[0]; 
const userid=user.id
const match =await bcrypt.compare(password,user.password)
if(!match) return res.status(401).send("invalid password")
const payload={ 
    id:user.id,
    email:user.email,
    role:user.role,     
}

  const token=jwt.sign(payload,SECRET_KEY,{expiresIn:'1h'}) 
    return res.json({token ,userid,message:"Login successful"})
  
})
})

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(query, [name, email, hashedPassword, role], (err, result) => {
      if (err) {
        console.log("db eror",err)
        return res.status(500).send({ message: "Error registering user" },);
      }

      res.send({ message: "User registered successfully" });
    });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
});

module.exports=router