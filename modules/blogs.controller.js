const blogModel=require("./blogs.model");

const create=(payload)=>{
    return blogModel.create(payload);
}
const get=()=>{
    return blogModel.find();
}
const getById=(id)=>{
    return blogModel.findOne({id});
}
const updateById=(id,payload)=>{
    return blogModel.updateOne({id},payload);
}
const deleteById=(id)=>{
    return blogModel.deleteOne({id});
}

module.exports={create,get,getById,updateById,deleteById}