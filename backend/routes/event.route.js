const community = require('../Models/Community');
const Event=require('../Models/Event');
const router=require("express").Router()
router.post("/addEvent",async(req,res)=>{
    const comm = await community.findOne({email:req.body.email})
    const obj=await new Event({
        eventName:req.body.eventName,
        eventTime:req.body.eventTime,
        eventlocation:req.body.eventlocation,
        eventType:req.body.eventType,
        eventStars:req.body.eventStars,
        community_id:comm._id
    })
    try{    
        await obj.save()
        res.json({status:"ok"})
    }catch(err){
        res.json({status:"error",message:"Failed to add Event"})
    }
});
router.get("/",async(req,res)=>{
    const data=await Event.find()
    res.json({status:"ok",data})
})
router.get("/:id",async(req,res)=>{
    const data=await Event.find({_id:req.params.id})
    res.json({status:"ok",data})
})
router.get("/:id/getCommunityevent",async(req,res)=>{
    const data=await Event.find({community_id:req.params.id})
    res.json({status:"ok",data})
})


module.exports=router