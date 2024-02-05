const {Schema , model}=require("mongoose");
const {ObjectId}=Schema.Types;
const blogsSchema=new Schema({
    title:{type :String ,required : true},
    author:{type:ObjectId,required:true},
    content:{type:String,required:true},
    pages:{type:Number},
    creadedAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})

const models=new model("blogs",blogsSchema);
module.exports=models;