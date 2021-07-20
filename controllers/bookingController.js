const nodemailer = require('nodemailer');
const Booking = require("../models/booking")
require('dotenv').config();


transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: process.env.USER,
            pass: process.env.PASS
         },
    secure: true,
});

module.exports.booking=async(req,res)=>{
    const {name,email,contact,address,date} = req.body;
    const mailData = {
        from: process.env.USER,  // sender address
        to: process.env.RECEIVER,   // list of receivers
        subject: `BOOKING CALL`,
        text: `Ref BOOKING Sudam Photography` ,
        html :` <br/><b>Hey Sudam You have one BOOKING </b><br/>
        <br> Name:${name}<br/> 
        <br> Email:${email}<br/> 
        <br> Contact:${contact}<br/> 
        <br><b> Address:${address}</b><br/>
        <br><b> Date:${date}</b><br/>`
    }
    const errors=[];
    if(!name  || !email || !contact || !address || !date){
        errors.push({msg:"Enter all fields"})
    }
    if(date){
        if(Date.parse(date)-Date.parse(new Date())<0){
            errors.push({msg:"Selected date is in the past"});

        }
    }
    if(contact?.length !=10){
        errors.push({msg:"contact must be 10 digit"})
    }
    if(errors?.length>0){
        return res.status(400).json({errors:errors});
    }else{
        try {
            const {response} = await Booking.create({
                name,email,contact,address,date
            })
            transporter.sendMail(mailData, function (err, info) {
                if(err)
                  console.log(err)
            });
            return res.status(200).json({msg:"Data submitted successfully",response});
        } catch (error) {

            return res.status(500).json({errors:error.message});
        }
    }
};

 