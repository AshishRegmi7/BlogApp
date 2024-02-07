const blogModel=require("./blogs.model");

const create=(payload)=>{
    return blogModel.create(payload);
}
const get=()=>{
    return blogModel.aggregate([
        {
          '$lookup': {
            'from': 'users', 
            'localField': 'author', 
            'foreignField': '_id', 
            'as': 'author'
          }
        }, {
          '$unwind': {
            'path': '$author', 
            'preserveNullAndEmptyArrays': false
          }
        }, {
          '$project': {
            'author': '$author.name', 
            'title': 1, 
            'pages': 1, 
            'content': 1
          }
        }
      ]);
}
const getById=(_id)=>{
    return blogModel.findOne({_id});
}
const updateById=(_id,payload)=>{
    return blogModel.updateOne({_id},payload);
}
const deleteById=(_id)=>{
    return blogModel.deleteOne({_id});
}

module.exports={create,get,getById,updateById,deleteById}