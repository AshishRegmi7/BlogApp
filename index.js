const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("dotenv").config();
const morgan=require("morgan");
const indexRouter=require("./routes");
const PORT=Number(process.env.PORT);

mongoose.connect(process.env.DB).then(
    console.log(`Database is connected BLOGAPP`)
)

app.use(express.json());
app.use(express.static("public"));

app.use((err,req,res,next)=>{
    err=err? err.toString() :"Something went wrong";
    err.status(500).json({msg:err});
})

app.use(morgan("dev"));

app.use("/",indexRouter);

app.listen(PORT,()=>{
    console.log(`Application is running on ${PORT}`)
})