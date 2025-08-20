const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.get("/getData",(req,res)=>{
    res.send("Venkitesh N S")
})

app.listen(port,()=>{
    console.log("app is running ");
    
})