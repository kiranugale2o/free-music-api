const mongoose=require('mongoose');

const songsSchema=new mongoose.Schema({
    songName:{
        type:String,
        require:true,
    },
    songBanner:{
        type:String
    },
    singer:{
        type:String
    },
    url:{
        type:String
    }
})

const Songs=new mongoose.model('songs',songsSchema);
module.exports=Songs;