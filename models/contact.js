const {model,Schema} = require("mongoose");
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },  
    email:{
        type:String,
        required:true
    },  
    contact:{
        type:String,
        required:true
    }, 
    subject:{
        type:String,
        required:true
    }, 
    message:{
        type:String,
        required:true
    }, 
},{timestamps:true});

module.exports = model("Contact",userSchema);