const express = require("express");
const router = express.Router();
const Songs=require("../modules/Songs.modules");


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

 
router.post("/sendSongs",async(req,res)=>{
    try
    {
      const {songName,songBanner,singer,url}=req.body;
      const result=await Songs(req.body);
      await result.save();
      if(result)
      {
         res.json("success")
      }
    }
    catch (error)
    {
     console.log(error);
    }
 })

 
 module.exports=router;