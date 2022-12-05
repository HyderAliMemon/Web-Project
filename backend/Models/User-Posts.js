const moongose=require('mongoose')

const userPostsSchema=new moongose.Schema({
    postDescription:{
        type:String,
        max:100,
        default:""
    },
    image:{
        type:String,
        default:""
    },
    Postlikes:{
        type:Array,
        default:[]
    },
    userID:{
        type:String,
        default:""
    },
    postTime:{
        type:Date,
        upsert:true
    }
});
module.exports=moongose.model("UserPosts",userPostsSchema);
