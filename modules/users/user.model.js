const {Schema , model}=require("mongoose");

const usersSchema=new Schema({
name:{type:String ,required:true},
address:{type:String,required:true},
phoneNo:{type:Number}
})

const models=new model("users",usersSchema);
module.exports=models;