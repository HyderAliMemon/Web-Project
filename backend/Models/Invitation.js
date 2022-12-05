const moongose=require('mongoose')

const invitationSchema=new moongose.Schema({
    EventID:{
        type:String,
        default:""
    },
    VeteranEmail:{
        type:String,
        default:""
    },
});
module.exports=moongose.model("Invitation",invitationSchema);