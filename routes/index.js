const router=require("express").Router();
const blogsRouter=require("../modules/blogs.route");


router.use("/api/v1/blogs",blogsRouter);

module.exports=router;