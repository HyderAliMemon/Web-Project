const router=require('express').Router();
const User=require('../Models/user')
const bcrypt = require('bcryptjs')
router.post("/registeruser",async(req,res)=>{
        const hashed =  await bcrypt.hash(req.body.pass,10)
        const obj=new User({
          name:req.body.name,
          password:hashed,
          email:req.body.email
        })
        try{
          await obj.save()
          res.json({status:'ok'})
        }
        catch{
          res.json({status:'error',error:'Duplicate Email'})
        }
});
router.post("/loginuser",async(req,res)=>{
    const user= await User.findOne({email:req.body.email});
    if (!user){
        res.json({staus:'error',error:'Invalid Email'})
    }
    else if (!(await bcrypt.compare(req.body.pass,user.password))){
        res.json({status:'error',error:'Invalid Password'})
    }
    else{
        const token = user.generateAuthToken();
        res.json({status:'ok',data:token,name:user.name})
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.json(user)
    }
    catch(err){
        res.status(500).json('Error');
    }
});
router.put("/:id/followuser",async(req,res)=>{
    if(req.body.userid!=req.params.id){
        try{
            const usertoAdd=await User.findById(req.body.userid)
            const currentLoggedUsed=await User.findById(req.params.id)
            if(usertoAdd.user_followers.includes(req.params.id)){
                res.json("User already exists: ")
            }else{
                await usertoAdd.updateOne({$push:{user_followers:req.params.id}})
                await currentLoggedUsed.updateOne({$push:{user_following:req.body.userid}})
                res.json("User has been followed! ")
            }
        }
        catch(err){
            res.send(500).json("Unable to add")
        }
    }else{
        res.send("You cannot add yourself")
    }   
});
router.put("/:id/unfollowuser",async(req,res)=>{
    if(req.body.userid!=req.params.id){
        try{
            const usertoAdd=await User.findById(req.body.userid)
            const currentLoggedUsed=await User.findById(req.params.id)
            if(usertoAdd.user_followers.includes(req.params.id)){
                await usertoAdd.updateOne({$pull:{user_followers:req.params.id}})
                await currentLoggedUsed.updateOne({$pull:{user_following:req.body.userid}})
                res.json("User has been unfollowed! ")
            }else{
                res.json("User not available: ")
            }
        }
        catch(err){
            res.send(500).json("Unable to unfollow")
        }
    }else{
        res.send("You cannot unfollow yourself")
    }   
});
module.exports=router