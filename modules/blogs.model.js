const {Schema , model}=require("mongoose");

const blogsSchema=new Schema({
    title:{type :String ,required : true},
    author:{type:String,required:true},
    content:{type:String,required:true},
    pages:{type:Number},
    creadedAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})

const models=new model("blogs",blogsSchema);
module.exports=models;