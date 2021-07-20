const {model,Schema} = require("mongoose");
const userSchema = new Schema({
    image:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = model("Image",userSchema);