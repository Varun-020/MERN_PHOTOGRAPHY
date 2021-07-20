const mongoose = require("mongoose");
require("dotenv").config();


const connect = async(req,res)=>{
    try {
        const response = await mongoose.connect(process.env.DB,{
            useCreateIndex:true,
            useFindAndModify:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("DB connected")
    }
    catch (error) {
        console.log(error.message);
    }
}
module.exports = connect;