const express=require("express");
const app=express();
const cors=require('cors');
const path=require("path")
require('dotenv').config();
require("./DB/connection")

const corsAllow={
    origin:"*",
    method:"PUT,GET,PATCH,DELETE,POST",
    credentials:true
}

app.use(cors(corsAllow))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


// Optionally, you can define a static files directory (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));




app.use(require("./Routers/router"))
app.get('/',(req,res)=>{
    res.render("index")
})
app.listen(4000,(err)=>{
    console.log("server is running on 3000 port ")
})