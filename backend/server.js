const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/getData",(req,res)=>{
    res.send("Venkitesh N S YOU ARE GREAT!!")
})

app.listen(port,()=>{
    console.log("app is running ");
    
})