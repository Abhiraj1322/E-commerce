const exprees=require("express")
const router=exprees.Router();
const db= require('../db');


router.post("/",(req,res)=>{
    const{user_id,product_id,quantity,name}=req.body

const query='INSERT INTO cart_items(user_id,product_id,quantity,name) Values(?,?,?,?)'
db.query(query,[user_id,product_id,quantity,name],(err,results)=>{
    if(err){
        console.log(err)
        console.error("eror in adding field",err)
        res.status(500).json({error:"databses eror"})
    }
    res.status(200).json({mesaage:"item added succesfuly",id:results.user_id})
})
})
router.get("/:user_id",(req,res)=>{
const {user_id}=req.params;
const query='SELECT * FROM cart_items WHERE user_id= ?'
db.query(query,[user_id],(err,results)=>{
    if(err) return res.status(500).json({message:"eror in fetching data",err})
        res.json(results)
})
})
router.put("/:id",(req,res)=>{
    const {id}=req.params;
    const{quantity}=req.body
    const query='UPDATE cart_items SET quantity=? WHERE id =?'
    db.query(query,[quantity,id],(err)=>{
        if(err) return res.status(500).json({eror:'databse eror'})
            res.json({message:'cart items updated'})
    })
})
router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    const query='DELETE FROM cart_items WHERE id = ?';
db.query(query,[id],(err)=>{
        if(err) return res.status(500).json({eror:"eror in deleting"})
        res.json({message:"cart items removed"})
    })
})
module.exports=router 