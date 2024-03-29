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
router.post("/getLocationBasedEvents",async(req,res)=>{
    if (req.body.location==='' && req.body.type===''){
        const final=await Event.find()
        res.json(final)
    }
    else if (req.body.location===''){
        const final=await Event.find({eventType:req.body.type})
        res.json(final)
    }
    else if (req.body.type===''){
        const final=await Event.find({eventlocation:req.body.location})
        res.json(final)
    }
    else{
        const final=await Event.find({eventlocation:req.body.location,eventType:req.body.type})
        res.json(final)
    }
});
router.get("/:id/getCommunityDetails",async(req,res)=>{
    const event=await Event.findOne({_id:req.params.id})
    const communityName=await community.findOne({_id:event.community_id})
    res.json(communityName)
});
module.exports=router