const express=require('express');
const router=express.Router();
const db=require("../db");

router.post("/",(req,res)=>{
const[user_id,product_id,qauntity]=req.body;
const query= "INSERT INTO orders(user_id,product_id,quantity) Values(?,?,?)"
db.query(query,[user_id,product_id,qauntity],(err,results)=>{
    if(err) return res.status(500).send("Eror in creating order")
        res.json(results)
}) 
})

router.get("/:user_id",(req,res)=>{
    const {user_id}=req.params
    const query="SELECT * FROM orders WHERE user_id=?"
    db.query(query,[user_id],(err,results)=>{
        if(err)
        return res.status(500).send({message:"Eror in fetching  orders"})
    res.json(results);
    })
})
router.delete("/:id",(req,res)=>{
    const {id}=req.params
    const query ="DELETE FROM  orders WHERE id=?"
    db.query(query,id,(err,results)=>{
if(err)
    return res.status(500).send({message:"Eror in deleting order"})

        res.json({message:"deleted succesfully"})
    })
})
router.put("/:id",(req,res)=>{
    const{id}=req.params
    const {quantity}=req.body
   const query ="UPDATE orders SET quantity=? WHERE id=?"
   db.query(query,quantity,id,(err,results)=>{
    if (err) return res.status(500).send({message:"Eror in editing orders"})
        res.json( results)
   })
})
module.exports=router