const express= require('express')
const mongoose=require('mongoose')
const bp=require('body-parser')

const app=express();
app.use(bp.json())
const url="mongodb://localhost/AlienDBex"
app.use(express.json())
const router=require('C:/Users/harih/OneDrive/Desktop/proj/list.js' )
app.use('/',router)
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,family:4});
const con= mongoose.connection;
con.on('open',()=> 
console.log("connected"))
app.listen(4000,()=>
console.log("server started"))
