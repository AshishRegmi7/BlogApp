const Joi =require("joi");

const schema=Joi.object({
    name:Joi.string().required(),
    address:Joi.string().required(),
    phoneNo:Joi.number().required(),
 
})
const validate=(req,res,next)=>{
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({error:error.details[0].message});
    }
    next();
}
module.exports={validate};