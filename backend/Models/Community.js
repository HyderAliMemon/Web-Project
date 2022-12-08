const moongose=require('mongoose')
const jwt = require('jsonwebtoken')

const communitySchema=new moongose.Schema({
    commname:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        min:5
    },
    community_type:{
        type:String,
        default:""
    }
});

communitySchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id:this._id},'commprvkey@12345',{expiresIn:"1h"})
    return token
}
module.exports=moongose.model("Community",communitySchema);
