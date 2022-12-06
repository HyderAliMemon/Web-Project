const router=require('express').Router();
const UserPosts=require('../Models/User-Posts')
const User=require('../Models/User')
router.post("/addpost",async(req,res)=>{
    const user = await User.findOne({email:req.body.email})
    const obj=new UserPosts({
        postDescription:req.body.postDescription,
        userID:user._id,
        image:req.body.image,
        postTime:new Date(Date.now()),
});
    await obj.save()
    res.json({status:'ok'})
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
    if(user.Postlikes.includes(req.body.email)){
            await user.updateOne({$pull:{Postlikes:req.body.email}})
            res.json("Post has been disliked !")
    }else{
            await user.updateOne({$push:{Postlikes:req.body.email}})
            res.json("Post has been Liked! ")
    }   
});

router.post("/:id/isLiked",async (req,res)=>{
    const posts=await UserPosts.findById(req.params.id)
    if(posts.Postlikes.includes(req.body.email)){
        res.json({isLiked:true})
    }
    else{
        res.json({isLiked:false})
    }
});

router.get("/:email/allposts",async(req,res)=>{
    try{
        const veterans=await User.findOne({email:req.params.email})
        const veteransPosts=await UserPosts.find({userID : veterans._id})
        const otherPosts=await Promise.all(
            veterans.user_following.map( async (user_email)=>{
                const new_veteran = await User.findOne({email:user_email})
                return UserPosts.find({userID:new_veteran._id})
            })
        );
        res.json(veteransPosts.concat(...otherPosts))
    }
    catch{
        res.json([])
    }
})

module.exports=router