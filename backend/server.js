const exprees=require("express")
const app =exprees()
const db=require("./db")
const productroutes=require("./routes/products")
const ordersroutes=require("./routes/orders")
const cart_itemsroutes=require("./routes/cart_items")
const auth=require("./users/auth")
app.use(exprees.json());

app.use("/products",productroutes)
app.use("/orders",ordersroutes)
app.use("/cart",cart_itemsroutes)
app.use("/auth",auth)

app.listen(8000,()=> console.log("server is listening to port 8000"))