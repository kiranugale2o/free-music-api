const mongoose=require('mongoose');

const playListSchema=new mongoose.Schema({
    playlistName:{type:String},
    playlistBanner:{type:String},
    playlistSongs:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Songs",
        }
    ]

},
{timestamps:true}
)

const PlayList=mongoose.model("playlist",playListSchema);

module.exports=PlayList;

