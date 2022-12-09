const Invitation=require('../Models/Invitation')
const router=require("express").Router()
const Veteran=require('../Models/User')
const Event=require('../Models/Event')

router.post('/sendInvite',async(req,res)=>{
    const invitation = new Invitation(req.body)
    const result=await invitation.save()
    res.json(result)

});
router.post('/:email/acceptInvite',async(req,res)=>{
    const event=await Invitation.findOne({VeteranEmail:req.params.email})
    const person=await Veteran.findOne({email:req.params.email})
    const detailsOfEvent= await Event.findOne({_id:event.EventID})
    try{
        await person.updateOne({$push:{InterestedEvents:event.EventID}})
        let stars=person.stars
        let eventStars=detailsOfEvent.eventStars
        let totalStars=stars+eventStars
        await person.updateOne({stars:totalStars})
        await Invitation.deleteOne({EventID:event.EventID})
        res.json({message:"done"})
    }
    catch(err){
        res.json("Unable to Accept Invitation")
    }
});
router.post('/isInvited',async(req,res)=>{
    const invitation = await Invitation.findOne({EventID:req.body.EventID,VeteranEmail:req.body.VeteranEmail})
    if (!invitation)
        res.json({isInvited:false})
    else
        res.json({isInvited:true})
});
router.get('/:email/getInvitations',async(req,res)=>{
    const veteran=await Veteran.findOne({email:req.params.email})
    const invitations=await Invitation.find({VeteranEmail:veteran.email})
    res.json(invitations)
});
router.post('/:eventid/rejectInvite',async(req,res)=>{
    console.log(req.body.eventID)
    await Invitation.deleteOne({EventID:req.params.eventid})
    res.json({message:"done"})

})
module.exports=router