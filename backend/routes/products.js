const exprees=require("express")
const router=exprees.Router();
const db=require("../db");



router.get("/",(req,res)=>{
    const query="SELECT * FROM products"
db.query(query,(err,results)=>{
if(err) return res.status(500).json({message:"eror"},err)
res.json(results)
})
})

router.get("/:id",(req,res)=>{
    const {id}=req.params
    const query='SELECT * FROM products WHERE id=?'
    db.query(query,[id],(err,results)=>{
   if(err) 
    return res.status(500).json ({message:"eror in getting products"},err)
res.json(results)
    })
})
router.post("/",(req,res)=>{
const{name,description,price}=req.body
const query='INSERT INTO products (name,price,description) values (?,?,?)';
db.query(query,[name,description,price],(err,results)=>{
   if(err)
    return res.status(500) .json({message:"eror in adding products"})
  res.json(results);

})
})
router.put("/:id",(req,res)=>{
    const {name,description,price}=req.body
    const{id}=req.params
    const query='UPDATE products SET description=? price=? WHERE id=?'
    db.query(query,[name,description,price,id],(err,results)=>{
        if(err)
            return res.status(500).json ({message:"eror in updating products"})
        res.json(results)
    })
})

router.delete("/:id",(req,res)=>{
    const {id}=req.params

  const query="DELETE FROM  products WHERE id=? "
  db.query(query,[id],(err,results)=>{
    if(err)
        return res.status(500).json({message:"eror in deleting products"})
     res.json(results)
 })
})

module.exports=router