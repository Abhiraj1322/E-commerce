const exprees=require("express")
const router=exprees.Router();
const db=require("../db");
 const multer=require('multer')
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+ file.originalname);
    }
})
const uploads=multer({storage:storage})




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
router.post("/",uploads.single('image'),(req,res)=>{
const{name,description,price}=req.body
const image_url=req.file ? req.file.filename:null;
const query='INSERT INTO products (name,price,description,image_url) values (?,?,?,?)';
db.query(query,[name,description,price,image_url],(err,results)=>{
   if(err)
    return res.status(500) .json({message:"eror in adding products",err})
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