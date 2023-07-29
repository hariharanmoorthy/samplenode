const mongoose= require('mongoose')
const listschema= new mongoose.Schema({
    name1:{
        type:String,
        required:true,  
    },
    age:{
        type:Number,
        required:true,
        default:"18"
    },
    sub:{
        type:Boolean,
        required:true,
        default: false,
    }
})
module.exports=mongoose.model('listmodel',listschema);