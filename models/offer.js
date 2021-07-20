const {model,Schema} = require("mongoose");
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = model("Offer",userSchema);