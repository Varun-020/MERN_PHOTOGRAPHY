const {model,Schema} = require("mongoose");
const bookingSchema = new Schema({
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
    date:{
        type:String,
        required:true
    }, 
    address:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = model("Booking",bookingSchema);