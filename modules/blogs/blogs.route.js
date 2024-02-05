const router=require("express").Router();
const blogController=require("./blogs.controller");
const {validate}=require("./blogs.validator");

router.post("/",validate,async(req,res,next)=>{
try{
const data=req.body;
const result= await blogController.create(data);
console.log(result);
res.json({msg :result});
}catch(e){
    next(e);
}
})

router.get("/",async(req,res,next)=>{
try{
const result= await blogController.get();
console.log(result);
res.json({msg :result});
}catch(e){
    next(e);
}
})
router.get("/:id",async(req,res,next)=>{
try{
const result= await blogController.getById(req.params.id);
res.json({msg :result});
}catch(e){
    next(e);
}
})
router.put("/:id",async(req,res,next)=>{
try{
const result=await blogController.updateById(req.params.id,req.body);
res.json({msg :result});
}catch(e){
    next(e);
}
})
router.patch("/:id",async(req,res,next)=>{
try{
const result=await blogController.updateById(req.params.id,req.body);
res.json({msg :result});
}catch(e){
    next(e);
}
})
router.delete("/:id",async(req,res,next)=>{
try{
const result=await blogController.deleteById(req.params.id);
console.log(result);
res.json({result});
}catch(e){
    next(e);
}
})

module.exports=router;