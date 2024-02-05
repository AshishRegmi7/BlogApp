const router=require("express").Router();
const blogsRouter=require("../modules/blogs/blogs.route");
const usersRouter=require("../modules/users/user.route");

router.use("/api/v1/blogs",blogsRouter);
router.use("/api/v1/users",usersRouter);
module.exports=router;