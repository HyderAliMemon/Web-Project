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
router.get("/:id/getEventDetail",async(req,res)=>{
    const data=await Event.findOne({_id:req.params.id})
    res.json({status:"ok",data})
})
router.get("/:email/getCommunityevent",async(req,res)=>{
    const comm = await community.findOne({email:req.params.email})
    const data=await Event.find({community_id:comm._id})
    res.json({status:"ok",data})
});
router.get("/:location/:type/getLocationBasedEvents",async(req,res)=>{
    const events=await Event.find({eventlocation:req.params.location})
    const final=events.filter((event) => event.eventType == req.params.type)
    res.json(final)
});
router.get("/:id/getCommunityDetails",async(req,res)=>{
    const event=await Event.findOne({_id:req.params.id})
    const communityName=await community.findOne({_id:event.community_id})
    res.json(communityName.commname)
});
module.exports=router