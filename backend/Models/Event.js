const moongose=require('mongoose')

const eventSchema=new moongose.Schema({
    eventName:{
        type:String,
        default:""
    },
    eventTime:{
        type:String,
        default:""
    },
    eventStars:{
        type:Number,
        max:5000
    },
    eventType:{
        type:String,
        default:""
    },
    eventlocation:{
        type:String,
        default:""
    },
    community_id:{
        type:String,
        default:""
    }
});
module.exports=moongose.model("Event",eventSchema);
