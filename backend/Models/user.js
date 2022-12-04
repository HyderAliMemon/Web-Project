const moongose=require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema=new moongose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        min:5
    },
    profilePic:{
        type:String,
        default:""
    },
    coverPic:{
        type:String,
        default:""
    },
    user_followers:{
        type:Array,
    },
    user_following:{
        type:Array,
    }
});

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id:this._id},'prvkey@12345',{expiresIn:"1h"})
    return token
}

module.exports=moongose.model("User",userSchema);
