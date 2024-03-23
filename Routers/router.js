const express = require("express");
const router = express.Router();
const Songs=require("../modules/Songs.modules");

//get songs route
router.get("/getSongs",async(req,res)=>{
    try
    {
        const songs=await Songs.find({});
        if(songs)
        {
         res.json(songs).status(201);
        }
    }
    catch (error)
    {
     console.log(error);
    }
 })

 //post songs route
router.post("/sendSongs",async(req,res)=>{
    try
    {
      const result=await Songs(req.body);
      await result.save();
      if(result)
      {
         res.json("success")
      }else
      {
        res.json("unsuccess")
      }
    }
    catch (error)
    {
     console.log(error);
    }
 })

 //music album
router.get("/album/:name",async(req,res)=>{
   try {
       const album=req.params.name;
       const songs=await Songs.find({albumname:album})
       if((songs.length)!==0)
       {
        res.json(songs)
        console.log(songs)
       }else{
     
       res.json(album+" is not Found")
       }

   } catch (error) {
    console.log(error)
   }
})


 module.exports=router;