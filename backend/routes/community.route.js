const Community=require("../Models/Community");
const router=require("express").Router();
const bcrypt = require('bcryptjs')

router.get('/',async(req,res)=>{
    const data=await Community.find()
    res.json(data)
});


router.post("/addCommunity",async(req,res)=>{
    const hashed =  await bcrypt.hash(req.body.pass,10)
    const obj=new Community({
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
router.post("/logincomm",async(req,res)=>{
const com_user= await Community.findOne({email:req.body.email});
if (!com_user){
    res.json({staus:'error',error:'Invalid Email'})
}
else if (!(await bcrypt.compare(req.body.pass,com_user.password))){
    res.json({status:'error',error:'Invalid Password'})
}
else{
    const token = com_user.generateAuthToken();
    res.json({status:'ok',data:token,email:com_user.email})
}
});

module.exports=router;