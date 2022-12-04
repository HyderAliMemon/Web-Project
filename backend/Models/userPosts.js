const moongose=require('mongoose')

const userPostsSchema=new moongose.Schema({
    postDescription:{
        type:String,
        max:100
    },
    image:{
        type:String,
    },
    Postlikes:{
        type:Array,
    },
    userID:{
        type:String,
        default:""
    },
});
module.exports=moongose.model("UserPosts",userPostsSchema);
