const router=require('express').Router();
const User=require('../Models/User')
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
        res.json({status:'ok',data:token,email:user.email})
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
router.get("/:id/getUsername",async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.json(user.name)
    }
    catch(err){
        res.status(500).json('Error');
    }
});
router.get("/:type/getHobbyUsers",async(req,res)=>{
    try{
        const users=await User.find({hobbies:req.params.type});
        res.json({status:'ok',users})
    }
    catch(err){
        res.json({status:'Error'});
    }
});

router.get("/:email/getUser",async(req,res)=>{
    try{
        const user=await User.findOne({email:req.params.email});
        res.json({status:'ok',user})
    }
    catch(err){
        res.json({status:'Error'});
    }
});

router.post("/:email/followuser",async(req,res)=>{
    if(req.body.email!==req.params.email){
        try{
            const usertoAdd=await User.findOne({email:req.body.email})
            const currentLoggedUsed=await User.findOne({email:req.params.email})
            if(usertoAdd.user_followers.includes(currentLoggedUsed.email)){
                res.json({status:"error",message:"User already Followed"})
            }else{
                await usertoAdd.updateOne({$push:{user_followers:currentLoggedUsed.email}})
                await currentLoggedUsed.updateOne({$push:{user_following:usertoAdd.email}})
                res.json({status:"ok",message:"User has been followed Succesfully!"})
            }
        }
        catch(err){
            res.json({status:"error",message:"Unable to follow"})
        }
    }else{
        res.json({status:"error",message:"You cannot follow yourself"})
    }   
});
router.post("/:email/unfollowuser",async(req,res)=>{
    if(req.body.email!==req.params.email){
        try{
            const usertoAdd=await User.findOne({email:req.body.email})
            const currentLoggedUsed=await User.findOne({email:req.params.email})
            if(usertoAdd.user_followers.includes(req.params.email)){
                await usertoAdd.updateOne({$pull:{user_followers:req.params.email}})
                await currentLoggedUsed.updateOne({$pull:{user_following:req.body.email}})
                res.json({status:"ok",message:"User has been unfollowed Succesfully!"})
            }else{
                res.json({status:"error",message:"User not in follow list"})
            }
        }
        catch(err){
            res.json({status:"error",message:"Unable to unfollow"})
        }
    }else{
        res.json({status:"error",message:"You cannot unfollow yourself"})
    }   
});
module.exports=router