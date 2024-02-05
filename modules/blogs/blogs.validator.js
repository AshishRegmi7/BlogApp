const Joi =require("joi");

const schema=Joi.object({
    title:Joi.string().required(),
    author:Joi.string().required(),
    content:Joi.string().required(),
    pages:Joi.number().required(),
    createdAt:Joi.date().required(),
    updatedAt:Joi.date().required()
})

const validate=(req,res,next)=>{
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).json({error:error.details[0].message});
    }
    next();
}
module.exports={validate};