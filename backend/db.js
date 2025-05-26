const mysql=require("mysql2")
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'e-commerce_website'
})
connection.connect((err)=>{
    if(err){
        console.error('databse conncetion failed:',err.stack)
    return;
    }
    console.log("database connected")
})
module.exports = connection;