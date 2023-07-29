const express=require('express');
const router=express.Router()
const list=require('./listmodel');
// const { app_features } = require('moongose/models');
// const listmodel = require('C:/Users/harih/OneDrive/Desktop/proj/listmodel.js');
router.get('/',async(req,res)=>{
try{
    const listfind=await list.find()
    res.json(listfind)
}
catch(err){res.send("error"+err)}
})
router.post('/list',async(req,res)=>{
    try{
       const {name1,age,sub}=req.body
       console.log(name1)
       const li=new list({
           name1,age,sub
       })
       console.log(req.body)
       await li.save()
       return res.json({msg:"Done"})
    }catch(err){res.send("error" +err)}
   }
   )
router.put('/list/:id',async(req,res)=>{
    try{
     const{name1,age,sub}=req.body
     await list.findOneAndUpdate({_id:req.params.id},{
        name1:name1,age:age,sub:sub
     })
     res.json({msg:"Updated"})
    }
    catch(err){

    }
})
module.exports=router
 