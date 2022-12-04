const router=require('express').Router();
const UserPosts=require('../Models/userPosts')
router.post("/addpost",async(req,res)=>{
    const obj=new UserPosts(req.body);
    const result=await obj.save()
    res.json(result)
});
router.get("/",async(req,res)=>{
    const data=await UserPosts.find()
    res.send(data)
})
router.put("/:id/updatepost",async(req,res)=>{
    const postdata=await UserPosts.findById(req.params.id)
    try{
        if (postdata.userID===req.body.userID){
             await UserPosts.updateOne({$set:req.body});
            res.json("Post has been updated! ")
        }else{
            res.json("Sorry ! cannot update other's post.")
        }
    }
    catch(err){
        res.json("error")
    }
});
router.delete("/:id/deletepost",async(req,res)=>{
    const postdata=await UserPosts.findById(req.params.id)
    try{
        if (postdata.userID===req.body.userID){
             await UserPosts.findOneAndDelete();
            res.json("Post has been deleted ! ")
        }else{
            res.json("Sorry ! cannot delete other's post.")
        }
    }
    catch(err){
        res.json("error")
    }
});
router.put("/:id/likepost",async(req,res)=>{
    const user=await UserPosts.findById(req.params.id)
    if(user.Postlikes.includes(req.body.userID)){
            await user.updateOne({$pull:{Postlikes:req.body.userID}})
            res.json("Post has been disliked !")
    }else{
            await user.updateOne({$push:{Postlikes:req.body.userID}})
            res.json("Post has been Liked! ")
    }   
});

module.exports=router