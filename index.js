const express=require("express");
const app=express();
const cors=require('cors');
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



app.use(require("./Routers/router"))
app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(4000,(err)=>{
    console.log("server is running on 3000 port ")
})