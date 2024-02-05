const router=require("express").Router();
const userController=require("./user.controller");
const {validate}=require("./user.validator");

router.post("/",validate,async(req,res,next)=>{
try{
const data=req.body;
const result= await userController.create(data);
console.log(result);
res.json({msg :result});
}catch(e){
    next(e);
}
})

router.get("/",async(req,res,next)=>{
try{
const result= await userController.get();
console.log(result);
res.json({msg :result});
}catch(e){
    next(e);
}
})
router.get("/:id",async(req,res,next)=>{
try{
const result= await userController.getById(req.params.id);
res.json({msg :result});
}catch(e){
    next(e);
}
})
router.put("/:id",async(req,res,next)=>{
try{
const result=await userController.updateById(req.params.id,req.body);
res.json({msg :result});
}catch(e){
    next(e);
}
})
router.patch("/:id",async(req,res,next)=>{
try{
const result=await userController.updateById(req.params.id,req.body);
res.json({msg :result});
}catch(e){
    next(e);
}
})
router.delete("/:id",async(req,res,next)=>{
try{
const result=await userController.deleteById(req.params.id);
console.log(result);
res.json({result});
}catch(e){
    next(e);
}
})

module.exports=router;