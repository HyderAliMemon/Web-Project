const community = require('../Models/Community');
const Event=require('../Models/Event');
const router=require("express").Router()
router.post("/addEvent",async(req,res)=>{
    const obj=await new Event({
        eventName:req.body.eventName,
        eventTime:new Date(Date.now()),
        eventlocation:req.body.eventlocation,
        eventType:req.body.eventType,
        eventStars:req.body.eventStars,
        community_id:req.body.community_id
    })
    try{    
        const result=await obj.save()
        res.json(result)
    }catch(err){
        res.send(500).json("Unable to add Event")
    }
});
router.get("/",async(req,res)=>{
    const data=await Event.find()
    res.json(data)
})
router.get("/:id",async(req,res)=>{
    const data=await Event.find({_id:req.params.id})
    res.json(data)
})
router.get("/:id/getCommunityevent",async(req,res)=>{
    const data=await Event.find({community_id:req.params.id})
    res.json(data)
})


module.exports=router